var variable;
let variablelet;

//Constante
const constante="Este es una constante";

var a="Hola";

console.log(a);
console.log(constante);

//constante="See you soon :v";
/*La constante se declara solo una vez*/
console.log(constante);

let b="Hello";
console.log(b);
b="Bye";
console.log(b);

var variable="Esta es una variable";
for(var i=0; i<3; i++){
    let variable="variable 2.0";
}
console.log(variable);

console.log(typeof constante)