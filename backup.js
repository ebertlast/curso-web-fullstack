console.clear();

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

//#region 1. Foreach
if (false) {

  // for (let i = 0; i < arreglo.length; i++) {
  //   const element = arreglo[i];
  //   console.log(element);
  // }

  arreglo.forEach(numero => {
    console.log(numero)
  });
}
//#endregion

//#region 2. Concatenacion de Arreglos -- concat
if (false) {
  let arr3 = arr1.concat(arr2);
  console.log("🚀 ~ file: index.js ~ line 22 ~ arr3", arr3.concat([11, 12, 13, 14, 15]));
}
//#endregion

//#region 3. Union de Arreglos -- join
if (false) {
  let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(abc.join(", "));
}
//#endregion

//#region 4. Busqueda de elementos en un arreglo -- indexOf
if (false) {
  const nombres = ["Jose", "Menkar", "Ebert", "Kena"]
  const posicion = nombres.indexOf("Jose");
  if (posicion > -1) {
    console.log("🚀 ~ file: index.js ~ line 37 ~ posicion", posicion)
  } else {
    console.log("No se encontro el elemento")
  }
}
//#endregion

//#region 5. Agregar elementos al final de un arreglo -- push
if (false) {
  const nombres = ["Jose", "Menkar", "Ebert", "Kena"]
  nombres.push("Juan");
  nombres.push(["Pedro", "Pablo", "Juan"]);
  nombres.push({ pnombre: "Juan", snombre: "Perez" });
  console.log("🚀 ~ file: index.js ~ line 49 ~ nombres", nombres)
}
//#endregion

//#region 6. Eliminar el ultimo elemento de un arreglo -- pop
if (false) {
  console.log('Array Original', arr1)
  let ultimoElemento = arr1.pop();
  console.log('Arreglo luego de eliminar el ultimo elemento: ', arr1)
  console.log('Elemento eliminado: ', ultimoElemento)
}
//#endregion

//#region 7. Eliminar el primer elemento de un arreglo -- shift
if (false) {
  console.log('Array Original', arr1)
  let primerElemento = arr1.shift();
  console.log('Arreglo luego de eliminar el primer elemento: ', arr1)
  console.log('Elemento eliminado: ', primerElemento)
}
//#endregion

//#region 8. Agregar elementos al inicio de un arreglo -- unshift
if (false) {
  console.log('Array Original', arr1)
  // Agrego los elementos al inicio del arreglo
  // arr1.unshift(0);
  // arr1.unshift(-1);
  // arr1.unshift(-2);
  arr1.unshift(-2, -1, 0);
  console.log('Arreglo luego de agregar un elemento al inicio: ', arr1)
  // arr1.forEach(numero => {
  //   console.log(numero)
  // });
}
//#endregion

//#region 9. Eliminar elementos de un arreglo -- splice
if (false) {
  console.log('Array Original', arr1)
  let otroArreglo = [101, 102, 103, 104, 105, 106];
  let elementosEliminados = arr1.splice(0, arr1.length, ...otroArreglo);

  console.log('Elementos Eliminados', elementosEliminados);
  console.log('Arreglo luego de eliminar elementos: ', arr1)
}
//#endregion

//#region 10. Flat -- Aplanar un arreglo
if (false) {
  let otroArreglo = [101, 102, 103, 104, 105, 106];
  otroArreglo.push([107, 108, 109, 110, 111, 112]);
  arr1.push(otroArreglo);
  console.log(arr1);
  console.log(arr1.flat(2));
}
//#endregion

