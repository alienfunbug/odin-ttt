/*
console.log("Theoretical Game Board:")
tGameboard = new Array(9).fill(0);
console.log(tGameboard);

console.log("Gameboard Array: \n[0 0 0 \n 0 0 0 \n 0 0 0]");
*/

/*modal functionality */
const openModal = () => {
	const modal = document.getElementById("modal");
	modal.showModal();
};
const closeModal = () => {
	const modal = document.getElementById("modal");
	modal.close();
};

const createGameboard = function () {
	displayMessage.style.color = "white";
	let hasWinner = false;

	let boardhasWinner = () => {
		return hasWinner;
	};
	const board = [];
	for (let i = 0; i < 9; i++) {
		board.push(i);
	}

	const getBoard = () => board;

	const printBoard = () =>
		console.log(
			`${board[0]} ${board[1]} ${board[2]}\n` +
				`${board[3]} ${board[4]} ${board[5]}\n` +
				`${board[6]} ${board[7]} ${board[8]}`
		);

	function drawToken(token, position) {
		if (board[position] != position) {
			console.log("position already taken");
			//alert("position already taken, try again");
			displayMessage.textContent = `Spot taken, try again!`;
			return false;
		} else {
			board[position] = token;
			console.log(`placing ${token} at position ${position}`);
			let positionID = position;
			let updateToken = document.getElementById(positionID);
			updateToken.textContent = token;
			return true;
		}
	}

	const displayBoard = () => null;

	const checkWinner = () => {
		if (
			//012,345,678,036,147,258,048,246
			(board[0] == board[1] && board[1] == board[2]) ||
			(board[3] == board[4] && board[4] == board[5]) ||
			(board[6] == board[7] && board[7] == board[8]) ||
			(board[0] == board[3] && board[3] == board[6]) ||
			(board[1] == board[4] && board[4] == board[7]) ||
			(board[2] == board[5] && board[5] == board[8]) ||
			(board[0] == board[4] && board[4] == board[8]) ||
			(board[2] == board[4] && board[4] == board[6])
		) {
			console.log("winner found");
			hasWinner = true;
			console.log(`innerfunction has winner: ${hasWinner}`);
			return true;
		} else {
			console.log("no winner");
			return false;
		}
	};

	return {
		getBoard,
		printBoard,
		drawToken,
		displayBoard,
		checkWinner,
		boardhasWinner,
	};
};

const createPlayer = (name, token) => {
	let isWinner = false;

	const getName = () => name;
	const getToken = () => token;
	const getIsWinner = () => isWinner;
	const setWinner = () => {
		isWinner = true;
	};
	return { getName, getToken, getIsWinner, setWinner };
};

const createGame = (function () {
	const tokenButtons = document.querySelectorAll(".cell");
	const resetButton = document.getElementById("resetButton");
	const displayMessage = document.getElementById("displayMessage");
	const player1Display = document.getElementById("player1");
	const player2Display = document.getElementById("player2");

	let player1name = "Player1"; //prompt("enter name of player","player1");
	let player2name = "Player2"; //prompt("enter name of player","player2");
	player1Display.textContent = player1name;
	player2Display.textContent = player2name;

	const player1 = createPlayer(player1name, "X");
	const player2 = createPlayer(player2name, "O");
	const getCurrentPlayer = () => {
		return currentPlayer === player1 ? player1 : player2;
	};

	const switchCurrentPlayer = () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	};

	testBoard = createGameboard();
	testBoard.printBoard();

	let currentPlayer = player1;

	let moveCount = 0;

	console.log(
		`!testboardhas winner ${!testBoard.boardhasWinner()} and movecount is ${moveCount}`
	);

	/*
    while (!testBoard.boardhasWinner() && moveCount < 9){
        testBoard.printBoard();
        if(testBoard.drawToken(currentPlayer.getToken(),prompt(`${currentPlayer.getName()} select position for token ${currentPlayer.getToken()}`,"1-9"))){
            moveCount += 1; //valid move so 
            if(testBoard.checkWinner()){
                currentPlayer.setWinner();
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


    */

	testBoard.printBoard();

	const setGuiToken = (position) => {
		if (!testBoard.boardhasWinner()) {
			console.log("no winner in setguitoken");
			currentPlayer = getCurrentPlayer();
			console.log("got current player");

			if (testBoard.drawToken(currentPlayer.getToken(), position)) {
				console.log(
					`!testboardhas winner ${!testBoard.boardhasWinner()} and movecount is ${moveCount}`
				);
				moveCount += 1;
				if (testBoard.checkWinner()) {
					currentPlayer.setWinner();
					console.log(
						`board has winner: ${testBoard.boardhasWinner()}`
					);
					let gameWinner = player1.getIsWinner()
						? player1.getToken()
						: player2.getToken();
					console.log(`Game winner is ${gameWinner}`);
					displayMessage.textContent = `Game winner is ${gameWinner}`;
					displayMessage.style.color = "blue";
				} else {
					switchCurrentPlayer();
					displayMessage.textContent = `It's ${currentPlayer.getToken()}'s Turn`;
				}
			}
		}

		if (moveCount >= 9) {
			console.log(
				"No Winner this game and all positions are taken, please play again"
			);
			displayMessage.textContent =
				"No winner this game, please play again!";
		}
	};

	tokenButtons.forEach((button) => {
		button.addEventListener("click", () => {
			setGuiToken(button.id);
		});
	});

	resetButton.addEventListener("click", () => {
		resetGame();
	});

	const resetGame = () => {
		tokenButtons.forEach((button) => {
			button.textContent = button.id;
		});
		displayMessage.textContent = "Display Message";
		player1Display.textContent = "Player 1";
		player2Display.textContent = "Player 2";
		testBoard = createGameboard();
		moveCount = 0;
	};

	document
		.getElementById("playerForm")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			player1Display.textContent =
				document.getElementById("player1Name").value;
			player1name = document.getElementById("player1Name").value;
			player2Display.textContent =
				document.getElementById("player2Name").value;
			player2name = document.getElementById("player2Name").value;
			playerForm.reset();
			closeModal();
		});

	return {};
})();
