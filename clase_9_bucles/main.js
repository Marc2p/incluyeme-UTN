/** Clase 9: Bucles e iteraciones */

/*
//While

//Incremento

let i = 0;

while ( i <= 15 ){
    console.log('El valor de i : ', i);
    i = i + 1;
}



//Decremento

let numero = 100;
while (numero > 0 ){
    document.write ("Te queda de saldo ", numero, '<br>')
    numero = numero - 5;
} 

// Do While

let k = 7;
do{
    console.log('El valor de K: ', k);
    k = k + 1;
} while (k < 6);


// Ejercicio práctico 1 

let pasos = 100;
while (pasos > 0) {

    if (pasos == 1) {
        document.write("Solo falta ", pasos, " paso por caminar <br>")
    } else {
        document.write("Solo faltan ", pasos, " pasos por caminar <br>")
    }

    pasos = pasos - 1;
}

//Ciclo FOR
for (let i = 0; i <= 10; i++){
    alert(i)
}

let ingresarNumero = parseInt(prompt('Ingresá un número'));

for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    document.write (ingresarNumero + " X " + i + " = " + resultado, "<br>" )
}

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];


    for ( let i = 0; i < frutas.length; i++){
        let fruta = frutas[i];
        console.log(fruta + ' tiene ' + fruta.length + ' letras')
    }*/



    //Ejercicio
    function sumaTotal(numeros) {
        resultado = 0;
    
        for (let i = 0; i < numeros.length; i++) {
            let num1 = numeros [i][0];
            let num2 = numeros [i][1];
            resultado += num1 * num2;
            }      
            return resultado;
    }
    
    
    let numeroParaSumar = [
        [2, 4], //2*4 = 8
        [4, 7], //4*7 = 28
        [9, 56], //9*56 = 504
        [1, 3] //1*3 = 3
    ]; // suma total de los resultados de las multiplicaciones 543
    
    let sumaNumeros = sumaTotal(numeroParaSumar);
    console.log(sumaNumeros);