let grid = document.querySelector('.grid');
let squares = document.querySelectorAll('.squares');

square1 = document.createElement('div');
square1.id = "square1";
square1.classList.add('squares');

square2 = document.createElement('div');
square2.id = "square2";
square2.classList.add('squares');

square3 = document.createElement('div');
square3.id = "square3";
square3.classList.add('squares');

square4 = document.createElement('div');
square4.id = "square4";
square4.classList.add('squares');

square5 = document.createElement('div');
square5.id = "square5";
square5.classList.add('squares');

square6 = document.createElement('div');
square6.id = "square6";
square6.classList.add('squares');

square7 = document.createElement('div');
square7.id = "square7";
square7.classList.add('squares');

square8 = document.createElement('div');
square8.id = "square8";
square8.classList.add('squares');

square9 = document.createElement('div');
square9.id = "square9";
square9.classList.add('squares');

square10 = document.createElement('div');
square10.id = "square10";
square10.classList.add('squares');

square11 = document.createElement('div');
square11.id = "square11";
square11.classList.add('squares');

square12 = document.createElement('div');
square12.id = "square12";
square12.classList.add('squares');

square13 = document.createElement('div');
square13.id = "square13";
square13.classList.add('squares');

square14 = document.createElement('div');
square14.id = "square14";
square14.classList.add('squares');

square15 = document.createElement('div');
square15.id = "square15";
square15.classList.add('squares');

square16 = document.createElement('div');
square16.id = "square16";
square16.classList.add('squares');

grid.appendChild(square1);
grid.appendChild(square2);
grid.appendChild(square3);
grid.appendChild(square4);
grid.appendChild(square5);
grid.appendChild(square6);
grid.appendChild(square7);
grid.appendChild(square8);
grid.appendChild(square9);
grid.appendChild(square10);
grid.appendChild(square11);
grid.appendChild(square12);
grid.appendChild(square13);
grid.appendChild(square14);
grid.appendChild(square15);
grid.appendChild(square16);



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
              
            for (let i = 0; i < gridSize; i++) {
                let squares = document.createElement('div');
                squares.classList.add('squares');
                grid.appendChild(squares);
            }
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