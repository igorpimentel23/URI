var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var grades = lines[0].split(' ');

const avg = (Number(grades[0]) * 2 + Number(grades[1]) * 3 + Number(grades[2]) * 4 + Number(grades[3])) / 10;

console.log(`avg: ${avg.toFixed(1)}`);

if( avg >= 7 || avg < 5) {
  if (avg >= 7) {
    console.log('Aluno aprovado.');
  } else if (avg < 5 ){
    console.log('Aluno reprovado.');
  } 
} else {
  console.log('Aluno em exame.');
  const final = Number(lines[1]);
  console.log(`Nota do exame: ${final.toFixed(1)}`);

  const finalAvg = (final + avg) / 2;

  if (finalAvg >= 5) {
    console.log('Aluno aprovado.');
  } else {
    console.log('Aluno reprovado.');
  } 

  console.log(`avg final: ${finalAvg.toFixed(1)}`);
}