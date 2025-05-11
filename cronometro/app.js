const cronometro = document.getElementById("cronometro");
const btns = document.querySelectorAll(".boton");
console.log(btns);
const btnPlayPause = btns[0];
const btnRestart = btns[1];

let [hours, minutes, seconds] = [0, 0, 0];
let interval;

function changeBtnStart(remClass = "", addCLass = "") {
  console.log(remClass, addCLass);
  console.log(btnPlayPause.classList);
  btnPlayPause.classList.remove(remClass);
  btnPlayPause.classList.add(addCLass);
  //Modificación de estilos del botón y el fondo
  if (addCLass === "pausar") {
    btnPlayPause.innerHTML =
      "<img src='img/icoStop.png' alt='pause' class='btnIcon'/> Pausar";
    document.body.style.background =
      "radial-gradient(rgb(33, 155, 9),rgb(73, 186, 238))";
    document.body.style.transition = "background 1.5s  ease-out";
  } else {
    btnPlayPause.innerHTML =
      "<img src='img/icoPlay.png' alt='play' class='btnIcon'/> Iniciar";
    document.body.style.background = "radial-gradient(#fa0707, #ff9800)";
    document.body.style.transition = "background 1.5s ease-out";
  }
}

function formatClock(num) {
    return num < 10 ? '0'+ num : num;
}

function updateClock() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  const hFormat = formatClock(hours);
  const mFormat = formatClock(minutes);
  const sFormat = formatClock(seconds);
  cronometro.innerHTML = `${hFormat}:${mFormat}:${sFormat}`
}

function startStopTimer(encender, int = 1000) {
  if (encender === 1) {
    //Se enciende el timer
    interval = window.setInterval(updateClock, int)
  } else if(encender === 2){
    window.clearInterval(interval)
  } else {
    //Se detiene el timer
    window.clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0
    cronometro.innerHTML = "00:00:00";
  }
}

btnPlayPause.addEventListener("click", () => {
  console.log(btnPlayPause.classList.contains("iniciar"));
  if (btnPlayPause.classList.contains("iniciar")) {
    changeBtnStart("iniciar", "pausar");
    //Se enciende el cronómetro
    startStopTimer(1);
  } else {
    changeBtnStart("pausar", "iniciar");
    //Se apaga el cronómetro
    startStopTimer(2);
  }
});

btnRestart.addEventListener("click", () => {
  changeBtnStart("pausar", "iniciar");
  //Se apaga el cronómetro
  startStopTimer(0);
});
