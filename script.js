/*
console.log("Theoretical Game Board:")
tGameboard = new Array(9).fill(0);
console.log(tGameboard);

console.log("Gameboard Array: \n[0 0 0 \n 0 0 0 \n 0 0 0]");

*/


const createGameboard = (function (){
  
    let hasWinner = false;

    let boardhasWinner = () => {
        return hasWinner;
    }
    const board = [];
    for (let i = 0; i < 9; i++){
        board.push(i);
    }

    


    const getBoard = () => board;

    const printBoard = () => console.log(
        `${board[0]} ${board[1]} ${board[2]}\n` +
        `${board[3]} ${board[4]} ${board[5]}\n` +
        `${board[6]} ${board[7]} ${board[8]}`
      );

    function drawToken(token, position){
        //game over or position full logic 
        
        //console.log(`board position is ${board[position]} and position is ${position}`);
        if (board[position] != position){
            console.log("position already taken");
            return false;
        }
        else{
            board[position] = token;
            console.log(`placing ${token} at position ${position}`);
            return true;
        }

        //return true of false based on whether it works
    };

    const displayBoard = () => null;

    const checkWinner = () => {
        //let w012 = board[0]==board[1] && board[1] == board[2]
       
       //console.log(w012);
;        if(
            //012,345,678,036,147,258,048,246
            (board[0]==board[1] && board[1] == board[2]) || 
            (board[3]==board[4] && board[4] == board[5]) || 
            (board[6]==board[7] && board[7] == board[8]) || 
            (board[0]==board[3] && board[3] == board[6]) || 
            (board[1]==board[4] && board[4] == board[7]) || 
            (board[2]==board[5] && board[5] == board[8]) || 
            (board[0]==board[4] && board[4] == board[8]) || 
            (board[2]==board[4] && board[4] == board[6])
        ){
            //add logic for WHICH player wins
            //CHECK WINNER IMMEDIATELY AFTER EACH PLAYERS TURN, return this player as the winner before switching to the next player
            console.log("winner found");
            hasWinner = true;
            console.log(`innerfunction has winner: ${hasWinner}`);
            return true;
        }else{
            console.log("no winner");
            return false;
        }
    }

    return {getBoard,printBoard,drawToken,displayBoard,checkWinner,boardhasWinner};
    //maybe add check winner?
});



//play game function
/*
count whether 9 turns has passed

determine player's turn

*/


//players function/object
/*
determine players token, name,is winner

*/

//players function/object
/*
determine players token, name,is winner

*/

const createPlayer  = (name,token) => {
    let isWinner = false;

    const getName = () => name;
    const getToken = () => token;
    const getIsWinner = () => isWinner;
    const setWinner = () => { 
        isWinner = true;
    }
    return{getName,getToken,getIsWinner,setWinner};
};





//current player is set as one of the two players... THEN...if(drawToken) MOVE IS VALID, increase move count and check for winner, ( READ PAPER)



const createGame = (function(){
    let player1name = "Eva";//prompt("enter name of player","player1");
    let player2name = "Shinji";//prompt("enter name of player","player2");

    const player1 = createPlayer(player1name, "X");
    const player2 = createPlayer(player2name, "O");

    testBoard  = createGameboard();
    testBoard.printBoard();
    
    let currentPlayer = player1;
    let moveCount = 0;

    console.log(`!testboardhas winner ${!testBoard.boardhasWinner()} and movecount is ${moveCount}`);
    while (!testBoard.boardhasWinner() && moveCount < 9){
        testBoard.printBoard();
        if(testBoard.drawToken(currentPlayer.getToken(),prompt(`${currentPlayer.getName()} select position for token ${currentPlayer.getToken()}`,"1-9"))){
            moveCount += 1; //valid move so 
            if(testBoard.checkWinner()){
                currentPlayer.setWinner;
            }else{
                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
        }
    } 

    if(testBoard.boardhasWinner()){
        console.log(`board has winner: ${testBoard.boardhasWinner()}`);
        let gameWinner = player1.getIsWinner() ? player1.getName() : player2.getName();
        console.log(`Game winner is ${gameWinner}`);
    }else{
        console.log("No Winner this game and all positions are taken, please play again");
    }

    testBoard.printBoard();

})();


