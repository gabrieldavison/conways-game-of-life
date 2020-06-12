//Renders the board to console
function renderConsole(board) {
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

// Renders game as text in a table
function renderTable(state) {
  const gameTable = document.querySelector("#game-table");
  gameTable.innerHTML = "";
  for (let y = 0; y < state.length; y++) {
    const row = document.createElement("tr");
    gameTable.appendChild(row);
    for (let x = 0; x < state[0].length; x++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
      cell.innerText = `${state[y][x]}`;
    }
  }
}

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

function drawCanvas(width, height) {
  ctx.canvas.width = width;
  ctx.canvas.height = height;
}

//Renders game to html5 canvas
function renderStateToCanvas(state, cellSize) {
  let width = state[0].length;
  let height = state.length;
  ctx.canvas.width = width * cellSize;
  ctx.canvas.height = height * cellSize;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      ctx.beginPath();
      if (state[y][x] === 1) {
        ctx.fillStyle = "#41FF00";
        ctx.fillRect(x * 10, y * 10, 10, 10);
        // ctx.font = "20px Courier New";

        // ctx.strokeText("#", x * cellSize, y * cellSize);
      }
    }
  }
}
export { renderStateToCanvas, drawCanvas };
