(function(){
  const endpoint=window.AMELIE_API_ENDPOINT||'';
  const knowledge={
    brand:'Flagship Boutique',
    assistant:'Amélie',
    promise:'Luxury fashion sourcing and personal shopping without borders.',
    channels:{
      whatsapp:'+39 329 663 0234',
      whatsappUrl:'https://wa.me/393296630234',
      telegram:'@Flagshipboutique',
      telegramUrl:'https://t.me/Flagshipboutique',
      instagram:'@flagship_boutique',
      instagramUrl:'https://www.instagram.com/flagship_boutique'
    },
    pages:[
      {name:'Home',url:'flagship-boutique.html'},
      {name:'Collections',url:'collections.html'},
      {name:'Services',url:'services.html'},
      {name:'Guide',url:'guide.html'}
    ],
    categories:['Designer Bags','Luxury Shoes','Watches','Jewelry','Exclusive Clothing','Personal Shopping'],
    process:['Brief: brand, size, budget, destination, deadline, alternatives.','Search: boutique access, partner availability, price, condition, authenticity signals.','Secure: purchase coordination, payment steps, delivery expectations, aftercare notes.'],
    responseTime:'Personal shoppers respond within 24 hours.'
  };

  const copy={
    fr:{
      role:'concierge IA',
      greeting:'Bonjour, je suis Amélie, votre concierge Flagship Boutique. Je peux vous aider avec les collections, le sourcing, les services, le guide de demande et les contacts.',
      placeholder:'Demandez a Amélie...',
      send:'Envoyer',
      chips:['Collections','Services','Contact','Guide'],
      fallback:'Je peux vous orienter vers les collections, expliquer le personal shopping, preparer une demande de sourcing ou vous donner les contacts directs.',
      contact:`Vous pouvez joindre Flagship Boutique sur WhatsApp au ${knowledge.channels.whatsapp}, Telegram ${knowledge.channels.telegram}, ou Instagram ${knowledge.channels.instagram}. Les personal shoppers repondent sous 24 heures.`,
      collections:`Flagship Boutique source des sacs createurs, chaussures de luxe, montres, joaillerie, vetements exclusifs et demandes de personal shopping. Consultez collections.html pour les drops et images Instagram.`,
      services:'Le service commence par un brief, puis une recherche de disponibilite et d authenticite, puis la securisation de l achat et de la livraison. Vous pouvez demander un article precis ou une curation complete.',
      guide:'Pour une demande rapide, envoyez la marque, le modele, captures, couleur, taille, budget, pays de livraison, delai et alternatives acceptees.',
      authenticity:'Chaque demande est traitee avec verification d authenticite, controle de disponibilite, transparence des frais et confirmation des attentes de livraison.',
      shipping:'La livraison depend du pays, de la disponibilite et du type de piece. Envoyez votre destination et votre delai pour recevoir une option claire.',
      payment:'Les etapes de paiement sont confirmees apres validation de la piece, du prix et de la disponibilite. Ne partagez jamais de donnees sensibles dans le chat.'
    },
    en:{
      role:'AI concierge',
      greeting:'Hi, I am Amélie, your Flagship Boutique concierge. I can help with collections, sourcing, services, request guidance, and contact channels.',
      placeholder:'Ask Amélie...',
      send:'Send',
      chips:['Collections','Services','Contact','Guide'],
      fallback:'I can point you to collections, explain personal shopping, prepare a sourcing request, or give you direct contact channels.',
      contact:`You can reach Flagship Boutique on WhatsApp at ${knowledge.channels.whatsapp}, Telegram ${knowledge.channels.telegram}, or Instagram ${knowledge.channels.instagram}. Personal shoppers respond within 24 hours.`,
      collections:'Flagship Boutique sources designer bags, luxury shoes, watches, jewelry, exclusive clothing, and personal shopping requests. Visit collections.html for drops and Instagram visuals.',
      services:'The service starts with a brief, then availability and authenticity checks, then purchase and delivery coordination. You can request one piece or a full wardrobe curation.',
      guide:'For a faster request, send brand, model, screenshots, color, size, budget, delivery country, deadline, and acceptable alternatives.',
      authenticity:'Every request is handled with authenticity review, availability checks, transparent sourcing fees, and confirmed delivery expectations.',
      shipping:'Delivery depends on country, availability, and item type. Send your destination and deadline for a clear option.',
      payment:'Payment steps are confirmed after item, price, and availability approval. Never share sensitive payment data in chat.'
    }
  };

  function lang(){
    return ((window.FlagshipI18n&&window.FlagshipI18n.getLanguage&&window.FlagshipI18n.getLanguage())||document.documentElement.lang||'fr')==='en'?'en':'fr';
  }

  function includesAny(text,words){
    return words.some(word=>text.includes(word));
  }

  function localReply(message){
    const l=lang();
    const c=copy[l];
    const text=message.toLowerCase();
    if(includesAny(text,['contact','whatsapp','telegram','instagram','phone','number','message','contacter','telephone']))return c.contact;
    if(includesAny(text,['collection','product','products','bag','bags','shoe','shoes','watch','watches','jewelry','clothing','drop','sac','chaussure','montre','bijou','vetement','produit']))return c.collections;
    if(includesAny(text,['service','personal','shopper','shopping','source','sourcing','consultation','wardrobe','gift','vip','cadeau','garde-robe']))return c.services;
    if(includesAny(text,['guide','request','brief','budget','size','model','brand','demande','taille','marque','modele']))return c.guide;
    if(includesAny(text,['authentic','authenticity','fake','trust','original','authentique','confiance']))return c.authenticity;
    if(includesAny(text,['shipping','delivery','deliver','ship','livraison','pays']))return c.shipping;
    if(includesAny(text,['payment','pay','price','fee','stripe','paypal','paiement','prix','frais']))return c.payment;
    return c.fallback;
  }

  async function getReply(message){
    if(endpoint){
      try{
        const response=await fetch(endpoint,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({message,language:lang(),context:knowledge})
        });
        if(response.ok){
          const data=await response.json();
          if(data&&data.reply)return data.reply;
        }
      }catch(e){}
    }
    return localReply(message);
  }

  function addMessage(container,text,type){
    const message=document.createElement('div');
    message.className=`amelie-msg ${type}`;
    message.textContent=text;
    container.appendChild(message);
    container.scrollTop=container.scrollHeight;
  }

  function syncLanguage(panel){
    const l=lang();
    const c=copy[l];
    panel.querySelector('.amelie-role').textContent=c.role;
    panel.querySelector('.amelie-input').placeholder=c.placeholder;
    panel.querySelector('.amelie-send').textContent=c.send;
    panel.querySelectorAll('.amelie-chip').forEach((chip,index)=>{chip.textContent=c.chips[index];});
  }

  function init(){
    if(document.getElementById('amelie-toggle'))return;
    const button=document.createElement('button');
    button.id='amelie-toggle';
    button.className='amelie-toggle';
    button.type='button';
    button.setAttribute('aria-label','Chat with Amélie');
    button.textContent='A';

    const panel=document.createElement('section');
    panel.className='amelie-panel';
    panel.setAttribute('aria-label','Amélie AI concierge');
    panel.innerHTML=`
      <div class="amelie-head">
        <div><strong class="amelie-name">Amélie</strong><span class="amelie-role"></span></div>
        <button class="amelie-close" type="button" aria-label="Close Amélie">×</button>
      </div>
      <div class="amelie-messages" aria-live="polite"></div>
      <div class="amelie-chips">
        <button class="amelie-chip" type="button"></button>
        <button class="amelie-chip" type="button"></button>
        <button class="amelie-chip" type="button"></button>
        <button class="amelie-chip" type="button"></button>
      </div>
      <form class="amelie-form">
        <input class="amelie-input" type="text" autocomplete="off">
        <button class="amelie-send" type="submit"></button>
      </form>`;

    document.body.appendChild(button);
    document.body.appendChild(panel);

    const messages=panel.querySelector('.amelie-messages');
    const input=panel.querySelector('.amelie-input');
    syncLanguage(panel);
    addMessage(messages,copy[lang()].greeting,'bot');

    button.addEventListener('click',()=>{
      panel.classList.toggle('open');
      if(panel.classList.contains('open'))input.focus();
    });
    panel.querySelector('.amelie-close').addEventListener('click',()=>panel.classList.remove('open'));
    panel.querySelectorAll('.amelie-chip').forEach(chip=>{
      chip.addEventListener('click',()=>submit(chip.textContent));
    });
    panel.querySelector('.amelie-form').addEventListener('submit',event=>{
      event.preventDefault();
      submit(input.value);
      input.value='';
    });

    async function submit(value){
      const message=value.trim();
      if(!message)return;
      panel.classList.add('open');
      addMessage(messages,message,'user');
      addMessage(messages,await getReply(message),'bot');
    }

    document.querySelectorAll('[data-lang-toggle]').forEach(toggle=>{
      toggle.addEventListener('click',()=>setTimeout(()=>{
        syncLanguage(panel);
        if(messages.children.length===1)messages.firstElementChild.textContent=copy[lang()].greeting;
      },0));
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();
