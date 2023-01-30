"use strict";
//   Chess Board Setup
//   Author: Nicholas Catalan
//   Date: 1/25/2023  



// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for ( let i = 0; i < pieces.length; i++){
    pieces[i].draggable = true;

    pieces[i].ondragstart = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }

}


for (let i = 0; i < boardSquares.length; i++){
    boardSquares[i].ondragover = (e) => {
        e.preventDefault();
        //add highlight
        e.target.classList.add("light-grey")
    }
    boardSquares[i].ondragleave = (e) => {
        e.preventDefault();
        //remove highlight
        e.target.classList.remove("light-grey")
    }
    

    boardSquares[i].ondrop = (e) => {
        e.preventDefault();
        e.target.classList.remove("light-grey")
        console.log("🚀 ~ file: chess.js:40 ~ e.target", e.target)
        
        


        let pieceID = e.dataTransfer.getData("text");
        let movingPiece = document.getElementById(pieceID);
        //if unoccupied
        if (e.target.tagName == "TD"){
            e.target.appendChild(movingPiece)

            //if occupied
        } else if (e.target.tagName == "SPAN"){
            let occupyingPiece = e.target;

            let square = occupyingPiece.parentElement;
            square.appendChild(movingPiece);

            //move occupying piece back to box
            if (occupyingPiece.className == "white"){
                whiteBox.appendChild(occupyingPiece);
            } else {
                blackBox.appendChild(occupyingPiece);
            }

        }
    }
}