"use strict";
const weddingDay = new Date("Feb 05, 2022 10:00:00").getTime();

const weddingCountDownTimer = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = weddingDay - now;

  // Calculating the days, hours, minutes and seconds left
  let days = `${Math.floor(timeleft / (1000 * 60 * 60 * 24))}`.padStart(2, 0);
  let hours = `${Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )}`.padStart(2, 0);
  let minutes = `${Math.floor(
    (timeleft % (1000 * 60 * 60)) / (1000 * 60)
  )}`.padStart(2, 0);
  let seconds = `${Math.floor((timeleft % (1000 * 60)) / 1000)}`.padStart(2, 0);

  // Result is output to the specific element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(weddingCountDownTimer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    // document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);
