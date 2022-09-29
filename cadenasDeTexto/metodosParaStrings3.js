//Metodos para Strings (3/3)
//https://regexr.com
//Expresiones regulares: Es una forma de hacer una busqueda de forma avanzada
let texto="Ethereum is the World Computer, the future's internet-native global settlement layer. The EVM is the core of Ethereum; it provides the world in which settlement and decentralized computation happens."

//match: usa una expresion regular dentro del texto elegido
console.log(texto.match(/the/g))

//Verifica si existen tales palabras
console.log(texto.includes("the"))

//Saber si un texto empieza con una palabra
console.log(texto.startsWith("Ethereum"))
//Saber si un texto termina con otra palabra
console.log(texto.endsWith("."))