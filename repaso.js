// Repaso Variables

// let n1 = Number(prompt("Ingrese el primer numero"));
// let n2 = Number(prompt("Ingrese en segundo Numero"));

// let total = n1 + n2;

// console.log(total);

// alert("Hola Alvaro tu suma es " + total);

// Un sistema para una app web que puedan sacar entradas para un recital
// que tiene que ser mayor de edad ---> 18 o mas

// let edad = Number(prompt("Ingresa tu edad"));

// if (edad >= 18) {
//   console.log("Gracias por su compra");
// } else {
//   console.log("Venta valida solo para mayores de edad");
// }

// Indicar si esta Logeado o no para tener acceso.

// let estaLogeado = false;

// if (estaLogeado) {
//     true
//   console.log("Tiene acceso");
// } else {
//   console.log("No tiene acceso");
// }

// Control de acceso dependiendo de la Edad.

// // 18 o + ---> puedo entrar
// // 13 o +  ---> puedo entrar con un adulto
// // -13 ---> no puedo entrar

// let edad = Number(prompt("Ingresa tu edad"));

// if (edad >= 18) {
//   console.log("Puede entrar");
// } else if (edad >= 13) {
//   console.log("Puede entrar con un adulto");
// } else {
//   console.log("No puedo entrar");
// }

// OPERADORES LOGICOS ---> && - ||
// 18 o + ---> puedo entrar
// -18 y vengo con un adulto ---> puedo entrar con un adulto
// -18 y no vengo con un adulto ---> no puedo entrar

// let edad = 17;
// let siVieneConUnAdulto = true;

// if (edad >= 18) {
//   console.log("Puede entrar");
// } else if (edad < 18 && siVieneConUnAdulto) {
//   console.log("Puede entrar");
// } else {
//   console.log("No puede entrar");
// }

// and ---> && ---> evaluar que ambas condiciones se cumplan
// or ---> ||  ---> evalauar que por lo menos una condicion se cumpla

// console.log(true || true || false || true);

// el operador and se queda con el primer falsy o con el ultimo truthy

// let x = true && true && "Alvaro" && true && "" && "juancito";

// console.log(x);

// el operador or se queda con el primer truthy o con el ultimo falsy
// let y = false || 0 || 0 || "" || false || 12;

// console.log(y);

// mostrar por consola, el dia correspondiente
// 1 --> lunes
// 2 --> martes

// let dia = prompt("Ingrese el día de la semana");

// Metodo 1 para el desarrollo

// if (dia === "1") {
//   console.log("Lunes");
// } else if (dia === "2") {
//   console.log("Martes");
// } else if (dia === "3") {
//   console.log("Miercoles");
// } else if (dia === "4") {
//   console.log("Jueves");
// } else if (dia === "5") {
//   console.log("Viernes");
// } else if (dia === "6") {
//   console.log("Sábado");
// } else if (dia === "7") {
//   console.log("Domingo");
// } else {
//   console.log("Número no valido");
// }

// Metodo 2 para el desarrollo - switch case

// switch (dia) {
//   case "1":
//     console.log("Lunes");
//     break;
//   case "2":
//     console.log("Martes");
//     break;
//   case "3":
//     console.log("Miercoles");
//     break;
//   case "4":
//     console.log("Jueves");
//     break;
//   case "5":
//     console.log("Viernes");
//     break;
//   case "6":
//     console.log("Sabado");
//     break;
//   case "7":
//     console.log("Domingo");
//     break;
//   default:
//     console.log("El numero no es valido");
// }

// let edad = Number(prompt("Ingresa tu edad"));
// edad >= "18" ? console.log("Mayor") : console.log("Menor");

// Eleccion de Pan y extras para cadena de alimentos
// si elige pan comun --> le sumo 2
// si elige pan arabe ---> le sumamos 5
// extra carne 10
// extra pollo 5
// extra verdura 2
// extra queso x2 ---> 10
// extra panceta x2 ---> 10

let sandwich = 100;
let pan = prompt("Ingresa tu pan");
let extra = prompt("Ingresa tu extra");

if (pan === "comun" || pan === "arabe") {
  pan === "comun" ? (sandwich += 2) : (sandwich += 5);
} else {
  alert("pan seleccionado incorrecto");
}

switch (extra) {
  case "carne":
  case "queso":
  case "panceta":
    sandwich += 10;
    break;
  case "pollo":
    sandwich += 10;
    break;
  case "verdura":
    sandwich += 2;
    break;
  default:
    alert("extra equivocado");
}

console.log(sandwich);
