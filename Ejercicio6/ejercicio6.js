//Ejercicio 6: Haga un formulario que convierta de grados Celsius a grados Fahrenheit. Para ello, tendré que multiplicar por 9/5 y sumar 32. Tenga en cuenta que 30 grados Celsius son 86 grados Fahrenheit.

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const TipoConversion = prompt('Elige el tipo de conversion: \n1. grados Celsius a grados Fahrenheit \n2. grados Fahrenheit a grados Celsius');

if (TipoConversion === '1') {
const celsius = parseFloat(prompt('Ingrese la temperatura en grados Celsius: '));
const fahrenheit = celsiusAFahrenheit(celsius);
console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
}else if (TipoConversion === '2') {
const fahrenheit = parseFloat(prompt('Ingrese la temperatura en grados Fahrenheit: '));
const celsius = fahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit} grados Fahrenheit son ${celsius} grados Celsius.`);
}else{
    console.log('Opcion no valida.');
}