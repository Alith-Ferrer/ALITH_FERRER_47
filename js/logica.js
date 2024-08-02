
console.log('logica conectada');

const usuario = 'alith'
const contraseña = '12345'
const frutas = ['Manzana', 'Limon', 'Pera']

function pruebaBoton() {

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value

    if (usuario == user && contraseña == pw) {
        window.open('calculadora.html')
        console.log('ingreso correcto');

    } else {
        console.log('contraseña incorrecta');

    }

}

function imprimirArreglo() {

    let posicion = document.getElementById('posicionVerctor').value
    if (posicion >= frutas.length) {

        console.log('posicion no valida');
        limpiar()

    } else {
        console.log(frutas[posicion]);
    }

}
function limpiar() {
    document.getElementById('posicionVerctor').value = ''
    document.getElementById('posicionVerctor').focus() 
}

function agregarFruta() {
    let nombreFruta = document.getElementById('nombreFruta').value.toLocaleUpperCase()
    nombreFruta=nombreFruta.trim()
    if (nombreFruta.trim()!==''){
        frutas.push(nombreFruta)
        console.log(frutas);
        console.log(`Se agrego la fruta" ${nombreFruta}`);
        document.getElementById('nombreFruta').focus()
        document.getElementById('nombreFruta').value = ''

    } else {
        console.log('Nombre no valido');
    }
}

function eliminarFruta() {
    console.log('incorrecta');
} 