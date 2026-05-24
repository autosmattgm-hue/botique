(function(){
  const hamburger=document.getElementById('hamburger');
  const mobileMenu=document.getElementById('mobile-menu');
  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',()=>{
      mobileMenu.classList.toggle('open');
      const spans=hamburger.querySelectorAll('span');
      const open=mobileMenu.classList.contains('open');
      spans[0].style.transform=open?'rotate(45deg) translate(4px,4px)':'';
      spans[1].style.opacity=open?'0':'';
      spans[2].style.transform=open?'rotate(-45deg) translate(4px,-4px)':'';
    });
    mobileMenu.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>mobileMenu.classList.remove('open'));
    });
  }
})();
