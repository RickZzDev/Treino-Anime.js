// //Função criada para animar as divs
// anime({
//     //Os targets são as divs que serao afetadas
//     targets: 'div.box.red',
//     //Esta propriedade fara a translação da div pelo eixo Y
//     translateY: [
//         //Value: o quão longe a div ira
//         //duration: a duração desta animação
//         { value: 200, duration: 500},
//         { value: 0, duration: 1000},
//     ],
//     //Propriedade para fazer a rotação da div
//     rotate:{
//         //Quantidade de rotações da div
//         value:'1turn',
//         //Esta propriedade aumenta ou diminui
//         //a velocidade de saida ou entrada
//         easing:'easeInOutSine',
        
//     }
// });

// anime({
//     targets : 'div.box.blue',
//     translateY : [
//         //Propriedade delay, coloca um delay no efeito
//         { value: 200, duration: 500, delay: 1200},
//         {value:0, duration:800}
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: '1300'
//     }
// });

// anime({
//     targets : 'div.box.green',
//     translateY : [
//         //Propriedade delay, coloca um delay no efeito
//         { value: 200, duration: 500, delay: 2400},
//         {value:0, duration:800}
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: '2500'
//     }
// });

// anime({
//     targets : 'div.box.yellow',
//     translateY : [
//         //Propriedade delay, coloca um delay no efeito
//         { value: 200, duration: 500, delay: 3500},
//         {value:0, duration:800}
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: '3600'
//     }
// });


/*FORMA MAIS LIMPA DE ADICIONAR OS EFEITOS A CADA DIV*/
var playPause = anime({
    //Os targets são as divs que serao afetadas
    targets: 'div.box',
    //Esta propriedade fara a translação da div pelo eixo Y
    translateY: [
        //Value: o quão longe a div ira
        //duration: a duração desta animação
        { value: 200, duration: 500},
        { value: 0, duration: 1000},
    ],
    //Propriedade para fazer a rotação da div
    rotate:{
        //Quantidade de rotações da div
        value:'1turn',
        //Esta propriedade aumenta ou diminui
        //a velocidade de saida ou entrada
        easing:'easeInOutSine',
        
    },
    //aqui a propriedade delay foi adicionada tendo uma função de base
    //desta forma sera aplicada a todas as divs um delay diferente
    delay: function(el, i, totalTarget){return i * 1000},
    autoplay: false,
    loop: true
});
//Recuperando os icones HTMl e colocando o onClick para que ele execute a função
//Que esta dentro da variavel
document.querySelector('#btns .play').onclick = playPause.play
document.querySelector('#btns .pause').onclick = playPause.pause


