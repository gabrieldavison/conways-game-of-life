//Generates a board where all cells are dead
function deadState(width, height) {
  let board = [];
  for (let i = 0; i < height; i++) {
    let col = [];
    for (let i = 0; i < width; i++) {
      col.push(0);
    }
    board.push(col);
  }
  return board;
}
//Generates a board where all cells are randomised
function randomState(width, height) {
  let board = deadState(width, height);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let randomNumber = Math.random();
      randomNumber < 0.5 ? (board[i][j] = 0) : (board[i][j] = 1);
    }
  }
  return board;
}

const width = 5;
const height = 5;
console.table(randomState(width, height));
