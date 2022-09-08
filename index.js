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
