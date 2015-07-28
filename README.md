# Tic-Tac-Toe

You will be creating a fully functional Tic-Tac-Toe Game using: Javascript, jQuery, HTML and CSS.

## Layout
1. Title / Menu
2. Game Area:
	- 3x3 board
	- Dynamically generated
	- 2 player indicators
		- One for each player
		- One highlights to indicate a player's turn

##  v0.5 Requirements
1. Must generate a game board entirely with JS/jQuery
2. Must mark each square alternately
	- X then O, then back to X
	- Squares cannot be re-clicked once set
3. On each player's turn, must indicate the active player on play area

### Wireframe Look

<img src="https://github.com/Learning-Fuze/tic-tac-toe/blob/assets/images/TTT_wireframe.png?raw=true" alt="Tic Tac Toe game board layout image">

### Starting: HTML Version
- Before attempting to create something dynamically with JS, you should make a static HTML version to emulate
- Get the board looking how you would want it to look under normal circumstances
- Then generate the JS to form that HTML with a function. In this case we will call it `initialize_game_board()`

### Methods for changing a cell

- One of the easiest ways to change the cell is to change the element's HTML/Text property
- Store the current player's symbol in a variable
	- Alternate the variables between clicks
	- Track which player's turn it is, and use the current player's symbol
	
##  v1.0 Requirements
- Player board state must be stored into an array
- Win conditions must be stored in an array
- Each successful click, the game must check if a player has one by using the win condition array to check the player array

#### Extra Credit:
- Generate the game board and win conditions dynamically
	- hint: you will need 4 different for loops to generate the win conditions for a dynamic board
