let startTime,
  elapsedTime = 0,
  timerInterval;

function Timer() {
  const time = Date.now() - startTime + elapsedTime;
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  let min = String(minutes).padStart(2, "0") + "min ";
  let sec = String(seconds).padStart(2, "0") + "s";
  if (minutes < 1) {
    document.getElementById("timer").innerText = sec;
  } else {
    document.getElementById("timer").innerText = min + sec;
  }
}

function start() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(Timer, 1000);
  }
}

function end() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime += Date.now() - startTime;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("timer").innerText = "00s";
}
