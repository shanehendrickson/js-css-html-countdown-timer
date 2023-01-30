const slider = document.getElementById("slider");
const timeLeftText = document.getElementById("time-left")
const startCount = 5
let timeLeft = startCount

const timerId = setInterval(() => {
  timeLeft--
  timeLeftText.textContent = timeLeft;
  slider.value = timeLeft
  if (timeLeft <= 0){
    clearInterval(timerId);
    timeLeftText.textContent = "TIME OVER"
  }
}, 1000)