'use strict'

//si se quiere elegir un dato del HTML por la etiqueta, es el siguiente
const h1 = document.querySelector('h1');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);


console.log({
    h1,
    parrafito,
    pid,
    input
});

//Ingresa modificaciones de texto, es mejor el text, que el html, ya que html deja aperturar al código
h1.innerText = 'patito';
h1.innerHTML = 'patito';

//----------------------------------------------------------------------------------
//Obtiene la clase de la etiqueta que se busca
/* console.log(h1.getAttribute('class')); */

//----------------------------------------------------------------------------------

//modifica el atributo deseado, primero se busca el atributo, despues cambia el contenido, por eso rojo va de ultimas
/* h1.setAttribute('class', 'rojo'); */

//----------------------------------------------------------------------------------
//Modificador de clases
h1.classList.add("rojoOscuro");
h1.classList.remove("verde");

//modificacion de valores en el input
input.value = 425;


//crear un elemento en el HTML
const img = document.createElement('img');
img.setAttribute('src', 'https://static.wikia.nocookie.net/doblaje/images/6/6f/Viego.png/revision/latest?cb=20210913061524&path-prefix=es');
console.log(img);

//agrega cosas sin borrar nada del HTML
pid.append(img);