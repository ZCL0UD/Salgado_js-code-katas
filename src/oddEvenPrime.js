/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */

function game(inicio, final) {
  let result = '';
  if (inicio === 1) {
    inicio = 2;
  }
  for (; inicio <= final; inicio++) {
    result += checkOddEven(inicio);
    result += checkPrime(inicio);
    result += ',';
    if(inicio%10===0&inicio<100){
      result+='\n'
    }

  } return result;
}

const checkOddEven = num => {
  if(num % 2 === 0) {
      return " Even";
  }else
      return " Odd";
}

const checkPrime = num => {
  for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return "";
      }
  }
  return " "+num;
}

export {game};