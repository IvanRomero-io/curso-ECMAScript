//Se añadio un metodo para saber si un array incluye un valor ".includes()", el cual devuelve un booleano dependiendo si el falso o verdadero
let numbers = [1, 2, 3, 9, 8, 6]

console.log(numbers.includes(4))

////////////////Pero si son diferentes por solo una letra en mayuscula va a devolver false
const list = ['Oscar', 'Daniel', 'Ana']

console.log(list.includes('oscar'))


//Investigar algo similar con objetos