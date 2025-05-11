const inputRojo = document.querySelector("#red");
const inputVerde = document.querySelector("#green");
const inputAzul = document.querySelector("#blue");
const titulo = document.querySelector("h1")
const output = document.querySelectorAll(".rgbValue");

function updateColor() {
    const rojo = parseInt(inputRojo.value) || 0;
    const verde = parseInt(inputVerde.value) || 0;
    const azul = parseInt(inputAzul.value) || 0;

  rojo + verde + azul > 420
    ? (titulo.style.color = "black")
    : (titulo.style.color = "white");

  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

  document.querySelector(
    "#rgbCode"
  ).textContent = `rgb(${rojo}, ${verde}, ${azul})`;

  output[0].innerHTML = rojo;
  output[1].innerHTML = verde;
  output[2].innerHTML = azul;
}

inputRojo.addEventListener("input", updateColor);
inputVerde.addEventListener("input", updateColor);
inputAzul.addEventListener("input", updateColor);
