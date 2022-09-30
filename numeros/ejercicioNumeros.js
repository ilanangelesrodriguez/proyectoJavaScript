//Ejercicio
/* Crea un archivo JS que contenga las siguientes líneas:
    - Una variable que contenga tu altura en centímetros (entero)*/

let h=165;
console.log(`${h} cm`);

//- Una variable que contenga tu altura en metros (número de coma flotante)
let h1=1.65;
console.log(`${h1} m`);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let w=69.7;
console.log(`${w} kg`);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let nh=h1.toFixed(0);
console.log(nh);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let lh=parseInt(h1);
console.log(lh);

/* - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual 
      al máximo valor que se puede obtener en Javascript.  */
let v=Number.MAX_VALUE;  
let vMax=Number.MAX_VALUE;
console.log(v==vMax);
  