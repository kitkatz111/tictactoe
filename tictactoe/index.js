
const playerOneInput = document.getElementById('one');
const playerTwoInput = document.getElementById('two');
const submitName = document.getElementById('begin');
const gameBoard = document.getElementById('gameBox');
const gameSquare = document.querySelectorAll('th');

submitName.addEventListener('click', transferName);

function transferName(event) {
    /* console.log(playerOneInput.value, playerTwoInput.value); test to see if it captures */
    const nameTransfer = document.getElementById('namePlaceholder');
    nameTransfer.innerHTML = 'Welcome ' + playerOneInput.value + ' and ' + playerTwoInput.value;
    displayBoard()
}

let currentPlayer = 'X';



function displayBoard() {

    let gamespace = ['', '', '', '', '', '', '', '', ''];

    gamespace.forEach((square) => {
                gameBoard.style.border = '1px solid black'

                gameSquare.forEach(square => {
                    square.style.border = '1px solid black'
                    square.style.margin = '1rem'
                    // this creates & styles the boxes

                    square.onclick = function playerInput() { // this executes the X upon clicking an INDV box
                        const index = Number(square.id) //number formats into number

                        if (square.innerText !== '') return; // no overwriting in square

                        square.innerText = currentPlayer; // this writes the status of the current player into the box
                        gamespace[index] = currentPlayer; // this writes the status of the player into gamespace

                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                        // shorthand for if else statements: flips the X to the O


                        console.log(gamespace[index] + ' ' + square.id); // shows the correct inner text and currplayer

                        const checkforWin = (gamespace, currentPlayer) => {
                            const winningCombinations = [
                                [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
                                [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
                                [0, 4, 8], [2, 4, 6] // diagonal
                            ];
                            return winningCombinations.some(combination =>
                                combination.every(index =>
                                    gamespace[index] === currentPlayer))
                        }



                    }



            })

            // forEach used as gameSquare only returns singular HTML objects in DOM
                document.querySelectorAll('#namePrompt').forEach(name => {
                name.style.display = 'none'
            })
        })}


/* https://stackoverflow.com/questions/62196586/simple-javascript-to-know-which-cell-in-table-cell-clicked gets
index of where is clicked in a table */


/* console version
function createPlayers() {

    let playerA = prompt("What is player 1's name?");
    let playerB = prompt("What is player 2's name?");
    playerData = playerA + " " + playerB;//returns this to the players(), and is called below
    //console.log(createPlayers());
}
*/



/* function game() {

    let confirmation = prompt("Ready to start?");
        if (confirmation === "yes") {start()} else return;



    function start() {

        createPlayers();
        console.log("Game has begun");
        gameBoard();
        console.log("Get ready"  );
    }
    start()

    // this should ask for name, keeping players in a separate factory function.


} */


