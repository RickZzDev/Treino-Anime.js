var animation = anime({
    targets: 'div.box',
    translateX:[
        {value:200, duration: 1000},
        {value:0,duration:1200}
    ],
    backgroundColor: '#000',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    loop:true,
    autoplay:false,
    rotate: '1turn',

    delay:function(el, i, totalTarget){return i *1000}
});

document.querySelector('#box_button .play').onclick = animation.play;
document.querySelector('#box_button .pause').onclick = animation.pause;