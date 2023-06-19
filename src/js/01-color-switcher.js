const bodyBackgroundColor = document.querySelector("body");
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStartClick);

function onStartClick() {

    timerId = setInterval(() => {
    bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// comment