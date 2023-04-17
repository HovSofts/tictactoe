// Initialize the game board
const board = ['', '', '', '', '', '', '', '', ''];

// Initialize the current player
let currentPlayer = 'X';

// Function to handle a player's move
function playerMove(square) {
  // Check if the square is already occupied
  if (board[square] !== '') {
    alert('This square is already occupied!');
    return;
  }

  // Update the game board with the player's move
  board[square] = currentPlayer;
  document.querySelector('#square'+square).classList.add('clicked');

  // Update the UI with the player's move
  updateBoard();

  // Check if the game is over
  if (checkForWinner()) {
    document.querySelector(".status p").innerHTML = `${currentPlayer} wins!`;
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    return;
  } else if (checkForDraw()) {
    document.querySelector(".status p").innerHTML = `The game is a draw.`;
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    return;
  }

  // Switch to the other player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to update the UI with the game board
function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    const square = document.getElementById('square' + i);
    square.innerText = board[i];
  }
}

// Function to check if a player has won
function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

// Function to check if the game is a draw
function checkForDraw() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      return false;
    }
  }

  return true;
}

// Function to reset the game
function resetGame() {
  // Clear the game board
  board.fill('');

  // Update the UI with the cleared game board
  updateBoard();

  // Reset the current player
  currentPlayer = 'X';
}
