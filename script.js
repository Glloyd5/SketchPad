let grid = document.querySelector('.grid');
let squares = document.querySelectorAll('.squares');
let currentColor = 'black';
const randomColors = [];

function createGrid (gridSize) { 
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.appendChild(squares); 
}
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
output.innerHTML = `${this.value} x ${this.value}`;
}

const gridClear = function() {
  document.querySelectorAll('.squares').forEach(item => {
    item.style.backgroundColor = '#ecdaa8' 
});
}

const generateRainbowColors = function() {
  for (let i = 0; i < 100; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    randomColors.push(randomColor);
  }  
}

document.querySelector('.slidecontainer').addEventListener('mouseup', () => {
  gridClear();
  createGrid(slider.value);
});

document.getElementById('clearButton').addEventListener('click',() => {
  gridClear();
});

document.getElementById('eraserButton').addEventListener('click',() => {
  document.querySelector('.grid').addEventListener('mouseover', e => {
    currentColor = '#ecdaa8';
    e.target.style.backgroundColor = currentColor;
  }, {capture: true})   
});

document.getElementById('blackButton').addEventListener('click',() => {
  document.querySelector('.grid').addEventListener('mouseover', e => {
    currentColor = 'black';
    e.target.style.backgroundColor = currentColor;
  }, {capture: true})  
});

document.getElementById('rainbowButton').addEventListener('click',() => {
  document.querySelector('.grid').addEventListener('mouseover', e => {
    e.target.style.backgroundColor = randomColors[Math.floor(Math.random() * 100)];
  }, {capture: true})
});

document.querySelector('.grid').addEventListener('mouseover', e => {
  e.target.style.backgroundColor = currentColor;
}, {capture: true}) 

createGrid(4);
generateRainbowColors();



