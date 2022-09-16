//break y continue
//labels
//Nos permite nombrar los bucle for o while

let unidades=0;
let decenas=0;

bucleDecenas: while(true){
    bucleUnidades: while(true){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if(unidades===10){
            unidades=0
            break
        }
    }
    decenas++
    if (decenas===2){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        break
    }
}
console.log("Esta terminado")