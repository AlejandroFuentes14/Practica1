const temperatura = require ('celsius'); //Llamamos solo lo que buscamos
const { toCelsius } = require('celsius');// Se toma el codigo celsius 
const { toFahrenheit } = require('celsius'); //Se toma el codigo Fahrenheit

console.log(toCelsius(100));// 38 Se manda a llamar las conversiones de celcius
console.log(toCelsius(100, 3));// 37.778
console.log(toCelsius('105.981 degrees F', 5));// 41.10056

console.log(toFahrenheit(36)); // 97 
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380+

console.log(temp.toCelsius(20));
console.log(temp.toFahrenheit(30));