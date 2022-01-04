const challenge = require('./Challenge');
const process = require('process');

switch (process.argv[2]) {
  case 'sumaArray':
    challenge.sumaArray(process.argv[3]);
    break;
  /*  case 'sumaDiagonal':
      challenge.sumaDiagonal(process.argv[3]);
      break; */
  case 'piramide':
    challenge.piramide(+process.argv[3]);
    break;
  default:
    console.log('Ingrese un comando');
    break;
}
