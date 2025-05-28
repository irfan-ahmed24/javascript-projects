var number=document.querySelector("#number")
var btn=document.querySelector(".btn")
var win=document.querySelector(".win")
var choice=document.querySelector(".choice")
var numberWas=document.querySelector(".number")
var btn2=document.querySelector(".btn-2")



btn2.addEventListener("click",function(e){
    btn.disabled = false;
    win.innerHTML = "";
    choice.innerHTML = "";
    numberWas.innerHTML = "";
    e.preventDefault();
    btn2.style.display = "none";
})

btn.addEventListener("click",function(e){
    btn.disabled = "true";
    e.preventDefault(); 
    var guess = parseInt(number.value);
    var randomNumber=Math.floor(Math.random()*10) + 1;
    if(guess === randomNumber) {
        win.innerHTML = "Congratulations! You guessed the number!";
        choice.innerHTML = "The number was: " + randomNumber;
        btn2.innerHTML = "new game";
        btn2.style.display = "block";
    }
    else {
        win.innerHTML = "Sorry, try again!";
        choice.innerHTML = "Your guess: " + guess;
        numberWas.innerHTML = "The number was: " + randomNumber;
        btn2.innerHTML = "Try again";
        btn2.style.display = "block";
    }
    number.value = "";
})