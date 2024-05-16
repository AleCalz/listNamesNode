/* eslint-disable */

const prompt = require('prompt-sync')()

console.log("Esto es una lista de nombres");

let salida = 0
let nombre = ""
let arrNom = []

//List
while (salida != 1) {
    nombre = (prompt("Ingresa un nombre: "))
    if(!isNaN(nombre)){
        console.log("No se permiten numeros ")
        process.exit(0)
    } 
    
    arrNom.push(nombre)
    salida = prompt("presiona 1 para terminar, 0 para continuar: ");
}

//LongName
const calcularNamL = arrNom => {
    let nomL = arrNom[0]

    for(let longNom of arrNom){
      //comparamos longitud
      if( longNom.length > nomL.length ){
        nomL = longNom;
      }
    }
  return nomL;  
}

//ShortName
const calcularNamC = arrNom => {
    let nomC = arrNom[0] 

    for(let longNom of arrNom){
      if(longNom.length < nomC.length){
        nomC = longNom;
      }
    }
  return nomC;
}
  
const nameRepeat = arrNom => new Set(arrNom).size < arrNom.length  


  console.log("\nEl nombre mas corto es: ",calcularNamC(arrNom));
  console.log("\nEl nombre mas largo es: ",calcularNamL(arrNom));
  console.log("\nTiene nombres repetidos: ",nameRepeat(arrNom));
  console.log("\nEl total de nombres fue : ", arrNom.length);

console.log(arrNom);

