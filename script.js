const quadroDePixels = document.querySelector('#pixel-board');
const div = document.querySelectorAll('.pixel');


function pixelBoard(size) {  
    for (let index = 0; index < size * size; index += 1) {
        const div = document.createElement('div')
        div.classList.add('pixel')             
        quadroDePixels.appendChild(div)
    }
}
pixelBoard(5);

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');


const selected = document.getElementsByClassName('selected');

color1.addEventListener('click', function(){
    if (document.getElementById("color1").classList.contains('color')) {
        document.getElementById("color1").classList.add('selected') 

        document.getElementById('color2').classList.remove('selected');
        document.getElementById('color3').classList.remove('selected');
        document.getElementById('color4').classList.remove('selected');
    }    
});

color2.addEventListener('click', function(){
    if (document.getElementById("color2").classList.contains('color')) {
        document.getElementById("color2").classList.add('selected') 

        document.getElementById('color1').classList.remove('selected');
        document.getElementById('color3').classList.remove('selected');
        document.getElementById('color4').classList.remove('selected');
    }
    
});

color3.addEventListener('click', function(){
    if (document.getElementById("color3").classList.contains('color')) {
        document.getElementById("color3").classList.add('selected')

        document.getElementById('color1').classList.remove('selected');
        document.getElementById('color2').classList.remove('selected');
        document.getElementById('color4').classList.remove('selected');
    }
});

color4.addEventListener('click', function(){
    if (document.getElementById("color4").classList.contains('color')) {
        document.getElementById("color4").classList.add('selected') 

        document.getElementById('color1').classList.remove('selected');
        document.getElementById('color2').classList.remove('selected');
        document.getElementById('color3').classList.remove('selected');
    }
});