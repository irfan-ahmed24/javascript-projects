
let CoinToss =document.querySelector(".Coin");
let flipCoin=document.querySelector(".btn-1");
let resetCoin=document.querySelector(".btn-2");
resetCoin.disabled = true;
let headsCount = 0;
let tailsCount = 0;

resetCoin.addEventListener("click",()=>{
    CoinToss.style.animation="none";
    headsCount = 0;
    tailsCount = 0;
    document.querySelector("#heads-count").textContent = `Heads: ${""}`;
    document.querySelector("#tails-count").textContent = `Tails: ${""}`;
    resetCoin.disabled = true;
})

const displayCount = () => {
    setTimeout(() => {
        document.querySelector("#heads-count").textContent = `Heads: ${headsCount}`;
        document.querySelector("#tails-count").textContent = `Tails: ${tailsCount}`;
    }, 3000);
    
}

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
    displayCount();
    resetCoin.disabled = false;
})