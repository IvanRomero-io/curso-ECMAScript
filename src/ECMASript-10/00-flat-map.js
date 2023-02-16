const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]]

console.log(array.flat(3))

const globalizarArray = array.flat(3)

//flatmap
const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap( number =>[number, number * 2])) //recorre cada elemento y lo multiplica (en este caso)

//---------------------------------------------------------------------------------------------------------//

// Flat
// El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos.

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

// numbers.flat(1) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
// numbers.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//--------------------------------------------------------------------------------------------------------//

// Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

// numbers.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//------------------------------------------------------------------------------------------------------//

// Flat-map
// Permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada elemento del nuevo array.

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers2.flatMap(num => num * 2). // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
// Este método no se podría utilizar para array que tengan más de un nivel de profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];

// numbers2.flat(Infinity).map(num => num * 2) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]