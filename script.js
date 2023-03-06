//gameboard array in gameboard object
//make global code as little as possible

//object create 
//gameBoard, displaycontroller(need only once) with module
//player object with factory function
const Gameboard = (() => {
    const GbArray = new Array(9);

    return {GbArray};
})();

const controlGame = (() => {
    const getGridNum = () => {

    }

    return {};
})();


//Create Grid Cell
const gameBoardDiv = document.getElementById('gameboard');

for(let i = 0; i < Gameboard.GbArray.length; i++){
    const grid = document.createElement('div')
    grid.className = 'grid';
    gameBoardDiv.appendChild(grid); 
    grid.setAttribute('id',i);
    if(i%3 === 1) {
        grid.classList.add('colCenter');
    } 
    if(i === 3 || i === 4 || i === 5){
        grid.classList.add('rowCenter');
    }
}





