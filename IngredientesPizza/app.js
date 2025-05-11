const ingredientes = document.getElementsByClassName('ingredientes'); // Seleccionar el primer elemento li

function mostrarClic(e){
    console.log(e.target.innerText); // Mostrar el texto del botón en la consola
};

for (const ingrediente of ingredientes) { // Recorrer los elementos seleccionados
    ingrediente.addEventListener('click', mostrarClic); // Agregar el evento click a cada elemento
}





