const user = {username: 'gndx', age: 34, country: 'CD', gender: 'male'}
const { username, gender,  ...values} = user

console.log(username, gender) // Output gndx male
console.log(values) //Output {age:34, country: 'CD'}
