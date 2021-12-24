const crew = document.getElementById("crew");
const btn = document.getElementById("btn");

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.
function launch() {
  crew.classList.add("launch");
}

btn.addEventListener("click", launch);

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
