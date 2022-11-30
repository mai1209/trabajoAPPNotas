const path = require ('node:path');
const fs = require ('fs');
const { json } = require('stream/consumers');
const rutaAlJson = (path.resolve(__dirname, 'data/tareas.json'));
const tareas = fs.readFileSync(rutaAlJson,{encoding: 'utf-8'});
let tarea = JSON.parse (tareas);
const accion = process.argv[2];
console.log(process.argv[2]);



if (accion == "listar"){
    listar ();
}else if (accion == undefined){
     console.log ("Atencion - tienes que pasarme una accion");
}else {
    console.log ("No entiendo que quieres hacer");
    console.log ("Las acciones disponibles son: listar")
}


function listar () {
    console.log('Listado de tareas');
    console.log('-------------------------------------------------------------');
    tarea.forEach((element, i) => {
        console.log(`${i + 1}. ${element.titulo} - ${element.estado}`);
      });
  }



