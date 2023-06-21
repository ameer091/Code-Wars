/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

function rockPaperScissors(player1, player2) {
  // Check if both players made the same choice
  if (player1 === player2) {
    return "Draw!"; // Return "Draw!" if it's a tie
  } else if (
    // Check all the winning combinations for Player 1
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return "Player 1 won!"; // Player 1 wins if their choice beats Player 2's choice
  } else {
    return "Player 2 won!"; // Player 2 wins otherwise
  }
}

//Other Solutions
onst rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

//Other Solutions
rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

//Other Solutions
