const {registrar, leer} = require('./operaciones.js')
//import {registrar} from './operaciones.js';

const arg = process.argv.slice(2);

const [accion, nombre, edad, tipo, color, enfermedad] = arg;

switch (accion) {
    case 'registrar':
        registrar(nombre,edad,tipo,color,enfermedad);
        break;
    case 'leer':
        leer();
        break;
    default:
        console.log('\nLa accion ingresada no esta disponible, por ahora, solo puede utilizar: registrar y leer\n');
        break;
}



//registrar('Mila','5','perro','plomo','vomitos');
//registrar('nombre','6','gato','blanco','diarrea');

