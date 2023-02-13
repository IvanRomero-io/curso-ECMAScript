let person = {name: "Oscar", age:"28"}
let country = "MX"

let data = {id: 1, ...person, country} //Los tres puntos trae los objetos de person y los añade creando un nuevo objeto y anañadiento los demas que hicimos nosotros

console.log(data)

//rest

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}


sum(1, 4, 6, 8) //Va agarrar el primer elemento como "num", y el resto va a ser de "values"

console.log(5 + sum(1, 4, 6, 10))