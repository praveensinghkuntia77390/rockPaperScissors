let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
// Random Choice of the Computer form Rock Paper Scissors
}

const drawGame=()=>{
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userScore++
    userScorePara.innerText=userScore;
    console.log(userwin)
    msg.innerText=`You Won! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="Green";
}else{
    compScore++
    compScorePara.innerText=compScore;
    msg.innerText=`You lost! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
}
};

const playGame=(userchoice)=>{
console.log("User Choice =",userchoice);
//Generate Computer Choice
const compchoice= genCompChoice();
console.log("Computer Choice =",compchoice);

if(userchoice===compchoice){
    //Draw Game
    drawGame();
}else{

   let userwin=true;

   if(userchoice === "Rock"){
    //Scissors,Paper

    userwin=compchoice==="Paper" ? false:true;
    showWinner(userwin,userchoice,compchoice);
    
   }else if(userchoice==="Paper"){
    //Rock,Scissors
  
    userwin= compchoice==="Scissors" ? false:true;
    showWinner(userwin,userchoice,compchoice);
   }else{
    userchoice==="Scissors"
    //Rock,Paper

    userwin=compchoice==="Rock" ? false:true;
    showWinner(userwin,userchoice,compchoice);
   }


}
};

choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
      playGame(userchoice);
    });
});