const challenge = require('./Challenge');
const process = require('process');

challenge.sumaArray('1,2,10,10');

challenge.sumaDiagonal([
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6]
]);

challenge.piramide(5);

/* switch (process.argv[2]) {
  case 'sumaArray':
    challenge.sumaArray(process.argv[3]);
    break;
  case 'sumaDiagonal':
    challenge.sumaDiagonal(process.argv[3]);
    break;
  case 'piramide':
    challenge.piramide(process.argv[3]);
    break;
  default:
    console.log('Ingrese un comando');
    break;
} */
