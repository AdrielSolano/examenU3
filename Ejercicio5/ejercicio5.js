//Ejercicio 5: Haz un formulario que convierta de euros a dólares. Supondremos que un euro son 1,10 dólares y que un dólar son 0,91 euros.

function ConvertirEurosADolares(euros) {
    return euros * 1.10;
}

function ConvertirDolaresAEuros(dolares) {
    return dolares / 1.10;
}

const tipoConversion = prompt('Elige el tipo de conversion: \n1. Euros a Dólares \n2. Dolares a Euros');

if (tipoConversion === '1') {
const euros = parseFloat(prompt('Ingrese la cantidad de euros: '));
const dolares = ConvertirEurosADolares(euros);
console.log(`${euros} euros son ${dolares} dolares.`);
}
else if (tipoConversion === '2') {
const dolares = parseFloat(prompt('Ingrese la cantidad de dolares: '));
const euros = ConvertirDolaresAEuros(dolares);
console.log(`${dolares} dolares son ${euros} euros.`);
}else{
    console.log('Opcion no valida.');
}