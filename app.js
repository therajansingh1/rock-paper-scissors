
let choices = document.querySelectorAll(".choice");
const scoreCard = document.querySelector("#winscore");
const gameSection = document.querySelector(".game-play");
const pickedSection = document.querySelector(".pick");
const winSection = document.querySelector(".win");
const msg = document.querySelector("#msg");
const newGame = document.querySelector("#play-again");
const ruleImg = document.querySelector("#rule-img");
const closeImg = document.querySelector("#rule-close");
let userScore = 0;

const compChoice = () => {
    let handPicked = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return handPicked[randomIdx];
};

const matchDraw = () => {
    msg.innerHTML = "game draw";
}
const winner = (userWin) => {
    if (userWin) {
        userScore++;
        scoreCard.innerHTML = userScore;
        msg.innerHTML = "you win";
    } else {
        userScore--;
        scoreCard.innerHTML = userScore;
        msg.innerHTML = "you lose";
    }
    
}
const playGame = (userChoice) => {
    const compChoiceId = compChoice();
    if (userChoice == compChoiceId) {
        matchDraw();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            // com : paprr, scissor
            userWin = compChoiceId == "paper" ? false : true;
        } else if (userChoice == "paper") {
            //  com: rock, scissor
            userWin = compChoiceId == "rock" ? true : false;
        } else if (userChoice == "scissors") {
            // com: rock ,paper
            userWin = compChoiceId == "rock" ? false : true;
        }
        winner(userWin);
    }
    return pickedSection.innerHTML = `<div class="user-pick">
         <h2>you picked</h2>
         <h2>${userChoice}</h2>
       </div>
       <div class="house-pick">
         <h2>the house picked</h2>
         <h2>${compChoiceId}</h2>
      </div>`
};

const rule = () => {
    ruleImg.classList.remove("hide");
    closeImg.classList.remove("hide");
};
const closeRule = () => {
    ruleImg.classList.add("hide");
    closeImg.classList.add("hide");
};
let resetGame = () => {
    window.location.reload();
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice, choice);
        gameSection.classList.add("hide");
        pickedSection.classList.remove("hide");
        winSection.classList.remove("hide");

    })
});
newGame.addEventListener("click", () => {
    gameSection.classList.remove("hide");
    pickedSection.classList.add("hide");
    winSection.classList.add("hide");
});

