import barba from '@barba/core';
import { fadeContentFrom, fadeContentTo } from './animations';
import fadeContentOnce from './animations/fadeContentOnce';
import logoLottieAnimation from './animations/logoLottieAnim';

barba.init({
    transitions: [
        {
            beforeOnce() {
                console.log('beforeOnce...');
            },
            once() {
                console.log('AnimatingOnce...');
                logoLottieAnimation();
                fadeContentOnce();
            },
            afterOnce() {
                console.log('AfterOnce...');
            }
        }, 
        {
            to: {
              namespace: ['work', 'home', 'cont']  
            },
            enter() {
                console.log('entering...');
                logoLottieAnimation();
                fadeContentFrom();
            },
            leave() {
                const done = this.async();

                console.log('leaving...');
                fadeContentTo(done);
            }
        }
    ]
});