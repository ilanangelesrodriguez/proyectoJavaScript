//Bifurcaciones if/else
let saldo=1000;
let retiro=500;

if(retiro<saldo){
    console.log("Se puede retirar")
}
if(retiro<saldo){
    console.log("Se puede retirar")
} else {
    console.log("No se puede retirar")
}

//Ejemplo con opciones
let nota=5;

if (nota===5){
    console.log("Felicitaciones has obtenido la mayor calificacion")
} else if (nota===4){
    console.log("Muy bien")
} else if (nota===3){
    console.log("Aprobaste, pero sigue intentado")
} else if (nota===2){
    console.log("Deberias esforzarte mas")
} else if (nota===1){
    console.log("Muy mal")
} else {
    console.log("Error, introduce el numero correcto")
}