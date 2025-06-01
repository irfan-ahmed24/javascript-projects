var user =0;
var computer = 0;
var choices=document.querySelectorAll(".choice");

var compChoice = ["rock", "paper", "scissor"];

const checkWinner = (userChoice,computerChoice) => {
    if (userChoice === computerChoice) {
        document.querySelector(".drow").innerHTML = "It's a Draw!";
    }
    else if((userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")) {
        user++;
        document.querySelector(".user").innerHTML = "user: " + user;
        document.querySelector(".drow").innerHTML = "user wins!";
    }
    else {
        computer++;
        document.querySelector(".Comp").innerHTML = "computer:" + computer;
        document.querySelector(".drow").innerHTML = "computer wins!";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        var userChoice = choice.getAttribute("id");
        var computerChoice = compChoice[Math.floor(Math.random() * 3)];
        checkWinner(userChoice,computerChoice);
    });
})