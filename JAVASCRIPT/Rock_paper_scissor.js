
function chooseType(type) {
    console.log(type);
    let userChoice = document.getElementsByClassName("keuze1")[0];


    reset(userChoice);
    userChoice.classList.add(retrieveChosenType(type));

    const randomType = Math.floor(Math.random() * 3);

    let computer = document.getElementsByClassName("keuze2")[0];

    reset(computer);
    computer.classList.add(retrieveChosenType(randomType));

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

function reset(element) {
    element.classList.remove("rock__image");
    element.classList.remove("paper__image");
    element.classList.remove("scissor__image");
}

function retrieveChosenType(type) {
    let chosenType;
    switch (type) {
        case 0: chosenType = "rock__image"; break;
        case 1: chosenType = "paper__image"; break;
        case 2: chosenType = "scissor__image"; break;
        default:
    }

    return chosenType;
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