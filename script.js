let GameSeq= [];
let UserSeq= [];
let level = 0;
let started = false;

let btns = ["red", "blue", "green", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 150 );


}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 150 );


}

function levelUp() {
    UserSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomInd = Math.floor(Math.random() * 4);
    let randomColor = btns[randomInd];
    let randomBtn = document.querySelector(`.${randomColor}`);
    GameSeq.push(randomBtn);
    console.log(GameSeq);

    btnFlash(randomBtn);
}

function checkAns(idx){
    if (UserSeq[idx] === GameSeq[idx]) {
        // console.log("Correct");
        if(UserSeq.length === GameSeq.length) {
           setTimeout(levelUp, 1000);
        }
    } else {
        
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>  <br>  Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
     
    }
}

function buttonPress(){
    
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    checkAns(UserSeq.length-1);
    console.log(UserSeq);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", buttonPress);

    
}

function reset() {
    GameSeq = [];
    UserSeq = [];
    level = 0;
    started = false;
    h2.innerText = `Press any key to start`;
}
