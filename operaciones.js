
const fs =require('fs');
//import fs from "fs";

const registrar = (nombre, edad, tipo, color, enfermedad)=>{

    // fs.access("citas.json", fs.constants.F_OK, (err) => {
    //     if (err) {
    //       // Do something
    //     }
    //   });

    if (!fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', JSON.stringify([]));
    }

    const citas = fs.readFileSync('citas.json','utf8' );
    const arrCitas= JSON.parse(citas);
    const cita = {nombre: nombre, 
                  edad: edad, 
                  tipo: tipo, 
                  color: color,
                  enfermedad: enfermedad};

    arrCitas.push(cita);

    fs.writeFileSync('citas.json', JSON.stringify(arrCitas));
    
    console.log('La cita ha sido ingresada');
}


const leer = ()=>{

    try {
        const citas = fs.readFileSync('citas.json','utf8' );

        console.log('\nListado de Citas ')
        if(JSON.parse(citas).length >0){
            JSON.parse(citas).forEach(cita => {
                console.log(cita)
            });
        }
        else{
            console.log('Aún no hay citas registradas');
        }
    } catch (error) {
        console.log('El archivo de citas no ha sido creado');
    }
}

module.exports = {registrar, leer};