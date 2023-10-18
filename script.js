let grid = document.querySelector('.grid');
let squares = document.querySelectorAll('.squares');

function createGrid (gridSize) { 
    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.appendChild(squares);
    } 
    document.querySelectorAll('.squares').forEach(item => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = 'black';
        })
      })
}

let gridClear = function() {
  document.querySelectorAll('.squares').forEach(item => {
    item.style.backgroundColor = '#ecdaa8' 
});
}


document.querySelectorAll('.squares').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    })
  })

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
  
  
slider.oninput = function() {
output.innerHTML = this.value;
}

document.querySelector('.slidecontainer').addEventListener('mouseup', () => {
  gridClear();
  createGrid(slider.value);
});

document.getElementById('clearButton').addEventListener('click',() => {
  gridClear();
});


createGrid(4);
