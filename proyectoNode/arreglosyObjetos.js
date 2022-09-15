//listas, arreglo o array
const lista=["FC Barcelona","AC Milan","B. Dortmund","Chelsea FC"];
const lista1= new Array("J. Kounde","R. Araujo","E. Garcia","M. Alonso");
const lista2= new Array(3);
lista2[1]="Segundo elemento"
const lista4=[lista, lista1, lista2]

console.log(lista[1]);
console.log(lista1[0]);
console.log(lista2);
console.log(lista4)

//Alineacion del FC Barcelona
const arqueros=["M. Ter Stegen", "I. Peña", "A. Tenas"];
const defensa=["J. Kounde","R. Araujo", "E. Garcia","A. Christensen", "M. Alonso", "A. Balde"];
const medios=["S. Busquets","Pedri","Gavi","F. Kessie","F. De Jong"];
const delanteros=["R. Lewandowski","Raphinha", "F. Torres","A. Fati","O. Dembélé","M. Depay"];
const alineacion=[arqueros[0],defensa[0],defensa[1],defensa[3],defensa[5],medios[0],medios[1],medios[2],delanteros[4],delanteros[0],delanteros[1]]

console.log(alineacion)

//Objetos
//Son representaciones de datos de objetos de la vida real;
const estadio={
    nombre:"Camp Nou",
    capacidad:90000,
    partner:"Rakuten",
    spotifyPartner:true,
    equipos:[lista],
    competiciones:{
        equipos:2,
        torneo:"UEFA Champions League",
    }
}
estadio.remodelacion=2022;
estadio.partner="Spotify";
console.log(estadio.partner);
console.log(estadio.competiciones.torneo);

//Fechas
//Librerias de apoyo moment.js
const fecha=new Date();
console.log(fecha);

const fechamilis=new Date(10);
console.log(fechamilis)

const fechaCadena= new Date("march 25 2022");
console.log(fechaCadena)

const fechaValores= new Date(2022,0,15)
console.log(fechaValores)

const dia=fecha.getDate();
const mes=fecha.getMonth() + 1;
const año=fecha.getFullYear();

console.log(dia,mes,año)
