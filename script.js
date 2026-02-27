let userScore = 0;
let comScore = 0;


let options = document.querySelectorAll(".box");
let result = document.querySelector("#result-text");
let myscore = document.querySelector("#myScore");
let compscore = document.querySelector("#compScore");
let perResult = document.querySelector(".result");


// myscore.innerText = userScore;
// compscore.innerText = comScore;


const Winsound = new Audio("./sound/win.mp3");
const losesound = new Audio("./sound/lose.mp3");
const drawsound = new Audio("./sound/draw.mp3");



const AfterClick = (UserChoise) => {
  console.log(`UserChoise is ,${UserChoise}`);

  let comChoise = comoptions();
  console.log(`UserChoise is ,${comChoise}`);


  if (UserChoise === comChoise) {
    Draw();
  } else {
    let userwin = true;
    if (UserChoise === "Stone") {
      if (comChoise === "paper") {
        userwin = false;
      } else {
        userwin = true;
      }

    } else if (UserChoise === "paper") {

      if (comChoise === "scissors") {
        userwin = false;
      } else {
        userwin = true;
      }

    } else {
      if (comChoise === "Stone") {
        userwin = false;
      } else {
        userwin = true;
      }
    }
    win(userwin, UserChoise, comChoise);
  }
}

const win = (userwin, UserChoise, comChoise) => {
  if (userwin) {
    userScore++;
    myscore.innerText = userScore;
    result.innerText = `You win! ,Your ${UserChoise} beats ${comChoise}`;
    result.style.backgroundColor = "green";

    Winsound.currentTime = 0;
    Winsound.volume = 0.5;
    Winsound.play();

  } else {
    comScore++;
    compscore.innerText = comScore;
    result.innerText = `You Lose! , ${comChoise} beats your ${UserChoise}`;
    result.style.backgroundColor = "red";

    losesound.currentTime = 0;
    losesound.volume = 0.5;
    losesound.play();
  }

}

let Draw = () => {
  result.innerText = `draw`;
  result.style.backgroundColor = "gray";
  drawsound.currentTime = 0;
  drawsound.volume = 0.5;
  drawsound.play();
}

const comoptions = () => {
  let op = ["Stone", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return op[random];
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    let UserChoise = option.getAttribute("id");
    AfterClick(UserChoise);
  })
})