//FUNCION COMUN Y CORRIENTE 

function square(num){
    return num * num
}

console.log(square(8))

//Arrow funtion
//Si solo hay una linea de procesos despues de la arrow, no hay necesidad de usar llaves "{}" y return, pero si hay mas de una linea, tienes que meterlas en llaves y asignarle un return a lo que quieras devolver
//Si solo hay un parametro no hay necesidad de usar parentesis, pero si hay mas de uno, es obligatorio

// const square = (num) => {return num * num} //Esta opcion funciona


const square = num => num * num //Y esta tambien

console.log(square(5))