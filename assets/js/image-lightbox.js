(function(){
  let lightbox;
  let image;
  let caption;
  let closeButton;
  let previousFocus;

  function createLightbox(){
    if(lightbox)return;

    lightbox=document.createElement('div');
    lightbox.className='image-lightbox';
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label','Image preview');
    lightbox.innerHTML=[
      '<div class="image-lightbox-shell">',
      '<button class="image-lightbox-close" type="button" aria-label="Close image preview">×</button>',
      '<img class="image-lightbox-img" alt="">',
      '<p class="image-lightbox-caption"></p>',
      '</div>'
    ].join('');

    document.body.appendChild(lightbox);
    image=lightbox.querySelector('.image-lightbox-img');
    caption=lightbox.querySelector('.image-lightbox-caption');
    closeButton=lightbox.querySelector('.image-lightbox-close');

    closeButton.addEventListener('click',closeLightbox);
    lightbox.addEventListener('click',event=>{
      if(event.target===lightbox)closeLightbox();
    });
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();
    });
  }

  function imageSource(img){
    return img.currentSrc||img.getAttribute('src')||img.src;
  }

  function openLightbox(anchor,img){
    createLightbox();
    previousFocus=document.activeElement;
    const source=imageSource(img);
    const alt=img.getAttribute('alt')||anchor.getAttribute('aria-label')||'Flagship Boutique image';

    image.src=source;
    image.alt=alt;
    caption.textContent=alt;
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-open');
    closeButton.focus({preventScroll:true});
  }

  function closeLightbox(){
    if(!lightbox)return;
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
    if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus({preventScroll:true});
  }

  function shouldHandle(anchor){
    const original=anchor.dataset.instagramUrl||anchor.href||'';
    return original.includes('instagram.com/p/')&&anchor.querySelector('img');
  }

  function init(){
    document.querySelectorAll('a[data-instagram-url*="instagram.com/p/"],a[href*="instagram.com/p/"]').forEach(anchor=>{
      const img=anchor.querySelector('img');
      if(!img)return;
      anchor.dataset.instagramUrl=anchor.dataset.instagramUrl||anchor.href;
      anchor.href=imageSource(img);
      anchor.removeAttribute('target');
      anchor.setAttribute('aria-label',anchor.getAttribute('aria-label')||'Open image preview');
      anchor.addEventListener('click',event=>{
        if(!shouldHandle(anchor))return;
        event.preventDefault();
        openLightbox(anchor,img);
      });
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
