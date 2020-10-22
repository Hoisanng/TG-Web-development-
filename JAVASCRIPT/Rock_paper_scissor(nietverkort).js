
function chooseType(type) {
    console.log(type);
    let userChoice = document.getElementsByClassName("keuze1")[0];

    userChoice.classList.remove("rock__image");
    userChoice.classList.remove("paper__image");
    userChoice.classList.remove("scissor__image");

    let user;
    switch (type) {
        case 0: user = "rock__image"; break;
        case 1: user = "paper__image"; break;
        case 2: user = "scissor__image"; break;
        default:
    }
    userChoice.classList.add(user);

    const randomType = Math.floor(Math.random() * 3);

    let computer = document.getElementsByClassName("keuze2")[0];
    let computerChoice;
    switch (randomType) {
        case 0: computerChoice = "rock__image"; break;
        case 1: computerChoice = "paper__image"; break;
        case 2: computerChoice = "scissor__image"; break;
        default:
    }

    computer.classList.remove("rock__image");
    computer.classList.remove("paper__image");
    computer.classList.remove("scissor__image");
    computer.classList.add(computerChoice);

    // document.getElementById('answer').innerText = "blabla";
    // console.log(user + " "+ randomType);
    if (type === 0 && randomType === 2) {
        document.getElementById('answer').innerText = "Rock wins";
    } else if (type === 0 && randomType === 1) {
        document.getElementById('answer').innerText = "Paper wins";
    } else if (type === 0 && randomType === 0) {
        document.getElementById('answer').innerText = "Draw!";
    } else if (type === 1 && randomType === 2) {
        document.getElementById('answer').innerText = "Scissor wins";
    } else if (type === 1 && randomType === 1) {
        document.getElementById('answer').innerText = "Draw!";
    } else if (type === 1 && randomType === 0) {
        document.getElementById('answer').innerText = "Paper wins";
    } else if (type === 2 && randomType === 2) {
        document.getElementById('answer').innerText = "Draw!";
    } else if (type === 2 && randomType === 1) {
        document.getElementById('answer').innerText = "Scissor wins";
    } else if (type === 2 && randomType === 0) {
        document.getElementById('answer').innerText = "Rock wins";
    }
}

function retrieveChosenType() {

}

// function rock(){

    //  Get user and computer choice
    // let myChoice = "rock";
    // let computerChoices = ["rock", "paper", "scissors"];
    // let randomNr = (Math.round(Math.random() * 2 ));
    // let computerChoice = computerChoices[randomNr];
    // let userChoice = document.getElementsByClassName("keuze1")[0];
    // let computerChoice1 = document.getElementsByClassName("keuze2");

    // console.log(userChoice);
    // console.log(computerChoice);
    // userChoice.classList.add('rock__image'); 


// } 


// function paper(){
//     let myChoice = "paper";
//     let computerChoices = ["rock", "paper", "scissors"];
//     let randomNr = (Math.round(Math.random() * 2 ));
//     let computerChoice = computerChoices[randomNr];

//     // console.log(computerChoice);
// }

// function scissors(){
//     let myChoice = "scissors";
//     let computerChoices = ["rock", "paper", "scissors"];
//     let randomNr = (Math.round(Math.random() * 2 ));
//     let computerChoice = computerChoices[randomNr];

//     // console.log(computerChoice);
// 