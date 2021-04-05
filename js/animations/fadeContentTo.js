import gsap from 'gsap';

function fadeContentTo(done) {
    var tl = gsap.timeline();
    tl.to(".loading-container", {
        scaleX: 1,
    });
    tl.to(".animated", {
        duration: 0.5, 
        y: 30,
        opacity: 0, 
        stagger: 0.2,
        delay: 0, 
        onComplete: () => done()
    });
};

export default fadeContentTo;