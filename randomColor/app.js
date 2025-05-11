const btn = document.querySelector("button"); // Seleccionar el primer botón
const color = document.getElementById("color"); // Seleccionar el elemento con id color


function hexAleatorio(){
        // Agregar el evento click al botón
    let digitos = "0123456789ABCDEF"; // Definir los dígitos hexadecimales
    let colorHex = "#"; // Inicializar el color con el símbolo de número
    for (let i = 0; i < 6; i++) { // Generar un color hexadecimal aleatorio
        colorHex += digitos[Math.floor(Math.random() * 16)]; // Agregar un dígito aleatorio al color
    }
    return colorHex; // Devolver el color hexadecimal generado
}

btn.addEventListener("click", () => { // Agregar el evento click al botón
    btn.style.transform = "scale(1.1)"; // Aumentar el tamaño del botón
    btn.style.transition = "transform 0.2s"; // Agregar una transición suave
    setTimeout(() => {
        btn.style.transform = "scale(1)"; // Restaurar el tamaño original después de un tiempo
    }, 200);
    let nuevoColor = hexAleatorio(); // Generar un nuevo color hexadecimal
    document.body.style.backgroundColor = nuevoColor; // Cambiar el color de fondo del body al nuevo color
    color.innerText = nuevoColor; // Cambiar el texto del elemento al nuevo color
    color.style.filter = `drop-shadow(0 0 10px ${nuevoColor})`; // Cambiar el filtro del elemento a desenfoque 0px
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = nuevoColor; // Cambiar el color de fondo del botón al valor de nuevoColor
    });
    btn.dispatchEvent(new Event("mouseover")); // Disparar el evento mouseover para cambiar el color de fondo del botón
    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = ""; // Restaurar el color de fondo del botón al valor original
    });
    console.log(nuevoColor); // Mostrar el nuevo color en la consola
}); // Fin del evento click


