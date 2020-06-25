# conways-game-of-life

A javascript implementation of Conway's Game of Life.

[Click here for a live demo.](https://gabrieldavison.github.io/conways-game-of-life/)

(Although it does work on mobile devices it is not optimized for small screens and best viewed in a desktop browser.)


## What is the Game of Life?
[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a cellular automota. A living cell is represented by a green square on the board and a dead cell is represented by a black square. Each round the state of a cell is decided by three simple rules.

1.Any cell with two or three live neighbours stays alive.
2.Any dead cell with three live neighbours comes to life.
3.Any live cell with less than 2 live neighbours or more than three dies.

A cells neighbours are the 8 cells that surround it.

Although the setup of the game is simple some extremely complex patterns can be created. For loads more information on the game itself check out the [ConwayLife forum](https://www.conwaylife.com/forums/).

To use this implementation of the game set the board to your desired width and height using the number inputs at the top. Then place your living cells by clicking on the board. You may also want to place cells randomly using the randomize button. When you are ready click the start button to begin the game.

I used this project to get more comfortable with the <canvas> element. Initially I was rendering the game to coloured div elements but this was very resource intensive. Using canvas was much more efficient and meant that I could run larger gameboards at much higher speeds.
