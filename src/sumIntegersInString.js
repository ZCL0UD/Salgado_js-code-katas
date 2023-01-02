/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

const game = (palabraCompuesta) => {
  const sumInt = palabraCompuesta.match(/\d+/g);

  if (sumInt) {
    return sumInt.map(Number).reduce((x, y) => x + y);
  } else {
    return 0;
  }
}

const sumarPalabras = Object.freeze({
  try1: 'h3ll0w0rld1',
  try2: 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog',
});


export {game , sumarPalabras as sumarPalabras};