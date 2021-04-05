function logoLottieAnimation() {
    var svgdiv= document.getElementById('bodymovin');
    var animItem = bodymovin.loadAnimation({
    wrapper: svgdiv,
    animType: 'svg',
    loop: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_t0atoyps.json'
    });
};

export default logoLottieAnimation;