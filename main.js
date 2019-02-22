var playPause = anime ({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 500}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: (el,i,l) => {return i * 1000},
    autoplay: false,
    loop: true
});

document.querySelector('#container .play').onclick = playPause.play;
document.querySelector('#container .pause').onclick = playPause.pause;
