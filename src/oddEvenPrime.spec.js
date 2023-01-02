import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test(`If number is odd print Odd instead of the number.
  If number is even print Even instead of number.
  Print number as a string, if number is Prime.`, () => {
    const value = ` Even 2, Odd 3, Even, Odd 5, Even, Odd 7, Even, Odd, Even,
 Odd 11, Even, Odd 13, Even, Odd, Even, Odd 17, Even, Odd 19, Even,
 Odd, Even, Odd 23, Even, Odd, Even, Odd, Even, Odd 29, Even,
 Odd 31, Even, Odd, Even, Odd, Even, Odd 37, Even, Odd, Even,
 Odd 41, Even, Odd 43, Even, Odd, Even, Odd 47, Even, Odd, Even,
 Odd, Even, Odd 53, Even, Odd, Even, Odd, Even, Odd 59, Even,
 Odd 61, Even, Odd, Even, Odd, Even, Odd 67, Even, Odd, Even,
 Odd 71, Even, Odd 73, Even, Odd, Even, Odd, Even, Odd 79, Even,
 Odd, Even, Odd 83, Even, Odd, Even, Odd, Even, Odd 89, Even,
 Odd, Even, Odd, Even, Odd, Even, Odd 97, Even, Odd, Even,`;
    const resp = game(1,100);
    expect(resp).toEqual(value);
  });
});
