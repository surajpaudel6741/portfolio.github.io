const navOpen = document.querySelector('#mobile-nav');
const line1 = document.querySelector('.nav-cross1');
const line2 = document.querySelector('.nav-cross2')
const line3 = document.querySelector('.nav-cross3')
const nav_elements = document.querySelectorAll('.navigation-dropdown');
const mobileNav = document.querySelector('#mobile-nav-content');
const toBlur = document.querySelector('body >*:not(nav)');

navOpen.style.display = 'none';
line1.style.transform = 'none';
line2.style.transform = 'none';

function navopen() {


    if (navOpen.style.display !== 'none') {
        mobileNav.classList.remove("height-animation-in");
        mobileNav.classList.add("height-animation-out");

        setTimeout(() => {
            navOpen.style.display = 'none';
        }, 1000);
        line1.style.transform = 'none';
        line2.style.transform = 'none';
        line3.style.opacity = '1';
        nav_elements.forEach(element => {
            element.style.opacity = '0';

        });
        toBlur.style.filter = 'blur(0px)';


    } else {

        navOpen.style.display = 'inline-block';
        mobileNav.classList.remove("height-animation-out");
        mobileNav.classList.add("height-animation-in");

        line1.style.transform = 'rotate(60deg)';
        line2.style.transform = 'rotate(-60deg)';
        line3.style.opacity = '0';
        var time = 250;
        nav_elements.forEach(element => {
            setTimeout(() => {
                element.style.opacity = '1';
            }, time);
            time = time + 250;
        });
        toBlur.style.filter = 'blur(5px)';

    }
};