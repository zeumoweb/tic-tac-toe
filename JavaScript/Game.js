export default class Game {
    constructor(){
        this.turn = 'X';
        this.board = new Array(9).fill(null)
    }

    //update the value of turn
    nextTurn(){
        if(this.turn === 'X'){
            this.turn = 'O';
        }else{
            this.turn = 'X'
        }
    }

    //update the value of board with current turn value and set next turn value
    makeMove(index){
        if(this.endOfGame()){
            return;
        }
        if(this.board[index]){
            return;
        }
        this.board[index] = this.turn
        this.nextTurn();
    }

    //determine if the combinations are winning or not
    findWinningCombination(){
        const win_combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
    ]
    for(const combination of win_combinations){
        const [a, b, c] = combination;
        if ( (this.board[a]) && 
            (this.board[a] === this.board[b] &&
            this.board[b] === this.board[c])
        ){
            return combination;
        }
        
    }return null;
    }

    //End the game if a winning condition is find
    endOfGame(){
        let winningCombination = this.findWinningCombination();
        if(winningCombination){
            return true;
        }
        else{
            return false
        }
    }
} 