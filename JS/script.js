function timeUpdate() {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, 0);
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);
  const now = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").innerText = now;
}
timeUpdate();
setInterval(timeUpdate, 1000);
