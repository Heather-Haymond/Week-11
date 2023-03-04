const gameBoard = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 'X';

const gameCells = document.querySelectorAll('td');
const turnDisplay = document.getElementById('turn');
const restartButton = document.getElementById('restart');

function updateDisplay() {
	for (let i = 0; i < gameCells.length; i++) {
		gameCells[i].innerText = gameBoard[i];
	}
	turnDisplay.innerText = `It's ${playerTurn}'s turn`;
}

function handleCellClick(e) {
	const cellIndex = e.target.getAttribute('id');
	if (gameBoard[cellIndex] === '') {
		gameBoard[cellIndex] = playerTurn;
		updateDisplay();
		checkWinner();
		playerTurn = playerTurn === 'X' ? 'O' : 'X';
	}
}

function handleRestartClick() {
	gameBoard.fill('');
	playerTurn = 'X';
	updateDisplay();
}

function checkWinner() {
	const winningCombinations = [		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
			showAlert(`${gameBoard[a]} wins!`);
			return;
		}
	}
}