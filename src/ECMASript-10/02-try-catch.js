//esta herramienta sirve paraa que si una funcion no se cumple, realice otra por defecto

try {
    hello()
}catch(error){
    console.log(error)
}

try{
    anotheFn()
}catch{
    console.log('esto es un error')
}


// function hello(){
//     console.log('hola')
// }