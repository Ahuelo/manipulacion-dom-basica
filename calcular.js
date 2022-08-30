const input1 = document.getElementById('calculo1');
const input2 = document.getElementById ('calculo2');
const calcular = document.getElementById('btnCalcular');
const p = document.querySelector('p');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#formulario');

//Even Listener para no formularios
//addEventListener siempre acepta 2 parametros(evento y funciones(las creadas por nosotros))
// y es para dejar el codigo del HTML limpio
/* btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    let calculo1 = parseInt(input1.value);
    let calculo2 = parseInt(input2.value);

    const suma = calculo1 + calculo2;

    p.innerText = suma;
}; */


// event listener para forms

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event){
    /* el prevent default evita que la pagina se actualice cuando se usan forms  */
    event.preventDefault();
    let calculo1 = parseInt(input1.value);
    let calculo2 = parseInt(input2.value);

    const suma = calculo1 + calculo2;

    p.innerText = suma;
};
