//Metodos para Strings (1/3)
//mas usados con cadenas de caracteres

//obtener longitud de un string
let str="Es un string"
let ln=str.length
console.log(str.length); //Atributo de la variable, es una propiedad

//Obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str=str.slice(0,2)
console.log(slice_str)

let substring_str=str.substring(0,2)
console.log(substring_str)

let substr_str=str.substr(1,2)
//substr() toma posicion inicial y numero de posiciones a recorrer
console.log(substr_str)

//Reemplazar parte del contenido
let cadena="Hello, i'm Ilan"
console.log(cadena)

console.log(cadena.replace('Ilan', 'student'))

//alt+z : Pasa por abajo el texto
let texto="Ethereum is the World Computer, the future's internet-native global settlement layer. The EVM is the core of Ethereum; it provides the world in which settlement and decentralized computation happens"

//Solo reemplaza la primera instancia
console.log(texto.replace(" the"," el"))
//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto.replace(/the/g,"el"))
