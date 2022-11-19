const rotation_div = document.querySelector('.picture-text-holder');
const camera_button = document.querySelector('.pic-show');
const particles = document.querySelector('#particles-js');
const upper_hemi = document.querySelector('.hemi-up');
const lower_hemi = document.querySelector('.hemi-down');
const hemisphere = document.querySelector('.hemisphere');
const right_icon_slide = document.querySelector('.right-social-sites');
const left_icon_slide = document.querySelector('.left-social-sites');
hemisphere.style.transition = 'none';
upper_hemi.style.transform = 'none';
lower_hemi.style.transform = 'none';

document.documentElement.style.setProperty('--shutter-bg', 'transparent');
camera_button.addEventListener('click', function() {
    document.querySelector('.camera').style.animation = 'camera-move 3s infinite alternate';
    hemisphere.style.transition = 'transform 1s ease-in-out';
    lower_hemi.style.transition = 'transform 1s ease-in-out';
    right_icon_slide.style.transform = 'translateX(200px)'
    left_icon_slide.style.transform = 'translateX(-200px)'
    if (document.documentElement.style.getPropertyValue('--shutter-bg') === 'transparent') {
        document.documentElement.style.setProperty('--animation', 'camera 1s alternate ease-in-out')
        document.documentElement.style.setProperty('--shutter-bg', 'url(../img/shutter.png) no-repeat center center fixed')
        document.querySelector('.camera').style.animation = 'none';
        upper_hemi.style.transform = 'translateY(-500px)';
        lower_hemi.style.transform = 'translateY(500px)';
        setTimeout(function() {
            document.documentElement.style.setProperty('--animation', 'none')
        }, 1000);
        particles.style.filter = 'blur(3px)';
        right_icon_slide.style.transform = 'translateX(0px)'
        left_icon_slide.style.transform = 'translateX(0px)'
    } else {
        document.documentElement.style.setProperty('--animation', 'camera 1s alternate ease-in-out')
        document.documentElement.style.setProperty('--shutter-bg', 'transparent');
        upper_hemi.style.transform = 'translateY(0px)';
        lower_hemi.style.transform = 'translateY(0px)';
        setTimeout(function() {
            document.documentElement.style.setProperty('--animation', 'none')
        }, 1000);
        particles.style.filter = 'blur(0px)';
        right_icon_slide.style.transform = 'translateX(200px)'
        left_icon_slide.style.transform = 'translateX(-200px)' //==================================
    }



});