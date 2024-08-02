
console.log('logica conectada');

const usuario = 'alith'
const contraseña = '12345'

function pruebaBoton() {

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value

    if(usuario==user && contraseña==pw){
        window.open('calculadora.html')
     console.log('ingreso correcto');

     } else {
     console.log('contraseña incorrecta');
        
     }

}