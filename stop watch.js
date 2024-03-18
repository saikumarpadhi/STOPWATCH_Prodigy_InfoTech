let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 1;

const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
const lapButton = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function displayTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = displayTime(elapsedTime);
    }, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = displayTime(elapsedTime);
    lapsList.innerHTML = '';
    lapCounter = 1;
}

function lapTimer() {
    const lapTime = elapsedTime;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${displayTime(lapTime)}`;
    lapsList.appendChild(lapItem);
    lapCounter++;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTimer);