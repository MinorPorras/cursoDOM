import { citasMotivadoras, autores } from "./citas.mjs";
const cita = document.getElementById("cita");
const autor = document.getElementById("autor");
const btnNext = document.getElementById("btnCambiar");
let cont = 0;

console.log(citasMotivadoras.length)

function getNextCite() {
  const i = Math.floor(Math.random() * citasMotivadoras.length)
  cita.innerText = citasMotivadoras[i];
  autor.innerText = `Autor: ${autores[i]}`;
  if (cont >= citasMotivadoras.length) {
    cont = 0;
  } else {
    cont++;
  }
}

btnNext.addEventListener("click", getNextCite)

getNextCite();
