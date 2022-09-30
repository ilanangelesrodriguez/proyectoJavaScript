//Principales operaciones aritmeticas
let a=3.1;
let b=4.8;

//Suma(+)
console.log(a+b);
//Resta(-)
console.log(a-b);
//Multiplicacion (*)
console.log(a*b);
//Division (/)
console.log(a/b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a);
let as=a.toString();

console.log(as);
console.log(typeof as);

//Redondeo de numeros decimales
let c=3.3;
let d=c*3;

console.log(d);
console.log(typeof d);

// toFixed(x) --> Limita el numero de decimales a x 
console.log(d.toFixed(1));
console.log(typeof d.toFixed(1));

let e=1345.6789;
let f=234794321;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

//toPrecision(x) --> Limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(1));