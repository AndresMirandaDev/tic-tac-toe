"use strict";

const gameBoard = () => { 

}

const Player = (name, marker) => {
    return{
        name,
        marker,
        turn: () => {
            return "It is "+ name + "'s turn"
        },
        
        getMarker: () =>{
            return marker
        }
    };
}

const wata = Player("wata", "X")
const display = document.querySelector("#display");

display.innerText = wata.turn();

const gridCell = document.querySelectorAll(".grid-cell");

gridCell.forEach((grid)=>{
    grid.addEventListener("click", function(e){
        e.target.innerText = wata.getMarker();
    })
})