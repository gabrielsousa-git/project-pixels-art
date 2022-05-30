const quadroDePixels = document.querySelector('#pixel-board');
// const div = document.querySelectorAll('.pixel');
// const color = document.querySelector('.color');
const selected = document.getElementsByClassName('selected')[0];
const limpar = document.querySelector('#clear-board');

pixelBoard(5);

let color1 = document.getElementById('black');
let color2 = document.getElementById('cian');
let color3 = document.getElementById('pourple');
let color4 = document.getElementById('red');

// const selected = document.getElementsByClassName('selected');

color1.addEventListener('click', function(){
    if (document.getElementById("black").classList.contains('color')) {
        document.getElementById("black").classList.add('selected') 

        document.getElementById('cian').classList.remove('selected');
        document.getElementById('pourple').classList.remove('selected');
        document.getElementById('red').classList.remove('selected');
    }    
});

color2.addEventListener('click', function(){
    if (document.getElementById("cian").classList.contains('color')) {
        document.getElementById("cian").classList.add('selected') 

        document.getElementById('black').classList.remove('selected');
        document.getElementById('pourple').classList.remove('selected');
        document.getElementById('red').classList.remove('selected');
    }
});

color3.addEventListener('click', function(){
    if (document.getElementById("pourple").classList.contains('color')) {
        document.getElementById("pourple").classList.add('selected')

        document.getElementById('black').classList.remove('selected');
        document.getElementById('cian').classList.remove('selected');
        document.getElementById('red').classList.remove('selected');
    }
});

color4.addEventListener('click', function(){
    if (document.getElementById("red").classList.contains('color')) {
        document.getElementById("red").classList.add('selected') 

        document.getElementById('black').classList.remove('selected');
        document.getElementById('cian').classList.remove('selected');
        document.getElementById('pourple').classList.remove('selected');
    }
});

function pixelBoard(size) {  
    for (let index = 0; index < size * size; index += 1) {
        const div = document.createElement('div')
        div.classList.add('pixel')             
        
        
        div.addEventListener('click', function(){
            let cor = document.querySelector('.selected')
            let colorir = window.getComputedStyle(cor)
            cor.backgroundColor = colorir.getPropertyValue('background-color')
            if (div.classList.contains('pixel')) 
            div.style.backgroundColor = cor.backgroundColor
        })
        quadroDePixels.appendChild(div)
    }
}

limpar.addEventListener('click', function(){
    quadroDePixels.innerHTML = ''
    pixelBoard(5);
})