const anotherNumber = undefined
const validate = anotherNumber ?? 5

console.log(validate)



//Diferencias entre Or operator y Nullish Coalecing

//Or operator: Retorna el valor a la derecha si la expresión de la izquierda es FALSY (0, “”, false, NAN, undefined, null)

//Nullish ?? coalecing: retorna el valor a la dera si la expresión es null o undefined, el valor derecho puede devolver numero, boleano y string sin problemas