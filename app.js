const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cells = document.querySelectorAll(".grid-cell");
const display = document.querySelector("#display");
const gameBoard = document.querySelector(".gameboard");
const restartButton = document.querySelector("#restart-button");
const startButton = document.querySelector("#start-button")
const firstRender = document.querySelector(".first-render")
const playerOneInput = document.querySelector("#player-one")
const playerTwoInput = document.querySelector("#player-two")
const playerOne = {};
const playerTwo = {};
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5 ,8],
    [0, 4, 8],
    [2, 4 ,6]
]
let circleTurn;


startButton.addEventListener("click", function(){
     playerOne.name = playerOneInput.value;
     playerTwo.name = playerTwoInput.value;
     console.log(playerOne, playerTwo);
     if(playerOne.name != ""|| playerTwo.name != ""){
        startGame();
     }
});

function startGame(){
    firstRender.classList.remove("show");
    circleTurn = false;
    cells.forEach((cell)=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.addEventListener("click", handleClick, {once : true});
    });
    setBoardHoverClass();
    updateDisplay();
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurn();
        setBoardHoverClass();
        updateDisplay();
    }
    
}

function endGame(draw){
    if(draw){
        display.innerText = "It's a Draw!"
    }else{
        display.innerText = `${circleTurn ? playerTwo.name : playerOne.name}  Wins!`
    }
}

//if every cell has a class , then this function will return true 
function isDraw(){
    return [...cells].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    })
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurn(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    gameBoard.classList.remove(X_CLASS);
    gameBoard.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        gameBoard.classList.add(CIRCLE_CLASS);
    }else{
        gameBoard.classList.add(X_CLASS)
    };
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    })
}


function updateDisplay(){
    if(circleTurn){
        display.innerText = playerTwo.name + " is up!"
    }else{
        display.innerText = playerOne.name + " is up!"
    }
}

restartButton.addEventListener("click", reset);

function  reset() {
    firstRender.classList.add("show");
    playerOneInput.value="";
    playerTwoInput.value=""
    cells.forEach((cell)=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
    })
}

