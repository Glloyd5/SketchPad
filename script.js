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

document.querySelector('#resizeButton').addEventListener('click',() => {
    let gridSize = prompt('1-100, 64 would make a 64x64 grid.', 64);
        if(Number(gridSize) < 1 || Number(gridSize) > 100 ) {
            gridSize = prompt('1-100, Enter a valid input.', 64)
        }
        else if(Number(gridSize) == NaN) {
            gridSize = prompt('1-100, Enter a valid input.', 64)
        }
        else {
            document.querySelectorAll('.squares').forEach(item => {
                item.remove();
                });
              
            createGrid(gridSize);
        }   
        document.querySelectorAll('.squares').forEach(item => {
            item.addEventListener('mouseover', () => {
              item.style.backgroundColor = 'black';
            })
          })     
});

document.querySelectorAll('.squares').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    })
  })

createGrid(4);