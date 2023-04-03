const ballRun = document.querySelector(".current-run");
const playerRun = document.querySelector(".player-run");
const playButton = document.querySelector(".play-button");
const teamRun = document.querySelector(".team-run");

let numRun;
// console.log(numRun);

let sum = 0;
let totalRun = 0;
let countOfWicket = 0;

// ballRun.textContent = numRun;
// playerRun.innerText = sum;

// while (numRun !== 5) {
//   sum = sum + numRun;
//   playerRun.innerText = sum;
// }

const playerFunction = function () {
  if (countOfWicket < 10) {
    numRun = Math.trunc(Math.random() * 6) + 1;

    if (numRun === 5) {
      countOfWicket = countOfWicket + 1;
      console.log(countOfWicket);
    }

    if (numRun === 5) {
      sum = sum;
    } else {
      sum = sum + numRun;
    }

    if (numRun === 5) {
      totalRun = totalRun;
    } else {
      totalRun = totalRun + numRun;
    }

    // sum = sum + numRun;
    ballRun.innerText = numRun;

    if (numRun === 5) {
      playerRun.innerHTML = `OUT at ${sum}`;
      sum = 0;
      return;
    } else {
      playerRun.innerHTML = sum;
      teamRun.innerHTML = totalRun;
    }

    // numRun === 5
    //   ? (playerRun.innerText = `OUT at ${sum}`)
    //   : (playerRun.innerText = sum);
    //   playerRun.innerText = sum;
    return sum;
  } else {
    teamRun.innerHTML = ` All OUT at ${totalRun}`;
  }
};
// console.log(playerFunction());

playButton.addEventListener("click", playerFunction);
