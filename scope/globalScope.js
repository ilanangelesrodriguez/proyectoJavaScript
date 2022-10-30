// variables
var a; //declarando variable a
var b="b"; //declaramos y asignamos
b="bb"; //reasignar
var a='a'; //redeclaracion

//global scope
var fruit='apple';
function bestFruit(){
    console.log(fruit);
}
bestFruit()

function countries() {
    country='Peru';
    console.log(country);
}

countries();
console.log(country);