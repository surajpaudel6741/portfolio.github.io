window.addEventListener('resize', function() {
    const width = this.window.innerWidth;
    const navToHide = document.querySelector('#mobile-nav')
    const line1 = document.querySelector('.nav-cross1');
    const line2 = document.querySelector('.nav-cross2')
    const line3 = document.querySelector('.nav-cross3')
    const nav_elements = document.querySelectorAll('.navigation-dropdown');
    const toBlur = document.querySelector('body >*:not(nav)');
    const stopBody = document.querySelector('body');
    this.document.documentElement.style.setProperty('--width-line', '0px')
    if (width > 499) {
        navToHide.style.display = 'none';
        line1.style.transform = 'none';
        line2.style.transform = 'none';
        line3.style.opacity = '1';
        nav_elements.forEach(element => {
            element.style.opacity = '0';

        });
        toBlur.style.filter = 'blur(0px)';
        stopBody.classList.remove('overflow');
    }
});
window.addEventListener('scroll', function() {
    const scroll = this.window.scrollY;
    const lineWidth = 0.15 * scroll;
    // const marginLine = 0.029 * scroll * (-1);
    // const windowWidth = window.width - 100;
    this.document.documentElement.style.setProperty('--title-line', lineWidth.toString() + '%')


});