const watch = document.getElementsByClassName('watch');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const resume = document.getElementById('resume');
const submit = document.getElementById('submit');

var currentDate = new Date();
let newDate = new Date(currentDate);
let secondsInterval, minutesInterval, hoursInterval;

function updateDisplay() {
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  watch[0].innerHTML = hours + ':';
  watch[1].innerHTML = minutes + ':';
  watch[2].innerHTML = seconds;
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
    clearInterval(hoursInterval);
  }
}

function startInterval() {
  secondsInterval = setInterval(() => {
    newDate.setSeconds(newDate.getSeconds() - 1);
    updateDisplay();
  }, 1000);

  minutesInterval = setInterval(() => {
    newDate.setMinutes(newDate.getMinutes() - 1);
    updateDisplay();
  }, 60000);
  hoursInterval = setInterval(() => {
    newDate.setHours(newDate.getHours() - 1);
    updateDisplay();
  }, 3600000);
}

submit.addEventListener('click', () => {
  const time = document.getElementById('time').value;
  const arr = time.split('/');
  newDate.setHours(arr[0]);
  newDate.setMinutes(arr[1]);
  newDate.setSeconds(arr[2]);
  updateDisplay();
});

reset.addEventListener('click', () => {
  const time = document.getElementById('time').value;
  const arr = time.split('/');
  newDate.setHours(arr[0]);
  newDate.setMinutes(arr[1]);
  newDate.setSeconds(arr[2]);
  updateDisplay();
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);
});

start.addEventListener('click', () => {
  startInterval();
});

stop.addEventListener('click', () => {
  clearInterval(secondsInterval);
  clearInterval(minutesInterval);
  clearInterval(hoursInterval);
  updateDisplay();
});

resume.addEventListener('click', () => {
  startInterval();
});
