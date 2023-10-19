const botonEnviar = document.getElementById('enviar');
const botonBorrar = document.getElementById('borrar');
const nombreyapellidos = document.getElementById('c1');
const correo = document.getElementById('c2');
const dni = document.getElementById('c3');
const select = document.getElementById('select');
import { nameChecker } from "../functions/nameChecker.mjs";
import { gmailChecker } from "../functions/gmailChecker.mjs";
import { dniChecker } from "../functions/dniChecker.mjs";

botonEnviar.addEventListener('click', function(event) {
    const errorNameCheckerMessage = "ERROR: El campo 'Nombre y Apellidos' está incompleto.";
    const errorGmailMessage = "ERROR: No se ha introducido una dirección de Correo electrónico válida en el campo 'Correo electrónico'.";
    const errorDNIMessage = "ERROR: No se ha introducido un número de DNI válido en el campo 'DNI'.";
    
    const nameCheckerStatusCode = nameChecker(nombreyapellidos.value);
    const gmailCheckerStatusCode = gmailChecker(correo.value);
    const dniCheckerStatusCode = dniChecker(dni.value);
    if(nameCheckerStatusCode == 400) return alert(errorNameCheckerMessage);
    if(nameCheckerStatusCode == 200) void 0;
    if(gmailCheckerStatusCode == 400) return alert(errorGmailMessage);
    if(gmailCheckerStatusCode == 200) void 0;
    if(dniCheckerStatusCode == 400) return alert(errorDNIMessage);
    if(dniCheckerStatusCode == 200) void 0;
    var opt = undefined;
    if(select.value == "opt1") {
        opt = "Soy profesor";
    }
    if(select.value == "opt2") {
        opt = "Soy alumno";
    }
    if(select.value == "opt3") {
        opt = "Ninguna de las anteriores";
    }
    alert("Formulario enviado correctamente: \n\nNombre y Apellidos: " + nombreyapellidos.value + "\nCorreo electrónico: " + correo.value + "\nDNI: " + dni.value + "\nOpción seleccionada: " + opt);
  });

botonBorrar.addEventListener('click', function() {
    alert("Formulario cancelado");
})