const menuToggle=document.querySelector('.menu-toggle'),mobileMenu=document.querySelector('.mobile-menu');
if(menuToggle&&mobileMenu){menuToggle.addEventListener('click',()=>mobileMenu.classList.toggle('open'));mobileMenu.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>mobileMenu.classList.remove('open')))}
document.querySelectorAll('.faq-question').forEach(btn=>{btn.addEventListener('click',()=>{const item=btn.parentElement,isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!isOpen)item.classList.add('open')})});
const header=document.querySelector('.header');window.addEventListener('scroll',()=>{header.style.background=window.scrollY>40?'rgba(7,7,11,0.95)':'rgba(7,7,11,0.85)'});
