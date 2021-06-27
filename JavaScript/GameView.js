export default class GameView{
    constructor(){

    }

    //update the value of the board using the values stored in the array
    upDateBoard(game){
        this.upDateTurn(game);
        for(let i=0; i<game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index = '${i}'`);
            console.log(tile);
            tile.textContent = game.board[i];
            if(game.board[i] == 'X'){
                tile.classList.remove("tile-o");
                tile.classList.add('tile-x');
            }
            else{
                tile.classList.remove("tile-x");
                tile.classList.add("tile-o");
            }
        }
    }

    //update the UI of the app when a turn is played
    upDateTurn(game){
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        if(game.turn == 'X'){
            playerX.classList.add('active');
            playerO.classList.remove("active");
        }else{
            playerO.classList.add("active");
            playerX.classList.remove("active");
        }
    }

    //display a message for the winner

    displayWinnerMsg(game){
        if(game.endOfGame()){
            if(game.turn == 'X'){
                document.querySelector(".winner-name").textContent = "Player O";
            }
            else{
                document.querySelector(".winner-name").textContent = "Player X";
            }
            document.querySelector('.popup').style.display = "flex";
        }
    }
}