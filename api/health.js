module.exports=function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  res.status(200).json({
    ok:true,
    aiConfigured:Boolean(process.env.NVIDIA_API_KEY),
    model:process.env.NVIDIA_MODEL||'meta/llama-4-maverick-17b-128e-instruct'
  });
};
