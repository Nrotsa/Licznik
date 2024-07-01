function updateCountdownTimer() {
  const currentDate = new Date();
  const targetDate = new Date("2024-12-31T00:00:00");
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("countdown-timer");
  timerElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
updateCountdownTimer();
setInterval(updateCountdownTimer, 1000);

const marker = document.querySelectorAll(".chall");

marker.forEach((chall) => {
  chall.addEventListener("click", () => {
    chall.classList.toggle("checked");
  });
 
});
