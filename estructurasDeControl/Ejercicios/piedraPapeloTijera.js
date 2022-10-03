console.log("Piedra, Papel o Tijera");
var valor1=prompt("Jugador 1","Introduce tu eleccion");
var valor2=prompt("Jugador 2","Introduce tu eleccion");
console.log(valor);
if(valor1=="piedra"){
    if(valor2=="papel"){
        console.log("Gana el jugador 2")
    } else if (valor2=="tijera"){
        console.log("Gana el jugador 1")
    } else {
        console.log("Empate")
    }
} else if (valor1=="papel"){
    if(valor2=="tijera"){
        console.log("Gana el jugador 2")
    } else if(valor2=="piedra"){
        console.log("Gana el jugador 1")
    } else {
        console.log("Empate");
    }
} else if (valor1=="tijera"){
    if(valor2=="piedra"){
        console.log("Gana el jugador 2")
    } else if(valor2=="papel"){
        console.log("Gana el jugador 1")
    } else {
        console.log("Empate");
    }
} else {
    console.log("Error !!")
}