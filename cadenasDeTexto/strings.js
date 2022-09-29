//Strings (Cadena de caracteres)
let str_cs='Esta es una frase con comillas simples';
let str_cd="Esta es una frase con comillas dobles";

console.log(str_cd);
console.log(str_cs);

let str_comillas="Luego del partido dije: \"Este equipo pinta bien\"";
let str_comillas_2='Luego del partido dije: \'Este equipo pinta bien\'';
let str_comillas_simple='Luego del partido dije: "Este equipo pinta bien"'
let str_comillas_dobles="Luego del partido dije: 'Este equipo pinta bien'"

console.log(str_comillas);
console.log(str_comillas_2);
console.log(str_comillas_simple);
console.log(str_comillas_dobles);

////Comillas invertidas (Backticks)
//**Permite introducir variables dentro del texto
let str_backticks=`Esto es un strings con backticks`;

console.log(str_backticks);

let nombre="Ilan";
let saludo=`Hola ${nombre}, Bienvenido`;
console.log(saludo)

//**Podemos crear plantillas HTML
let plantilla=`
<html>
    <h1>Pagina Web de ${nombre}</h1>
    <p>El parrafo de presentacion</p>
</html>
`
console.log(plantilla);

////Introduccion de variables en HTML
let libros=["Papers Towns","Moby dick","Las ventajas de ser invisible"]