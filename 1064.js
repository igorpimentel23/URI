var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var avg = 0;
var qt = 0;
var val;

for (var i = 0; i < lines.length; i++) {
  val = Number(lines[i]);
  if (val > 0) {
    avg += val;
    qt += 1;
  }
}

avg = avg / qt;

console.log(`${qt} valores positivos`);
console.log(avg.toFixed(1));