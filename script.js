document.getElementById("btnStart").addEventListener("click", () => {
  let count = 0;
  let interval = setInterval(() => {
    count++;
    let beep = new AudioContext();
    let oscillator = beep.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1000, beep.currentTime); // 1000 Hz
    oscillator.connect(beep.destination);
    oscillator.start();
    oscillator.stop(beep.currentTime + 0.2); // 0.2 segundos

    if (count >= 7) clearInterval(interval);
  }, 30000); // cada 30 segundos
});