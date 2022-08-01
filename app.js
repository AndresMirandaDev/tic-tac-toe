const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cells = document.querySelectorAll(".grid-cell");
const display = document.querySelector("#display");
const gameBoard = document.querySelector(".gameboard");
const restartButton = document.querySelector("#restart-button");
let circleTurn;


startGame();

function startGame(){
    circleTurn = false;
    cells.forEach((cell)=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.addEventListener("click", handleClick, {once : true});
    });
    setBoardHoverClass();
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    //checkwin
    //check draw
    swapTurn();
    setBoardHoverClass();
    
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



restartButton.addEventListener("click", startGame);

