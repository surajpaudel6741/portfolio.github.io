const rotation_div = document.querySelector('.picture-text-holder');
const camera_button = document.querySelector('.pic-show');
const particles = document.querySelector('#particles-js');
const upper_hemi = document.querySelector('.hemi-up');
const lower_hemi = document.querySelector('.hemi-down');
const hemisphere = document.querySelector('.hemisphere');
const text_slide = document.querySelector('.short-details');
hemisphere.style.transition = 'none';
upper_hemi.style.transform = 'none';
lower_hemi.style.transform = 'none';

document.documentElement.style.setProperty('--shutter-bg', 'transparent');
camera_button.addEventListener('click', function() {

    hemisphere.style.transition = 'transform 1s ease-in-out';
    lower_hemi.style.transition = 'transform 1s ease-in-out';
    text_slide.style.transition = 'transform 2s ease-in-out';;
    if (document.documentElement.style.getPropertyValue('--shutter-bg') === 'transparent') {
        document.documentElement.style.setProperty('--animation', 'camera 1s alternate ease-in-out')
        document.documentElement.style.setProperty('--shutter-bg', 'url(../img/shutter.png) no-repeat center center fixed')
        upper_hemi.style.transform = 'translateY(-500px)';
        lower_hemi.style.transform = 'translateY(500px)';
        setTimeout(function() {
            document.documentElement.style.setProperty('--animation', 'none')
        }, 1000);
        particles.style.filter = 'blur(3px)';
        text_slide.style.transform = 'translate(0px) skew(0deg)';
        text_slide.style.letterSpacing = '5px';;
    } else {
        document.documentElement.style.setProperty('--animation', 'camera 1s alternate ease-in-out')
        document.documentElement.style.setProperty('--shutter-bg', 'transparent');
        upper_hemi.style.transform = 'translateY(0px)';
        lower_hemi.style.transform = 'translateY(0px)';
        setTimeout(function() {
            document.documentElement.style.setProperty('--animation', 'none')
        }, 1000);
        particles.style.filter = 'blur(0px)';
        text_slide.style.transform = 'translate(1000px) skew(45deg)';
        text_slide.style.letterSpacing = '5px';;
    }



});