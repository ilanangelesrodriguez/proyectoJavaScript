//Metodos para Strings (2/3)

let input="FC Barcelona"
let db="fc barcelona"

// toLowerCase() - toUpperCase()
console.log(input.toUpperCase())
console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1="Es la primera cadena."
let str_2="Es la segunda cadena."

console.log(str_1.concat(" ",str_2))
console.log(str_1+" "+str_2)

console.log(`${str_1} ${str_2}`) //Comillas invertidas

//Eliminar espacio al final
let str_3="            String con espacios al final.            "
console.log(str_3.length)
//trim() : elimina espacios del principio y final
console.log(str_3.trim().length)
//trimStart() : elimina espacios del principio
console.log(str_3.trimStart().length)
//trimEnd() : elimina espacios del final
console.log(str_3.trimEnd().length)

//Obtener el caracter de cierta posicion
let str_4="Este es el cuarto string"
console.log(str_4.charAt(1))
console.log(str_4[1])

//Obtener la posicion de una palabra dentro de strings.....indexof
let str_5="Hola soy Ilan, soy fanatico del FC Barcelona. My name is Ilan Nestor"
console.log(str_5.indexOf("Ilan"))
//Si no encuentra el caracter devuelve -1
console.log(str_5.charAt(9))

//Posicion de la ultima instancia de un caracter
console.log(str_5.lastIndexOf("Ilan"))

