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
  let suma = 0;
  let resta = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i];
    resta += matriz[i][2 - i];
  }
  let total = suma - resta;
  console.log(`El total es: ${total}`);
  console.log('*********************************************************');
};

const piramide = (num) => {
  let arr = [];
    for (let i = 1; i < num; i++) {
      arr.push('*');
      console.log(arr.join(' '));
    }
};

module.exports = { sumaArray, sumaDiagonal, piramide };
