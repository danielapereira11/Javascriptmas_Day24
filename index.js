const crew = document.getElementById("crew");
const btn = document.getElementById("btn");
const countdownEl = document.querySelector("#countdown");

function launch() {
  crew.classList.add("launch");
}

function countingdown() {
  let count = 3;
  let countdown = setInterval(function () {
    if (count === 0) {
      clearInterval(countdown);
      countdownEl.innerHTML = `<p class="ho-ho-ho">HO! HO! HO!</p>`;
      launch();
    } else {
      countdownEl.innerHTML = `<p class="countdown">${count}</p>`;
      count--;
    }
  }, 1000);
}

btn.addEventListener("click", countingdown);

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
