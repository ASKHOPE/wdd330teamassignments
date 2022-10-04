const boardGame = document.querySelector(".board");
const resetGame = document.getElementById("reset");

const playerOne = "X";
const playerTwo = "O";

let player = playerOne;

function addTac(e) {
    e.target.innerHTML = player;
    if (player === playerOne) {
        player = playerTwo;
    } else {
        player = playerOne;
    }
}

boardGame.addEventListener("click", addTac);