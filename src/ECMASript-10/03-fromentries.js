//Sirve para convertir un array en objeto, pero, por cada array que tenga por dentro otro array con dos elementos, lo va a ejcutar, pero si tiene mas de dos elementos no va a ser ejecutable

const entries = new Map([["name", 'oscar'], ["age", 34] ])

console.log(entries)
console.log(Object.fromEntries(entries))