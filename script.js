const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const am_pmEL = document.getElementById("am_pm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am_pm = "AM";

  if (h > 12) {
    h = h - 12;
    am_pm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEL.innerText = h;
  minutesEL.innerText = m;
  secondsEL.innerText = s;
  am_pmEL.innerText = am_pm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
