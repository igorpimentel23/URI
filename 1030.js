var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

class Josephus {
  constructor() { }
  findTheLastSurvivor(numberOfSoldiers, orderToDie) {
    var survivor = 0;

    if (numberOfSoldiers > 0) {
      survivor = ((((this.findTheLastSurvivor(numberOfSoldiers - 1, orderToDie)) + orderToDie - 1) % numberOfSoldiers) + 1);
    }
    return survivor;
  }
}

const nc = Number(lines[0]);

for (var i = 1; i <= nc; i++) {
  var nk = lines[i].split(' ');
  var n = Number(nk[0]);
  var k = Number(nk[1]);
  
  const x = Josephus.prototype.findTheLastSurvivor(n, k);

  console.log(`Case ${i}: ${x}`);
}
