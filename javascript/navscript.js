 function navopen() {
     const navOpen = document.querySelector('#mobile-nav');
     const line1 = document.querySelector('.nav-cross1');
     const line2 = document.querySelector('.nav-cross2')
     const line3 = document.querySelector('.nav-cross3')
     if (navOpen.style.display !== 'none') {
         navOpen.style.display = 'none';
         line1.style.transform = 'none';
         line2.style.transform = 'none';
         line3.style.opacity = '1';


     } else {
         navOpen.style.display = 'inline-block';
         line1.style.transform = 'rotate(60deg)';
         line2.style.transform = 'rotate(-60deg)';
         line3.style.opacity = '0';

     }
 };