//#region 11. Filtrar elementos de un arreglo -- filter
if (false) {
  console.clear();
  const admisiones = [
    {
      "NOADMISION": "0100555067",
      "FECHA": "2022-09-08T20:12:00.000Z",
      "NOAUTORIZACION": null,
      "CONTINUACION": "",
      "DOCUMENTO": "DNI 45681345",
      "NOMBREAFI": "SUCLUPE  GUEVARA VAN   CARDDY",
      "RAZONSOCIAL": "RIMAC S.A. ENTIDAD PRESTADORA DE SALUD",
      "SEXO": "Masculino",
      "EDAD": "34 AÑOS",
      "PLANHADM": "PAQ040 - OMT - ORIENTACION MEDICA TELEFONICA",
      "IDPLAN": "PAQ040",
      "DESCPLAN": "OMT - ORIENTACION MEDICA TELEFONICA",
      "CERRADA": 2,
      "FACTURABLE": 1,
      "FACTURADA": 0,
      "PREADMISION": null,
      "CLASENOPROC": null,
      "DESCLASENOPROC": "",
      "IDKPAGE": null,
      "ESTADO": null,
      "VALOR": null,
      "DESCOPAGO": "",
      "DIASPRORROGA": null,
      "BOLETA": "No",
      "PATOLOGIAS": null
    },
    {
      "NOADMISION": "0100555066",
      "FECHA": "2022-09-08T20:11:00.000Z",
      "NOAUTORIZACION": null,
      "CONTINUACION": "",
      "DOCUMENTO": "DNI 09798418",
      "NOMBREAFI": "RIVERA  RIVERA  BERNARDO   GUSTAVO ",
      "RAZONSOCIAL": "RIMAC S.A. ENTIDAD PRESTADORA DE SALUD",
      "SEXO": "Masculino",
      "EDAD": "50 AÑOS",
      "PLANHADM": "COVID - SEGUIMIENTO COVID-19",
      "IDPLAN": "COVID",
      "DESCPLAN": "SEGUIMIENTO COVID-19",
      "CERRADA": 0,
      "FACTURABLE": 1,
      "FACTURADA": 0,
      "PREADMISION": null,
      "CLASENOPROC": null,
      "DESCLASENOPROC": "",
      "IDKPAGE": null,
      "ESTADO": null,
      "VALOR": null,
      "DESCOPAGO": "",
      "DIASPRORROGA": null,
      "BOLETA": "No",
      "PATOLOGIAS": null
    },
    {
      "NOADMISION": "0100555065",
      "FECHA": "2022-09-08T19:59:00.000Z",
      "NOAUTORIZACION": null,
      "CONTINUACION": "",
      "DOCUMENTO": "DNI 44652925",
      "NOMBREAFI": "JULCA GUERRA ELA MARALY",
      "RAZONSOCIAL": "EXPERTTA SALUD SAC",
      "SEXO": "Femenino",
      "EDAD": "35 AÑOS",
      "PLANHADM": "PAQ050 - PLAN COLABORADOR EXPERTTA",
      "IDPLAN": "PAQ050",
      "DESCPLAN": "PLAN COLABORADOR EXPERTTA",
      "CERRADA": 4,
      "FACTURABLE": 1,
      "FACTURADA": 0,
      "PREADMISION": null,
      "CLASENOPROC": null,
      "DESCLASENOPROC": "",
      "IDKPAGE": null,
      "ESTADO": null,
      "VALOR": null,
      "DESCOPAGO": "",
      "DIASPRORROGA": null,
      "BOLETA": "No",
      "PATOLOGIAS": null
    },
    {
      "NOADMISION": "0100555063",
      "FECHA": "2022-09-08T19:58:00.000Z",
      "NOAUTORIZACION": null,
      "CONTINUACION": "",
      "DOCUMENTO": "DNI 44652925",
      "NOMBREAFI": "JULCA BURGA ELA  MARALY",
      "RAZONSOCIAL": "EXPERTTA SALUD SAC",
      "SEXO": "Femenino",
      "EDAD": "35 AÑOS",
      "PLANHADM": "PAR001 - PARTICULARES",
      "IDPLAN": "PAR001",
      "DESCPLAN": "PARTICULARES",
      "CERRADA": 1,
      "FACTURABLE": 0,
      "FACTURADA": 0,
      "PREADMISION": null,
      "CLASENOPROC": "600",
      "DESCLASENOPROC": "",
      "IDKPAGE": null,
      "ESTADO": null,
      "VALOR": null,
      "DESCOPAGO": "",
      "DIASPRORROGA": null,
      "BOLETA": "No",
      "PATOLOGIAS": null
    },
    {
      "NOADMISION": "0100555064",
      "FECHA": "2022-09-08T19:58:00.000Z",
      "NOAUTORIZACION": null,
      "CONTINUACION": "",
      "DOCUMENTO": "DNI 40724296",
      "NOMBREAFI": "GUERRA  ROJAS ROBERTO CARLOS",
      "RAZONSOCIAL": "RIMAC S.A. ENTIDAD PRESTADORA DE SALUD",
      "SEXO": "Masculino",
      "EDAD": "42 AÑOS",
      "PLANHADM": "COVID - SEGUIMIENTO COVID-19",
      "IDPLAN": "COVID",
      "DESCPLAN": "SEGUIMIENTO COVID-19",
      "CERRADA": 0,
      "FACTURABLE": 1,
      "FACTURADA": 0,
      "PREADMISION": null,
      "CLASENOPROC": null,
      "DESCLASENOPROC": "",
      "IDKPAGE": null,
      "ESTADO": null,
      "VALOR": null,
      "DESCOPAGO": "",
      "DIASPRORROGA": null,
      "BOLETA": "No",
      "PATOLOGIAS": null
    }
  ]
  let textoABuscar = "GUERRA ROBERTO"

  let cadenas = textoABuscar.split(" ")

  // return console.log(cadenas)

  let admisionesEncontradas = []

  for (let i = 0; i < cadenas.length; i++) {
    const cadena = cadenas[i];

    if (i === 0) {
      admisionesEncontradas = admisiones.filter(admision => {
        return admision.NOMBREAFI.toUpperCase().includes(cadena.toUpperCase())
      })
    } else {
      admisionesEncontradas = admisionesEncontradas.filter(admision => {
        return admision.NOMBREAFI.toUpperCase().includes(cadena.toUpperCase())
      })
    }

  }

  console.log("🚀 ~ file: index.js ~ line 262 ~ admisionesEncontradas", admisionesEncontradas)



  // let admisionesEncontradas = admisiones.filter(
  //   (adm) =>
  //     adm.NOADMISION.toLocaleLowerCase().includes(textoABuscar.toLocaleLowerCase()) ||
  //     adm.NOMBREAFI.toLocaleLowerCase().includes(textoABuscar.toLocaleLowerCase())
  // )
  // console.log("🚀 ~ file: index.js ~ line 255 ~ admisionesEncontradas", admisionesEncontradas.length)

  // console.log(admisionesEncontradas)
}
//#endregion

//#region 12. Condicionales
let valorBooleano = true

const a = 1
const b = 2

// if (a === b) {
//   console.log("Son Iguales")
// } else {
//   console.log("Son diferentes")
// }

if (a === b) console.log("Son Iguales")
else console.log("Son diferentes")


console.log( `Los valores de ${a} y ${b} ${(a === b) ? "son Iguales" : "son diferentes"}`)


//#endregion

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


//#endregions
