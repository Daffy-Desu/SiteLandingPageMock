import gsap from 'gsap';

function fadeContentOnce() {
    var tl = gsap.timeline();
    tl.from(".animated", {
        duration: 0.5, 
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 3.3
    });
};

export default fadeContentOnce;