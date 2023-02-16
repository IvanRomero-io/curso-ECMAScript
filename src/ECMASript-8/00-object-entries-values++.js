const countries = {MX:'Mexico', CO: "Colombia", CL: "Chile", VE: "Venezuela", PE: "Peru"}


const nameCountriesAndAcronymArray = Object.entries(countries)
const countryNamesArray = Object.values(countries)
const countryAcronymsArray = Object.keys(countries)

console.log(nameCountriesAndAcronymArray)
console.log(countryNamesArray)
console.log(countryAcronymsArray)