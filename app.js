const startBtn = document.getElementById("startBtn");
const countdownEl = document.getElementById("countdown");

let intervalId;
let beepCount = 0;
let countdownTimer;

function playBeep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, ctx.currentTime); // A4
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.5); // 0.5 segundos
}

function startBeeping() {
  beepCount = 0;
  clearInterval(intervalId);
  clearInterval(countdownTimer);
  
  playBeep();
  beepCount++;

  intervalId = setInterval(() => {
    if (beepCount < 9) {
      playBeep();
      beepCount++;
      startCountdown(30);
    } else {
      clearInterval(intervalId);
      countdownEl.textContent = "Finalizado ✅";
    }
  }, 30000);

  startCountdown(30);
}

function startCountdown(seconds) {
  clearInterval(countdownTimer);
  let remaining = seconds;
  countdownEl.textContent = `Siguiente beep en: ${remaining}s`;
  countdownTimer = setInterval(() => {
    remaining--;
    countdownEl.textContent = `Siguiente beep en: ${remaining}s`;
    if (remaining <= 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}

startBtn.addEventListener("click", startBeeping);
