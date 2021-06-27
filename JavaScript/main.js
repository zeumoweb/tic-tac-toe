import Game from "./Game.js"
import GameView from "./GameView.js"

let pop = document.querySelector(".popup");
const start = document.querySelectorAll(".start.new")

const newGame = () => {
    game = new Game();
    g.upDateBoard(game)
    pop.style.display = "none";
}

// create an instance of the GameView class
let g = new GameView()

// create an instance of the Game class
let game = new Game()

//update the board before the start of the game
g.upDateBoard(game)

let tiles = document.querySelectorAll(".board-tile")

//define the function to handle click
const handleClick = (i) => {
    game.makeMove(i);
    g.upDateBoard(game);
    g.displayWinnerMsg(game);
};

//defining what happends once the restart button is clicked
start.forEach( (start) => {
    start.addEventListener("click", newGame)
});

tiles.forEach( (tile) => {
    tile.addEventListener('click', ()=>handleClick(tile.dataset.index))
})


//Display the message for the winner. Using javascript to display or hide the modal.

document.querySelector(".close").addEventListener("click", (e) => {
    pop.style.display = "none";
});


// document.querySelector("#start").addEventListener("click", (e) => {
//     pop.style.display = "none";
// });
