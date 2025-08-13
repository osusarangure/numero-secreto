let numeroSecreto = 0;
let intentos = 0;
let arregloNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('numeroDeUsuario: ' + numeroDeUsuario);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(arregloNumeros);

    //si ya pasamos por TODOS los números posibles
    if (arregloNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya fueron utilizados TODOS los números posibles! ');

    } else {

        //si el número generado está incluido en la lista
        if (arregloNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            arregloNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    console.log('numeroSecreto: ' + numeroSecreto);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //inicializar condiciones
    condicionesIniciales();

    //Deshabilitar el botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
