//gameboard array in gameboard object
//make global code as little as possible

//object create 
//gameBoard, displaycontroller(need only once) with module
//player object with factory function
const Gameboard = (() => {
    let _turn = 1;
    let _win = false;
    
    const GbArray = new Array(9);
    
    const isEmpty = (index) => {
        if (GbArray[index] == undefined) {
            return true;
        }
        return false;
    };

    const setElement = (symbol, index) => {
        if(isEmpty(index) === true) {
            GbArray[index] = symbol;
            _turn++;
        }
    };

    const getElement = (index) => {
        return(GbArray[index]);
    };

    const getTurn = () => {
        return _turn;
    };

    const getWin = () => {
        return _win;
    };

    const winnerDisplay = (symbol) => {
        const displayWindow = document.getElementById("winnerDisplay");
        console.log(displayWindow);
        const p = document.createElement('p');
        const winSentence = `Winner is ${symbol}`;
        const textNode = document.createTextNode(winSentence);
        p.appendChild(textNode);

        displayWindow.appendChild(p);
    };

    const drawDisplay = () => {
        const displayWindow = document.getElementById("winnerDisplay");
        console.log(displayWindow);
        const p = document.createElement('p');
        const winSentence = `Draw!`;
        const textNode = document.createTextNode(winSentence);
        p.appendChild(textNode);

        displayWindow.appendChild(p);
    }

    const winCheck = (symbol) => {
        if(getTurn() > 2 && getTurn() < 10) {
            
        }
        if(Gameboard.GbArray[0] === symbol){
            if(Gameboard.GbArray[1] === symbol && Gameboard.GbArray[2] === symbol) {
                winnerDisplay(symbol);
                _win = true;
            } else if(Gameboard.GbArray[4] === symbol && Gameboard.GbArray[8] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            } else if(Gameboard.GbArray[3] === symbol && Gameboard.GbArray[6] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            }
        } else if(Gameboard.GbArray[4] === symbol) {
            if(Gameboard.GbArray[3] === symbol && Gameboard.GbArray[5] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            } else if(Gameboard.GbArray[1] === symbol && Gameboard.GbArray[7] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            } else if(Gameboard.GbArray[2] === symbol && Gameboard.GbArray[6] === symbol) {
                winnerDisplay(symbol)
                _win = true;

            }
        } else if(Gameboard.GbArray[8] === symbol) {
            if(Gameboard.GbArray[6] === symbol && Gameboard.GbArray[7] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            } else if(Gameboard.GbArray[2] === symbol && Gameboard.GbArray[5] === symbol) {
                winnerDisplay(symbol);
                _win = true;

            }
        }
        
    };
    return {GbArray, setElement, getElement, getTurn, winCheck, getWin, drawDisplay};
})();


const ControlDisplay = (() => {
    const reset = () => {
        setTimeout(() => {
            alert('game will start again shortly!');
            document.location.reload();
        }, 500);
    }
    return {reset}
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
};

const playerName = document.getElementById("playerName");

//player vs player
const gridElement = document.querySelectorAll('.grid');
for(let i = 0; i < gridElement.length; i++) {
    gridElement[i].addEventListener("click", (e) => {
        e.preventDefault();
        
        //x should be player's choose
        if(Gameboard.getElement(i) === undefined) {
            if(Gameboard.getTurn() % 2 === 1) {
                Gameboard.setElement('X', i);
                const text = document.createTextNode('x');
                const p = document.createElement('p');
                p.append(text);
                e.currentTarget.appendChild(p);
            } else{
                Gameboard.setElement('O', i);
                const text = document.createTextNode('O');
                const p = document.createElement('p');
                p.append(text);
                e.currentTarget.appendChild(p);
            }      
        }

        //check win logic
        if(Gameboard.getTurn() > 2 || Gameboard.getTurn() <= 10) {
            Gameboard.winCheck('X');
            Gameboard.winCheck('O');
            if(Gameboard.getWin() === true) {
                setTimeout(() => {
                    alert('game will start again shortly!');
                    document.location.reload();
                }, 10);

            }
            
        } 
        if(Gameboard.getTurn() === 10 && Gameboard.getWin() === false){
            Gameboard.drawDisplay();
            
        }
        
    })
}





