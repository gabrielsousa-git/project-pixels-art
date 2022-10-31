const quadroDePixels = document.querySelector('#pixel-board');
const limpar = document.querySelector('#clear-board');

const color1 = document.getElementById('black');
const color2 = document.getElementById('cian');
const color3 = document.getElementById('pourple');
const color4 = document.getElementById('red');

color1.addEventListener('click', () => {
  if (document.getElementById('black').classList.contains('color')) {
    document.getElementById('black').classList.add('selected');

    document.getElementById('cian').classList.remove('selected');
    document.getElementById('pourple').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
  }
});

color2.addEventListener('click', () => {
  if (document.getElementById('cian').classList.contains('color')) {
    document.getElementById('cian').classList.add('selected');

    document.getElementById('black').classList.remove('selected');
    document.getElementById('pourple').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
  }
});

color3.addEventListener('click', () => {
  if (document.getElementById('pourple').classList.contains('color')) {
    document.getElementById('pourple').classList.add('selected');

    document.getElementById('black').classList.remove('selected');
    document.getElementById('cian').classList.remove('selected');
    document.getElementById('red').classList.remove('selected');
  }
});

color4.addEventListener('click', () => {
  if (document.getElementById('red').classList.contains('color')) {
    document.getElementById('red').classList.add('selected');

    document.getElementById('black').classList.remove('selected');
    document.getElementById('cian').classList.remove('selected');
    document.getElementById('pourple').classList.remove('selected');
  }
});

function pixelBoard(size) {
  for (let index = 0; index < size * size; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');

    div.addEventListener('click', () => {
      const cor = document.querySelector('.selected');
      const colorir = window.getComputedStyle(cor);
      cor.backgroundColor = colorir.getPropertyValue('background-color');
      if (div.classList.contains('pixel')) div.style.backgroundColor = cor.backgroundColor;
    });
    quadroDePixels.appendChild(div);
  }
}

pixelBoard(16);

limpar.addEventListener('click', () => {
  quadroDePixels.innerHTML = '';
  pixelBoard(16);
});
