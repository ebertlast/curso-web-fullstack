console.clear();

//#region 13. Expresiones y Operadores

//#region 1. Comparación
let numero1 = 15;
let numero2 = 15;
const numero3 = 45;
const cadena = "15";
const cadena2 = "25";
const booleano = false; // null, undefined, 0, "", NaN
const booleano2 = "false";

// console.log(typeof(numero1));
// console.log(typeof(cadena));

// console.log(numero1 == numero2); // true
// console.log(numero1 == cadena); // true
// console.log(numero1 === cadena); // false
// console.log(numero1 != cadena) // false
// console.log(numero1 !== cadena) // true
// console.log(numero1 !== numero2) // false
// console.log(numero1 > numero3); // false
// console.log(numero1 < cadena2); // true

// console.log(typeof(cadena2*1)); // number
if (false) {
  console.log(booleano);
  console.log(booleano2 * 1); // 0
  console.log(Boolean(booleano2));

  if (Boolean(booleano2)) {
    console.log("Boleano2 Es verdadero");
  } else {
    console.log("Boleano2 Es falso");
  }

  if (booleano2 === "true") {
    console.log("Boleano2 Es verdadero");
  }
  console.log(numero1 <= numero2) // true
  console.log(numero1 <= cadena) // true
}
//#endregion

//#region 2. Operadores Aritméticos

// console.log(2 % 2); // 0
// console.log(3 % 2); // 1

// console.log( 3 + 2 * 2); // 7

// console.log(2 ** 3); // 8
// console.log(Math.pow(2, 3)); // 8

// console.log(typeof(+"3")) // number
// console.log(typeof(-"3")) // number
// console.log(+"3") // 3
// console.log(-"3") // -3

if (false) {
  let x = numero1++;
  console.log("Valor de x: ", x);
  console.log("Valor de numero1", numero1);

  let y = ++numero2;
  console.log("Valor de y: ", y);
  console.log("Valor de numero2: ", numero2);
}

if (false) {
  let a = numero1--;
  console.log("Valor de a: ", a);
  console.log("Valor de numero1", numero1);

  let b = --numero2;
  console.log("Valor de b: ", b);
  console.log("Valor de numero2: ", numero2);
}

//#endregion

//#region 3. Operadores Lógicos
// AND (&&)
// OR (||)

// console.log(1 === 1 && typeof (1) === "number"); // true
// console.log(1 === '1' || typeof (1) === "number"); // true
if (false) {
  let unidadMedida = null;
  let unidadMedida2 = undefined;
  let cantidad = 24;

  console.log(cantidad, unidadMedida || unidadMedida2 || "UND"); // 24, UND

  if (!unidadMedida) {
    console.log("No existe unidad de medida")
  } else {
    console.log("La unidad de medida es: ", unidadMedida);
  }
}

if (false) {
  let verdadero = true;
  let falso = false;

  console.log(!verdadero); // false
  console.log(!falso); // true
}

if (false) {
  let barraMenu = true;
  for (let i = 0; i < 3; i++) {
    // if (barraMenu) {
    //   barraMenu = false;
    // } else {
    //   barraMenu = true;
    // }
    barraMenu = !barraMenu;
    console.log(barraMenu);
  }
}

let valor1 = 10;
console.log(++valor1);
console.log(++valor1);
valor1 += 30;
console.log(valor1);

let valor2 = "10"
valor2 += 30;
console.log(valor2); 

//#endregion


//#endregion