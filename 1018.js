var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const initialVal = Number(lines[0]);
var value = initialVal;

const bills100 = Math.floor(value/100);
value = value - bills100 * 100;

const bills50 = Math.floor(value/50);
value = value - bills50 * 50;

const bills20 = Math.floor(value/20);
value = value - bills20 * 20;

const bills10 = Math.floor(value/10);
value = value - bills10 * 10;

const bills5 = Math.floor(value/5);
value = value - bills5 * 5;

const bills2 = Math.floor(value/2);
value = value - bills2 * 2;

const bills1 = Math.floor(value/1);
value = value - bills1 * 1;

console.log(initialVal);
console.log(`${bills100} nota(s) de R$ 100,00`);
console.log(`${bills50} nota(s) de R$ 50,00`);
console.log(`${bills20} nota(s) de R$ 20,00`);
console.log(`${bills10} nota(s) de R$ 10,00`);
console.log(`${bills5} nota(s) de R$ 5,00`);
console.log(`${bills2} nota(s) de R$ 2,00`);
console.log(`${bills1} nota(s) de R$ 1,00`);