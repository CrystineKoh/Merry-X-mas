// Countdown
let clockCount = 3,
  clockTimer = setInterval(clockCountDecrease, 1000);
let totalScore = 0;
let timer = 15;
let giftCount = document.querySelector("#giftCount");
// Countdown 321 function
function clockCountDecrease() {
  const clock = document.querySelector("#clock");
  clock.innerText = clockCount;
  clockCount--;
  if (clockCount < 0) {
    clearInterval(clockTimer);
    clock.style.display = "none";
    document.querySelector("#countDown").style.display = "block";
    startSecondCountdown();
  }
}
// Countdown 15...7...1
function startSecondCountdown() {
  createNew();
  let clockTimers = setInterval(function () {
    createNew();
    const countDown = document.querySelector("#countDown");
    countDown.innerText = timer;
    timer--;
    if (timer < 0) {
      clearInterval(clockTimers);
      countDown.style.display = "none";
      document.getElementsByClassName("header")[0].style.display = "block";
      const box = document.querySelector(".box");
      box.remove();
      showPop();
    }
  }, 1000);
}

// Create a div give a class of box
function createNew() {
  let box = document.createElement("div");
  box.classList.add("box");
  const bodyTag = document.querySelector("body");
  box.style.left =
    Math.floor(Math.random() * (window.innerWidth - 100)) + 50 + "px";
  // box.style.top = Math.floor(Math.random() * window.innerHeight - 50) + "px";
  bodyTag.append(box);
  box.addEventListener("click", gone);
  setTimeout(() => {
    box.remove();
  }, 1000);

  return box;
}

function gone(event) {
  console.log(event, event.target);
  let points = 0;
  if (Math.random() > 0.5) {
    points = 10;
    event.target.style.background = 'url("./img/coin.png") no-repeat';
    event.target.style.backgroundSize = "contain";
    event.target.style.boxShadow = "none";
  } else {
    points = 0;
    event.target.style.background = 'url("./img/none.png") no-repeat';
    event.target.style.backgroundSize = "contain";
    event.target.style.boxShadow = "none";
  }
  if (timer < 0) {
    return;
  }

  // event.target.remove();
  totalScore += points;
  console.log(totalScore);
  giftCount.innerText = totalScore;
  if (timer > 0) {
    createNew();
  } else {
  }
}

// Pop-up result
function showPop() {
  let pop = document.createElement("div");
  pop.classList.add("pop");
  const bodyTag = document.querySelector("body");
  bodyTag.append(pop);
  pop.innerHTML = "<span>" + totalScore + " points" + "</span>";
  giftCount.innerText = totalScore;
}
