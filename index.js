const ballRun = document.querySelector(".current-run");
const playerRun = document.querySelector(".player-run");
const playButton = document.querySelector(".play-button");

let numRun;
// console.log(numRun);

let sum = 0;

// ballRun.textContent = numRun;
// playerRun.innerText = sum;

// while (numRun !== 5) {
//   sum = sum + numRun;
//   playerRun.innerText = sum;
// }

const playerFunction = function () {
  numRun = Math.trunc(Math.random() * 6) + 1;
  sum = sum + numRun;
  ballRun.innerText = numRun;
  numRun === 5
    ? (playerRun.innerText = `OUT at ${sum}`)
    : (playerRun.innerText = sum);
  //   playerRun.innerText = sum;
  return sum;
};
// console.log(playerFunction());

playButton.addEventListener("click", playerFunction);
