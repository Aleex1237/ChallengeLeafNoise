const sumaArray = (array) => {
  let suma = 0;
  const arr = array.split(',');

  for (let i = 0; i < arr.length; i++) {
    suma += +arr[i];
  }
  console.log(`La suma de los numeros pasados por parametros es: ${suma}`);
  console.log('**************************************************');
};

const sumaDiagonal = (matriz) => {
  let sumaA = 0;
  let sumaB = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumaA += matriz[i][i];
    sumaB += matriz[i][matriz.length - 1 - i];
  }
  let total = sumaA - sumaB;
  console.log(`El total es: ${total}`);
  console.log('*********************************************************');
};

const piramide = (num) => {
  let string = '';
  for (let i = 1; i < num + 1; i++) {
    for (let j = 1; j <= num + 1 - i; j++) {
      string += ' ';
    }

    for (let k = 0; k < i * 2 - 1; k++) {
      string += '#';
    }
    string += '\n';
  }

  console.log(string);
};
module.exports = { sumaArray, sumaDiagonal, piramide };
