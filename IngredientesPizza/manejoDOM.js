let sectIng = document.getElementById('seccionIng');
console.log(sectIng); // Log the new text to the console

let titulo = document.getElementById('tituloH2');
console.log(titulo.innerText); //Ver el texto que contiene el elemento
console.log(titulo.tagName); // Ver la etiqueta del elemento seleccionado

let ingredientes = document.getElementsByClassName('ingredientes');
console.log(ingredientes); // Ver el elemento seleccionado
console.log(ingredientes[0].innerText); // Ver el texto que contiene el elemento
console.log(ingredientes[1].id); // Ver el id del elemento
console.log(ingredientes[2].className); // Ver la clase del elemento

let listItems = document.getElementsByTagName('li');
console.log(listItems); // Ver el elemento seleccionado

const aceituna = document.querySelector('ul li:nth-child(1)');
console.log(aceituna); // Ver el elemento seleccionado

const ingredientes2 = document.querySelectorAll('ul li:not(.noUsar)');
console.log(ingredientes2); // Ver el elemento seleccionado

const elemento  = document.querySelector('.ingredientes');
console.log(elemento.style); // Ver el elemento seleccionado
elemento.style.color = 'blue'; // Cambiar el color del texto a rojo

ingredientes[1].innerText = 'Tomate'; // Cambiar el texto del elemento

const link = document.getElementsByTagName('a');
link[0].removeAttribute('hidden'); // Eliminar el atributo hidden del elemento
link[0].setAttribute('href', 'https://github.com/MinorPorras/curso-Dom'); // Cambiar el atributo href del elemento


const ing2 = document.querySelector('.ingredientes:nth-child(2)');
console.log(ing2.classList)
ing2.classList.add('tomate'); // Agregar una nueva clase al elemento
console.log(ing2.classList.contains('noUsar')); // Ver si el elemento tiene la clase noUsar
ing2.classList.remove('ingredientes'); // Eliminar la clase noUsar del elemento

const lista = document.querySelector('ul'); // Seleccionar la lista
const newIngredient = document.createElement('li'); // Crear un nuevo elemento li
newIngredient.innerText = 'Pimiento'; // Agregar texto al nuevo elemento
newIngredient.classList.add('ingredientes'); // Agregar la clase ingredientes al nuevo elemento
lista.appendChild(newIngredient); // Agregar el nuevo elemento a la lista
newIngredient.remove(); // Eliminar el nuevo elemento de la lista

const list2 = document.querySelector('ul'); // Seleccionar la lista
console.log(listItems.parentNode);
console.log(listItems.parentElement); // Ver el elemento padre del elemento seleccionado
// console.log(listItems.parentElement.parentElement); // Ver el abuelo del elemento seleccionado}
console.log(list2.children); // Ver el bisabuelo del elemento seleccionado
console.log(list2.firstElementChild); // Ver el primer hijo del elemento seleccionado
console.log(list2.lastElementChild); // Ver el último hijo del elemento seleccionado
console.log(list2.previousElementSibling); // Ver el hermano anterior del elemento seleccionado
console.log(list2.nextElementSibling); // Ver el hermano siguiente del elemento seleccionado