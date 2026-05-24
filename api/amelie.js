const NVIDIA_URL='https://integrate.api.nvidia.com/v1/chat/completions';
const DEFAULT_MODEL='meta/llama-4-maverick-17b-128e-instruct';

const STORE_CONTEXT=[
  'You are Amélie, the AI concierge for Flagship Boutique.',
  'Flagship Boutique is a luxury fashion sourcing and personal shopping boutique.',
  'The default customer language is French, but you can answer in English when requested.',
  'Brand promise: luxury fashion without borders.',
  'Core services: personal shopping, luxury sourcing, designer bag sourcing, luxury watches, jewelry and accessories, full wardrobe curation, gift concierge, VIP access.',
  'Main categories: designer bags, luxury shoes, watches, jewelry, exclusive clothing, personal shopping.',
  'Process: 1) collect a brief with brand, model, size, color, budget, destination, deadline, and acceptable alternatives; 2) check boutique access, partner availability, price, condition, and authenticity signals; 3) coordinate purchase, payment steps, delivery expectations, and aftercare notes.',
  'Trust checklist: clear product references, authenticity review before purchase, transparent sourcing fees, delivery expectations confirmed, aftercare notes when relevant.',
  'Contact channels: WhatsApp +39 329 663 0234, Telegram @Flagshipboutique, Instagram @flagship_boutique.',
  'Website pages: Home / index.html, Collections / collections.html, Services / services.html, Guide / guide.html.',
  'Personal shoppers respond within 24 hours.',
  'Do not claim an item is currently in stock unless the user confirms inventory or a human shopper verifies it.',
  'Do not collect card numbers, passwords, one-time codes, or sensitive payment information. Direct users to official boutique contact channels for purchase/payment steps.',
  'Keep replies concise, premium, helpful, and conversion-focused. Ask one useful follow-up question when needed.'
].join('\n');

function parseBody(req){
  try{
    const body=req.body;
    if(!body)return {};
    if(typeof body==='object')return body;
    if(typeof body==='string')return JSON.parse(body);
    return {};
  }catch(error){
    return {};
  }
}

function allowedOrigin(req){
  const origin=req.headers&&req.headers.origin;
  if(!origin)return null;

  const configured=String(process.env.ALLOWED_ORIGINS||'')
    .split(',')
    .map(item=>item.trim())
    .filter(Boolean);
  if(configured.includes(origin))return origin;

  try{
    const host=req.headers&&req.headers.host;
    return host&&new URL(origin).host===host?origin:null;
  }catch(error){
    return null;
  }
}

function setHeaders(req,res){
  const origin=allowedOrigin(req);
  if(origin)res.setHeader('Access-Control-Allow-Origin',origin);
  res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  res.setHeader('Cache-Control','no-store');
  res.setHeader('Vary','Origin');
}

function cleanLanguage(language){
  return language==='en'?'en':'fr';
}

function fallbackReply(language){
  if(language==='en'){
    return 'Amélie is almost ready. Please ask about collections, services, sourcing, or contact Flagship Boutique on WhatsApp at +39 329 663 0234.';
  }
  return 'Amélie est presque prête. Vous pouvez me demander les collections, les services, le sourcing, ou contacter Flagship Boutique sur WhatsApp au +39 329 663 0234.';
}

module.exports=async function handler(req,res){
  setHeaders(req,res);

  if(req.method==='OPTIONS'){
    return res.status(204).end();
  }

  if(req.method!=='POST'){
    return res.status(405).json({error:'Method not allowed'});
  }

  const body=parseBody(req);
  const message=String(body.message||'').trim();
  const language=cleanLanguage(body.language);

  if(!message){
    return res.status(400).json({error:'Message is required'});
  }

  if(message.length>2000){
    return res.status(400).json({error:'Message is too long'});
  }

  const apiKey=process.env.NVIDIA_API_KEY;
  if(!apiKey){
    return res.status(503).json({reply:fallbackReply(language), error:'NVIDIA_API_KEY is not configured'});
  }

  const systemPrompt=[
    STORE_CONTEXT,
    language==='fr'?'Answer in French unless the user explicitly asks for English.':'Answer in English unless the user explicitly asks for French.'
  ].join('\n\n');

  try{
    const response=await fetch(NVIDIA_URL,{
      method:'POST',
      headers:{
        Authorization:`Bearer ${apiKey}`,
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model:process.env.NVIDIA_MODEL||DEFAULT_MODEL,
        messages:[
          {role:'system',content:systemPrompt},
          {role:'user',content:message}
        ],
        max_tokens:512,
        temperature:0.65,
        top_p:0.9,
        frequency_penalty:0,
        presence_penalty:0,
        stream:false
      })
    });

    const data=await response.json().catch(()=>({}));

    if(!response.ok){
      return res.status(502).json({
        reply:fallbackReply(language),
        error:data.error||data.message||'AI provider request failed'
      });
    }

    const reply=data?.choices?.[0]?.message?.content;
    if(!reply){
      return res.status(502).json({reply:fallbackReply(language),error:'AI provider returned no reply'});
    }

    return res.status(200).json({reply});
  }catch(error){
    return res.status(500).json({reply:fallbackReply(language),error:'AI request failed'});
  }
};
