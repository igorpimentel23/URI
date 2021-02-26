var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n2 = Number(lines[0]);
var n1 = Number(lines[1]);

n1 += 1;

if (n1 % 2 === 0){
  n1 += 1;
}

var sum = 0;

for (var i = n1; i < n2; i = i + 2) {
  sum += i;
}

console.log(sum);