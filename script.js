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
//Renders the board to console
function render(board) {
  let string = "";
  for (let i = 0; i < board.length; i++) {
    string += "|";
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] === 1 ? (string += "#") : (string += " ");
    }
    string += "|\n";
  }
  console.log(string);
}

function getHeight(state) {
  return state.length;
}

function getWidth(state) {
  return state[0].length;
}

//returns whether a specific cell will be active or dead next round
function nextCellValue(coords, state) {
  const width = getWidth(state);
  const height = getHeight(state);
  const y = coords[0];
  const x = coords[1];
  let activeNeighbours = 0;

  for (let y1 = y - 1; y1 <= y + 1; y1++) {
    //checks y1 exists in array
    if (y1 < 0 || y1 >= height) continue;

    for (let x1 = x - 1; x1 <= x + 1; x1++) {
      //check x1 exists in array
      if (x1 < 0 || x1 >= width) continue;
      //checks x1y1 is not active cell
      if (x1 === x && y1 === y) continue;
      if (state[y1][x1] === 1) {
        activeNeighbours += 1;
      }
    }
  }

  if (state[y][x] === 1) {
    if (activeNeighbours <= 1) return 0;
    else if (activeNeighbours <= 3) return 1;
    else return 0;
  } else {
    if (activeNeighbours === 3) return 1;
    else return 0;
  }
}

//returns the state of the board next turn
function nextState(currentState) {
  const width = getWidth(currentState);
  const height = getHeight(currentState);
  let newState = deadState(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      newState[y][x] = nextCellValue([y, x], currentState);
    }
  }
  return newState;
}

let play = true;

function runForever(startState) {
  let toRender = startState;
  while (play === true) {
    setTimeout(render(toRender), 100);
    toRender = nextState(toRender);
  }
}
runForever(randomState(30, 30));
