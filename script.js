let userscore=0;
let compscore=0;

let choices = document.querySelectorAll(".choice");
//let choice = document.querySelector(".choice");
const msg = document.querySelector("#result-ch");
let uscore = document.querySelector("#user-score");
let compcore = document.querySelector("#comp-score");
let reset = document.querySelector(".btn")
//let user-
reset.addEventListener("click",() =>{
    console.log("reset");
    uscore.innerText=0;
    compcore.innerText=0;
    msg.innerText="Play our move";
    msg.style.backgroundColor="lightblue";
})
const gencompchoice = () =>{
    const array=["rock","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return array[idx];
}
let showwinner = (userwin,userchoice,compchoice) => {
  

    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        console.log("won");
        msg.innerText = "user won the game";
        msg.style.backgroundColor = "green";
        
    }
    else{
        compscore++;
        compcore.innerText=compscore;
        console.log("loose");
        msg.innerText = "user loose the game";
        msg.style.backgroundColor = "red";
        
    }
   }

let draw = () =>{
    console.log("draw");
    msg.innerText="drawn"; 
    msg.style.backgroundColor = "bluee";
}

let playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice===compchoice){
       draw();
    }
    else{
    userwin="true";
    if(userchoice==="rock"){
        userwin = compchoice==="scissor"?true:false;
    }
    else if(userchoice==="scissor"){
        userwin = compchoice==="rock"?false:true;
    }
    else{
        userwin = compchoice==="rock"?true:false;
    }
    showwinner(userwin);
}
   // console.log(gencompchoice);
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        
        const userchoice = choice.getAttribute("id");
        //console.log("choice clicked",userchoice);
        playgame(userchoice);
    })
})
