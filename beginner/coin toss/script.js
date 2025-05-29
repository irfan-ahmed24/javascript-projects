
let CoinToss =document.querySelector(".Coin");
let flipCoin=document.querySelector(".btn-1");
let resetCoin=document.querySelector(".btn-2");

let headsCount = 0;
let tailsCount = 0;

flipCoin.addEventListener("click",()=>{
    let randomNumber=Math.floor(Math.random()*2);
    CoinToss.style.animation="none";
    if(randomNumber === 0){
        setTimeout(() => {
        CoinToss.style.animation="tail-anim 3s forwards";
        tailsCount++;
        }, 100);
        
    }
    else{
        setTimeout(() => {
        CoinToss.style.animation="head-anim 3s forwards";
        headsCount++;
        }, 100);
        
    }
})