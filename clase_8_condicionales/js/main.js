/**
 * Clase 8: Condicionales
 *  */

// Condicional IF
/*
let numero = 3;

if (numero > 3 ){
    console.log("El numero es mayor a 3");
} else if(numero < 3){
    console.log("El número es menor 3")
}
else{
    console.log("El numero es igual a 3")
}

// Operador condicional ternario

// Evaluamos mayoria de edad con un IF
let edad = 19;

let esMayorEdad = false;

if (edad > 18) {
    esMayorEdad = true;
} else {
    esMayorEdad = false;
}

// Podemos realizar esta operación de manera abreviada utiluzando un operador ternario

let esMayorEdad1 = edad > 18 ? true : false ;
console.log('¿Es mayor de edad? ' + esMayorEdad1);*/

// Ejercicio

// 1. Crear una lista

// let lista []

// 2. PROMPT preguntarle al usuario que desea agregar a la lista

// 3.
/*
if (lista.incluide (??)){
    // Avisar al usuario que su articulo ya está en la lista
} else{
    - agregar el articulo a la lista -> lista.push(articulo)
    - mostrar en consola o con alert los articulos
}




// Resolución

let lista = ["Harina", "Papas", "Jugo", "Manzanas", "Soda"];

let articulo = prompt ("¿Qué artículo desea añadir a la lista?");

if (lista.includes(articulo)){
    alert(articulo + " ya está en la lista");
} else{
    lista.push(articulo);
    alert("La lista es: " + lista);
}

// Switch

let powerRanger = "Zack";
switch (powerRanger) {
    case "Kimberly":
        color = "Rosa";
        break;
    case "Billy":
        color = "Azul";
        break;
    case "Trini":
        color = "Amarillo";
        break;
    case "Jason":
        color = "Rojo";
        break;
    case "Zack":
        color = "Negro";
        break;
    default:
        color = "No sos un Power Ranger";
}

console.log("Su color es " + color);

console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia) {

    case 1:
        dia = "lunes";
        break;
    case 2:
        dia = "martes";
        break;
    case 3:
        dia = "miércoles";
        break;
    case 4:
        dia = "jueves";
        break;
    case 5:
        dia = "viernes";
        break;
    case 6:
        dia = "sábado";
        break;
    default:
        dia = "Domingo";
    break;
}

document.write("El día de hoy es " +dia);

let numeroUsuario = prompt ("Ingresá un número");

if (numeroUsuario > 10){
    document.write("El número ingresado es mayor a 10");
}else if (numeroUsuario <=10){
    document.write("El número ingresado es igual o menor a 10");
} else {
    document.write("Lo ingresado no es un número");
}



(num % 2 == 0 || num % 3 == 0)

*/
// Ejercicio  Numero de la suerte

function  esNumeroDeLaSuerte(num){
    if (num >= 0 && (num % 2 == 0 || num % 3 == 0) && num != 15){
        return true;
    }
    else{
        return false;
    }
}


console.log(esNumeroDeLaSuerte (6))