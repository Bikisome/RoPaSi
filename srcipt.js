let yourScore = 0;
let comScore= 0;
const choises = document.querySelectorAll(".choise")
const msg =document.querySelector("#msg");

const yourScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const drawGame =() =>{
        console.log(" Game is draw");
        msg.innerText ="game is draw ,phirse khelo";
        msg.style.backgroundColor ="black";
        
}

const genComChoise =() =>{
    const options =["rock","paper","sizzors"];
    const ranIndex= Math.floor(Math.random()*3);
    return options[ranIndex];
}

const playGame =(userChoise) =>{
console.log("user choise =>",userChoise);
const comChoise = genComChoise();
console.log("com choise =>" ,comChoise)

const showWinner =(userwin) =>{
    if(userwin){
        yourScore++;
        console.log("congratulations bro you win")
       yourScorePara.innerText= yourScore;
        msg.innerText =` you win your choise ${userChoise} beats us ${comChoise}`;
       msg.style.backgroundColor = " green";
        
    }
    else{
        console.log("sorry bro try next time");
        comScore++;
         compScorePara.innerText = comScore;
        msg.innerText=` you loose our choise ${comChoise} beats you ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
}

if(userChoise===comChoise){
    drawGame();
}
else{
    let userwin = true;
    if(userChoise=="rock"){
        userwin=comChoise==="paper"?false:true;
    }
    else if(userChoise=="paper"){
        userwin=comChoise==="sissors"? false:true;
    }
    else{
        userwin=comChoise==="rock"?false:true;
    }
    showWinner(userwin);
}

}
// this function we use for add event listner in every click at the choises
choises.forEach((choise) =>{
    choise.addEventListener("click",()=>{
        const userChoise= choise.getAttribute("id");
        //console.log("choise is clicked",userChoise);
        playGame(userChoise);
    })
})