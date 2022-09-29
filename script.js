const choices = ["rock", "paper", "scissors"];

const computerWinsText = document.getElementById("computerwins");
const userWinsText = document.getElementById("userwins");

let computerWins = 0;
let userWins = 0;

let computerHand = document.getElementById("computerhand");
let userHand = document.getElementById("userhand");

let whoWon = document.getElementById("matchtext");
const buttons = document.querySelectorAll(".icons button");
buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    let computerChoice = choices[Math.round(Math.random() * 2)];
    let userChoice = e.target.id;
    if (computerChoice == "rock") {
      computerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist" id="rock">`;
      if (userChoice == "rock") {
        whoWon.innerText = "Its a Tie!";
        whoWon.style.color = "gray";
      } else if (userChoice == "paper") {
        whoWon.innerText = "You Win!";
        whoWon.style.color = "green";
        userWins++;
      } else if (userChoice == "scissors") {
        whoWon.innerText = "You Lose!";
        whoWon.style.color = "red";
        computerWins++;
      }
    } else if (computerChoice == "paper") {
      computerHand.innerHTML = `<i class="fa-sharp fa-solid fa-hand" id="paper">`;
      if (userChoice == "rock") {
        whoWon.innerText = "You Lose!";
        whoWon.style.color = "red";
        computerWins++;
      } else if (userChoice == "paper") {
        whoWon.innerText = "Its a Tie!";
        whoWon.style.color = "gray";
      } else if (userChoice == "scissors") {
        whoWon.innerText = "You Win!";
        whoWon.style.color = "green";
        userWins++;
      }
    } else if (computerChoice == "scissors") {
      computerHand.innerHTML = `<i class="fa-regular fa-hand-scissors" id="scissors">`;
      if (userChoice == "rock") {
        whoWon.innerText = "You Win!";
        whoWon.style.color = "green";
        userWins++;
      } else if (userChoice == "paper") {
        whoWon.innerText = "You Lose!";
        whoWon.style.color = "red";
        computerWins++;
      } else if (userChoice == "scissors") {
        whoWon.innerText = "Its a Tie!";
        whoWon.style.color = "gray";
      }
    }
    if (userChoice == "rock") {
      userHand.innerHTML = `<i class="fa-regular fa-hand-back-fist" id="rock">`;
    }
    if (userChoice == "paper") {
      userHand.innerHTML = `<i class="fa-sharp fa-solid fa-hand" id="paper">`;
    }
    if (userChoice == "scissors") {
      userHand.innerHTML = `<i class="fa-regular fa-hand-scissors" id="scissors">`;
    }
    computerWinsText.innerText = computerWins;
    userWinsText.innerText = userWins;
  });
});
computerWinsText.innerText = computerWins;
userWinsText.innerText = userWins;
