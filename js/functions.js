const activeCursor = () => {
    const mouseCursor = document.querySelector(".cursor");
    let links = document.querySelectorAll('.nav-a');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        //console.log(e);
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

    links.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("cursor-turn");
            link.classList.remove("cursor-switch");
        });
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("cursor-turn");
            link.classList.add("cursor-switch");
        });
    });
}

const navSlide = () => {
    const hamburg = document.querySelector('.hamburg');
    const nav = document.querySelector('.nav-l');
    const navL = document.querySelectorAll('.nav-l li');

    hamburg.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburg.classList.toggle('hamSwitch');

        navL.forEach((link, index) => {
            if (!hamburg.classList.contains('hamSwitch')) {
                link.style.opacity = 1;
                link.style.animation = '';
            } else {
                link.style.opacity = 0;
                link.style.animation = `listFadeUp 1.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

const buttonHovers = () => {
    const buttonleft = document.querySelector('.button-l');
    const buttonright = document.querySelector('.button-r');

    buttonleft.addEventListener('mouseover', () => {
        buttonleft.style.transition = 'transform 0.2s ease';
        buttonleft.style.transform = 'scale(1.5) skew(-12deg)';
    });
    buttonleft.addEventListener('mouseout', () => {
        buttonleft.style.transform = 'scale(1) skew(0deg)';
    });

    buttonright.addEventListener('mouseover', () => {
        buttonright.style.transition = 'transform 0.2s ease';
        buttonright.style.transform = 'scale(1.5) skew(-12deg)';
    });
    buttonright.addEventListener('mouseout', () => {
        buttonright.style.transform = 'scale(1) skew(0deg)';
    });

}

const colorChange = () => {
    const bgchange = document.querySelector('.cc');
    const nav = document.querySelector('.nav-l');
    const buttonleft = document.querySelector('.button-l');
    const buttonright = document.querySelector('.button-r');
    const socialbox = document.querySelectorAll('.social-box');
    const colors = ["crimson", "rebeccapurple", "royalblue", "black"];
    let c = 0;

    bgchange.addEventListener('click', () => {
        buttonleft.style.transition = 'background-color 0.5s ease-in';
        buttonright.style.transition = 'background-color 0.5s ease-in';

        c += 1;
        document.body.style.backgroundColor = colors[c];
        buttonleft.style.backgroundColor = colors[c];
        buttonright.style.backgroundColor = colors[c];
        for (let s = 0; s < socialbox.length; s++) {
            socialbox[s].style.backgroundColor = colors[c];
        }

        if (window.innerWidth < 1024) {
            nav.style.backgroundColor = colors[c];
        } else {
            nav.style.backgroundColor = "transparent";
        }

        if (c > 3) {
            c = 0;
            document.body.style.backgroundColor = colors[c];
            buttonleft.style.backgroundColor = colors[c];
            buttonright.style.backgroundColor = colors[c];
            for (let s = 0; s < socialbox.length; s++) {
                socialbox[s].style.backgroundColor = colors[c];
            }
            if (window.innerWidth < 1024) {
                nav.style.backgroundColor = colors[c];
            } else {
                nav.style.backgroundColor = "transparent";
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            nav.style.backgroundColor = colors[c];
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
}

const backgroundElements = () => {
    function positionElements() {
        const crosses = document.querySelector('.crosses').childNodes;
        const dots = document.querySelector('.dots').childNodes;
        const heel = document.querySelector('.heelclip');
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        const cPosX = [screenWidth/5, screenWidth/1.5, screenWidth/1.4];
        const cPosY = [screenHeight/2.4, screenHeight/8, screenHeight/1.5];
        const dPosX = [screenWidth/screenWidth, screenWidth/6, screenWidth/1.3];
        const dPosY = [screenHeight/2, screenHeight/screenHeight, screenHeight/1.5];

        //heel.style.top = screenHeight/2;
        //heel.style.left = screenWidth/2;
        //console.log(crosses, dots);

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        };

        for (let c = 0; c < crosses.length; c++) {
            crosses[c].style.left = (getRandomInt(100) + cPosX[c]) + "px";
            crosses[c].style.top = (getRandomInt(100) + cPosY[c]) + "px";
        };

        for (let d = 0; d < dots.length; d++) {
            dots[d].style.left = getRandomInt(100) + dPosX[d] + "px";
            dots[d].style.top = getRandomInt(100) + dPosY[d] + "px";
        };
    }
    positionElements();

    window.addEventListener('resize', () => {
        positionElements();
    });
}

activeCursor();
navSlide();
buttonHovers();
colorChange();
backgroundElements();

/*
const moveElements = () => {
    const crosses = document.querySelector('.crosses').childNodes;
    const dots = document.querySelector('.dots').childNodes;
    const name = document.querySelector('.full-name').childNodes;
    const heelimg = document.querySelector('heelclip');
    const crossSpeeds = ["rotate" + getRandomInt(-7) + "deg", "rotate" + getRandomInt(2) + "deg", "rotate" + getRandomInt(5) + "deg"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };



}
moveElements();
*/