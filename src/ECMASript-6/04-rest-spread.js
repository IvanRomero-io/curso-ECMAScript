//Arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b, u] = fruits //Va a traer a y b de fruits
console.log(a, b, u) //Vemos que la ultima nos da undefined porque no hemos declarado

//Object destructuring

let user = {username: 'Oscar', age: 34}
let {contry, age, username} = user //Nos traemos los valores de la clase y aca no importa el orden
console.log(username, age, contry)

