/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
//Mi nombre

const nombre=["Ilan Nestor"];
const apellidos=["Angeles Rodriguez"];
const datos=[nombre[0], apellidos[0]];

console.log("Mis nombres son " +datos);

let edad=[20];
console.log("Mi edad es: "+edad[0]+" años");

console.log("¿Eres desarrollador?");
const desarrollador=true;
console.log("El es desarrollador: "+desarrollador);

//fecha de nacimiento
const nacimiento=new Date('August 12, 2002');

const nacimiento1=new Date(2002,07,12);
//const año=fecha.getFullYear(2003);

console.log(nacimiento);
console.log(nacimiento1);

//Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const favoriteBook={
    titulo:"Implementación de un token y billetera digital como solución a la disponibilidad de pagos en la EPISI",
    autor:"Ilan Nestor Angeles Rodriguez",
    fecha:new Date(2022,08,06),
    url:"ilanangelesrodriguez.com",
}
console.log(favoriteBook.titulo);
console.log(favoriteBook.fecha);

const lista = {
    nombre:"Ilan",
    edad:20,
    desarrollador: true,
    fechaNacimiento: new Date(2002,07,12),
    book:{ 
        titulo:"Implementación de un token y billetera digital como solución a la disponibilidad de pagos en la EPISI",
        autor:"Ilan Nestor Angeles Rodriguez",
        fecha:new Date(2022,08,06),
        url:"ilanangelesrodriguez.com"
      }
    };
    console.log(lista.book.fecha);
