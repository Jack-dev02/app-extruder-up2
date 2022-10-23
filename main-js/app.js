//variables unidas a las etiquetas html
//let entrar= document.querySelector('#search-input');
let bt= document.querySelector('.buscar');
const producto1 = document.querySelector('#search-card-2');
const tamaño1 = document.querySelector('#search-card-4');
const peso1 = document.querySelector('#search-card-6');
const espesor1 = document.querySelector('#search-card-8');

let clase = document.querySelector('.error1');

// variables ocultar clase de lista de keys
//let disable = document.querySelector('#disable');
//let enable = document.querySelector();


//variables unidas a las etiquetas html and boton
bt.addEventListener('click', search);

//variables unidas a las etiquetas html and input
//entrar.value;

// funcion que convierte de minusculas a mayusculas vinculado al input
function mayus(e) {
  e.value = e.value.toUpperCase();
}

//variable unida al evento de teclado tecla enter
const enter = document.querySelector("#search-input");
const enter_error = document.getElementsByClassName("search-error");

//*****************************************************************/

//evento que evalua el evento de teclado
enter.addEventListener("keydown", (e) => {
  // condicion que evalua si se presiono la tecla enter
  if(e.keyCode === 13) {
    //funcion que ejecutara si es presionada la tecla enter
    search();
  }
})

//funcion que ejecutara el la validacion de las datos del producto
function search(){
  //let buscar = prompt('Buscar un dato: ');
  list.forEach(rollos => {
    if(enter.value === rollos.producto){
      /*alert(rollos.producto +' '+ 'peso ' + rollos.peso + ' ' + 'espesor' + ' ' + rollos.espesor);
      let producto = (rollos.producto+' '+ 'peso ' + rollos.peso + ' ' + 'espesor' + ' ' + rollos.espesor);*/
      let producto = (rollos.producto);
      let tamaño = (rollos.medida);
      let pes0 = (rollos.peso);
      let espes0r = (rollos.espesor);
      producto1.innerHTML = producto;
      tamaño1.innerHTML = tamaño;
      peso1.innerHTML = pes0;
      espesor1.innerHTML = espes0r;
    } if (enter.value === NaN) {
      clase.classList.remove('error1');
      clase.classList.add('error');
    } else {
      
    }
 });
};


  //clase.classList.remove('error1');
  //clase.classList.add('error');


//mobil




