En este desafío pondremos a prueba nuestros primeros conocimientos de Node Js
desarrollando una pequeña aplicación backend que registre las horas de atención en una
veterinaria.

Descripción
Necesitarás crear 3 archivos:
<ul>
  <li>index.js: Archivo principal que deberá ser ejecutado para interactuar con la aplicación. En este archivo se deberán importar las operaciones que creen y lean las citas de atención en la veterinaria.</li>
  <li>operaciones.js: En este archivo se deberán crear 2 funciones para:</li>  
  <ul>
    <li>Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:</li>
    <ul>
      <li>Nombre del animal</li>
      <li>Edad</li>
      <li>Tipo de animal</li>
      <li>Color del animal</li>
      <li>Enfermedad</li>
    </ul>
    <li>Leer: Mostrar por consola todas las citas registradas.</li>
  </ul>
  <li>citas.json: Deberá ser un json que simplemente guarde un arreglo vacío.</li>
</ul>

Para interactuar con el archivo index.js se deberán pasar argumentos por línea de comando
especificando qué función se desea ejecutar, por ejemplo:

node index.js registrar Benito "2 años" perro blanco vomitos<br>
node index.js leer

Se deberá crear condiciones que evalúen, según el argumento correspondiente, qué función
ejecutar:<br>
if(operacion === "registrar"){<br>
<span style='margin-left: 20px;'>    registrar(nombre, edad, animal, color, enfermedad)</span><br>
}<br>
if(operacion === "leer"){<br>
leer()<br>
}
