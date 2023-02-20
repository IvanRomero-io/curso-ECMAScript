const array = ["one", "two", "three", "four", "five", "six"] //Tarea, acceder al ultimo array


const subtraerArrayElement = array.at(-1) //Esto funciona igual para devolver el ultimo elemento de un array, aunque depende cuanto le restemos nos va a mandar penultimo, ante penultimo etc
console.log(subtraerArrayElement)

//Mi solucion
const chupaArray = array[array.length - 1]
console.log(chupaArray)