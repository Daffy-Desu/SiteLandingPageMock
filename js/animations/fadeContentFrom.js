import gsap from 'gsap';

function fadeContentFrom() {
    var tl = gsap.timeline();
    tl.from(".loading-container", {
        scaleX: 1
    });
    tl.from(".animated", {
        duration: 0.5, 
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0
    });
};

export default fadeContentFrom;