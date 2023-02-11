let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world + '!' 
// console.log(epicPhrase)

//Template literals //Usa comillas francesas (alt + 96)
//Abres comillas francesas y cada que quieras agregar un valor que esta en una variable, abres un "${}" para añadir el valor de esa variables, y lo demas lo colocas como un texto
let epicPhrase2 = `${hello} ${world}! `

console.log(epicPhrase2)


let lorem = 'esto es un string \n' + epicPhrase2 //la "\n" sirve para hacer una bajada de linea

// console.log(lorem)
//con commillas francesas sirve para haacer la bajada de lineacon solo darle enter
let lorem2 = `Esto es una frase epica 
epica epica epica
epiquisima`

console.log(lorem2)