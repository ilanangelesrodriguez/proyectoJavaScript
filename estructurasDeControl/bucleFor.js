//Bucles for
/*for(inicializacion; condicion; actualizacion){
    //esto es el bucle
}*/
/*Actualizacion
i=i+1
i+=1
i++
*/
for(let i=0;i<10;i++){
    //Hola
    console.log(i)
}
const lista=[7,3,5,9,6,2,4,1,8,6];
var x=lista.length;
console.log(x);
for(let i=0;i<x;i=i+1){
    console.log(lista[i]*2)
}

//Estructura for of
for(let valor of lista){
    console.log(valor)
}

//Estructura forEach
lista.forEach(valor=>{
    console.log(valor)
})

//Estructura for in
let persona={
    nombres:"Ilan Nestor",
    apellidos:"Angeles Rodriguez",
    edad:20,
    isDeveloper:true
}
for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}