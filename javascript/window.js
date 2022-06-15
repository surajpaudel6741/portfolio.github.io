window.addEventListener('resize', function() {
    const width = this.window.innerWidth;
    const navToHide = document.querySelector('#mobile-nav')
    const line1 = document.querySelector('.nav-cross1');
    const line2 = document.querySelector('.nav-cross2')
    const line3 = document.querySelector('.nav-cross3')
    if (width > 499) {
        navToHide.style.display = 'none';
        line1.style.transform = 'none';
        line2.style.transform = 'none';
        line3.style.opacity = '1';
    }
});