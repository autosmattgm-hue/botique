(function(){
  const STORAGE_KEY='flagship-theme';
  const labels={
    fr:{toLight:'Blanc',toDark:'Sombre',lightLabel:'Passer au fond blanc',darkLabel:'Passer au fond sombre'},
    en:{toLight:'White',toDark:'Dark',lightLabel:'Switch to white background',darkLabel:'Switch to dark background'}
  };

  function getLanguage(){
    return (window.FlagshipI18n&&window.FlagshipI18n.getLanguage&&window.FlagshipI18n.getLanguage())||document.documentElement.lang||'fr';
  }

  function getStoredTheme(){
    try{
      return localStorage.getItem(STORAGE_KEY)||'dark';
    }catch(e){
      return 'dark';
    }
  }

  function setStoredTheme(theme){
    try{
      localStorage.setItem(STORAGE_KEY,theme);
    }catch(e){}
  }

  function updateControls(theme){
    const lang=getLanguage()==='en'?'en':'fr';
    const copy=labels[lang];
    const nextIsLight=theme!=='light';
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      button.textContent=nextIsLight?copy.toLight:copy.toDark;
      button.setAttribute('aria-label',nextIsLight?copy.lightLabel:copy.darkLabel);
    });
    document.querySelectorAll('.theme-dot').forEach(dot=>{
      dot.classList.toggle('active',dot.dataset.mode===theme);
    });
  }

  function applyTheme(theme){
    const normalized=theme==='light'?'light':'dark';
    document.body.classList.toggle('light-mode',normalized==='light');
    setStoredTheme(normalized);
    updateControls(normalized);
  }

  function init(){
    applyTheme(getStoredTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      button.addEventListener('click',()=>{
        applyTheme(document.body.classList.contains('light-mode')?'dark':'light');
      });
    });
    document.querySelectorAll('.theme-dot').forEach(dot=>{
      dot.addEventListener('click',()=>applyTheme(dot.dataset.mode));
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(button=>{
      button.addEventListener('click',()=>setTimeout(()=>updateControls(getStoredTheme()),0));
    });
  }

  window.FlagshipTheme={apply:applyTheme};

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();
