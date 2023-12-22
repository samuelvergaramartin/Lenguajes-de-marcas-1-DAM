const botonEnviar = document.getElementById('enviar');
const botonBorrar = document.getElementById('borrar');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const select = document.getElementById('select');

botonEnviar.addEventListener('click', function(event) {
    var opt = undefined;
    if(select.value == "opt1") {
        opt = "1";
    }
    if(select.value == "opt2") {
        opt = "2";
    }
    if(select.value == "opt3") {
        opt = "3";
    }
    alert("Formulario enviado: \nCampo 1: " + c1.value + "\nCampo 2: " + c2.value + "\nCampo 3: " + c3.value + "\nOpción seleccionada: " + opt);
  });

botonBorrar.addEventListener('click', function() {
    alert("Formulario cancelado");
})