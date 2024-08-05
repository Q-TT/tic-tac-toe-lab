//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
let board 
let turn 
let winner 
let tie 


/*---------------------------- Variables (state) ----------------------------*/
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
// console.log(messageEl)

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



/*-------------------------------- Functions --------------------------------*/
init()
console.log(squareEls[0].textContent)

function init (){
    console.log("check") 
    //! remeber reset the string!!!
    board = [
        "X", "O", "X", 
        "O", "X", "O", 
        "", "", "",]
        
        turn = "X"
        winner = false
        tie = false
        
        render()
    }
    console.log({board, turn, winner, tie})
    
     
function render() {
    updateMessage()
    updateBoard()
    
}


function updateBoard() {
    board.forEach((element, index) => {
        // console.log(element)
        //* assign the element in board to each squareEl's textContent and show it will automatically on the screen
        if (element === "O") {
            squareEls[index].textContent = "O"
        } else if (element === "X") {
            squareEls[index].textContent = "X"
        } else { 
            squareEls[index].textContent = ""
        }
        // console.log(squareEls[index])
    
    })

}

function updateMessage() {
    //* if winner is ture, message up date to you win! the winner is based on the turn
    //* if winner is false || tie is true, message update to it's a tie!
    //* if bothe winner and tie are false, message updated to it's your turn (the current turn)
    if (winner === true) {
        messageEl.textContent = `Congrats! ${true}, you win!!`
    } else if ((winner === false) && (tie === true)) {
        messageEl.textContent = "It's a tie!"
    } else {
        messageEl.textContent = `"${turn}", it is your turn!`
    }
}


/*----------------------------- Event Listeners -----------------------------*/
function handleClick (event) {
    const squareIndex =  event.target.id
    if((squareEls[squareIndex].textContent === "X" || squareEls[squareIndex].textContent === "O") || winner ){
        return 
    }
    // code to run when the suquare is empty below
    placePiece (squareIndex) 
}

squareEls.forEach((squareEl) => {
    squareEl.addEventListener("click", handleClick)

})

function placePiece(index) {
    board[index] = turn
    // console.log(board)
}



