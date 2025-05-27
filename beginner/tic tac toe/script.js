
let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset-btn');
let result=document.querySelector('.msg');
let winDiv=document.querySelector('.winDiv');
let newGame=document.querySelector('.NewGame');
let turnX=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const checkWin=()=>{
    for(num of winpatterns){
        let position1=boxes[num[0]].innerHTML;
        let position2=boxes[num[1]].innerHTML;
        let position3=boxes[num[2]].innerHTML;

         if(position1!="" && position2!="" && position3!=""){
           if(position1==position2 && position2==position3){
            winDiv.classList.remove('hide');
               result.innerHTML=`Congratulation , Winner ${position1}!`;
            }
        }
    }
   
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX==true){
            box.innerHTML="X";
            turnX=false;
        }
        else{
            box.innerHTML="O";
            turnX=true;
        }
        box.disabled=true;
        checkWin();
    })
})
reset.addEventListener("click",()=>{
    
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })
    turnX=true;
})
newGame.addEventListener("click",()=>{
    winDiv.classList.add('hide');
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })
    turnX=true;
})
