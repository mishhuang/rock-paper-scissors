let title = document.getElementById("instruction");
let rule = document.getElementById("rule");
let bottomText = document.getElementById("good-luck");

const playerScore = document.getElementById("playerscore");
const aiScore = document.getElementById("aiscore");
const tieScore = document.getElementById("tiescore");
let playerPic = document.getElementById("player_pic");
let aiPic = document.getElementById("ai_pic");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let playerPoints = 0;
let aiPoints = 0;
let tiePoints = 0;

rockButton.addEventListener('click', () => {
    playerPic.style.backgroundImage = "url(images/Rock.png)";
    playerPic.style.backgroundSize = "50%";
    playRound("rock", aiPlay());
});

paperButton.addEventListener('click', () => {
    playerPic.style.backgroundImage = "url(images/Paper.png)";
    playerPic.style.backgroundSize = "50%";
    playRound("paper", aiPlay());
});

scissorsButton.addEventListener('click', () => {
    playerPic.style.backgroundImage = "url(images/Scissors.png)";
    playerPic.style.backgroundSize = "50%";
    playRound("scissors", aiPlay());
});

function aiPlay() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else if (random == 2) {
        return "Scissors";
    }
};

function playRound(playerChoice, aiChoice) {
    if (aiChoice == "Rock") {
        if (playerChoice == "rock") {
                title.innerHTML = "It's a tie!";
                bottomText.innerHTML = "Rock ties with rock";
                tiePoints++;
        } else if (playerChoice == "paper") {
                title.innerHTML = "You won! Keep at it!"
                bottomText.innerHTML = "Paper beats rock";
                playerPoints++;
        } else if (playerChoice == "scissors") {
                title.innerHTML = "Argh! You lost. Give it another shot!";
                bottomText.innerHTML = "Scissors is beaten by rock";
                aiPoints++;
        }
        aiPic.style.backgroundImage = "url(images/Rock.png)";

    } else if (aiChoice == "Paper") {
        if (playerChoice == "rock") {
                title.innerHTML = "Oof you lost! Don't worry, you got this!";
                bottomText.innerHTML = "Rock is beaten by paper";
                aiPoints++;
        } else if (playerChoice == "paper") {
                title.innerHTML = "It's a tie!"
                bottomText.innerHTML = "Paper ties with paper";
                tiePoints++;
        } else if (playerChoice == "scissors") {
                title.innerHTML = "You won! You're pretty good at this.";
                bottomText.innerHTML = "Scissors beats paper";
                playerPoints++;
        }
        aiPic.style.backgroundImage = "url(images/Paper.png)";

    } else if (aiChoice == "Scissors") {
        if (playerChoice == "rock") {
                title.innerHTML = "Woohoo! You won!";
                bottomText.innerHTML = "Rock beats scissors";
                playerPoints++;
        } else if (playerChoice == "paper") {
                title.innerHTML = "You lost! Stop inting!"
                bottomText.innerHTML = "Paper is beaten by scissors";
                aiPoints++;
        } else if (playerChoice == "scissors") {
                title.innerHTML = "It's a tie!";
                bottomText.innerHTML = "Scissors ties with scissors";
                tiePoints++;
        }
        aiPic.style.backgroundImage = "url(images/Scissors.png)";
    }

    playerScore.textContent = ` ${playerPoints}`;
    aiScore.textContent = ` ${aiPoints}`;
    tieScore.textContent = ` ${tiePoints}`;

    if (aiPoints == 5) {
        title.innerHTML = "You lost... Maybe you should try something else?"
        playerPoints = 0;
        aiPoints = 0;
        tiePoints = 0;
    } else if (playerPoints == 5) {
        title.innerHTML = "You won! Let's play again!"
        playerPoints = 0;
        aiPoints = 0;
        tiePoints = 0;
    }
}