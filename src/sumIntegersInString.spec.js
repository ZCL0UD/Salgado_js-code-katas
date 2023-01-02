import { game, sumarPalabras as sumarPalabras } from "./sumIntegersInString";

describe('Your task in this kata is to implement a function that calculates the sum of the integers inside a string.', () => {
  test('should works with a sum of 4', () => {
    const input = sumarPalabras.try1;
    const value = 4;
    const resp = game(input);
    expect(resp).toEqual(value);
  });
  test('should works with a sum of 3635', () => {
    const input = sumarPalabras.try2;
    const value = 3635;
    const resp = game(input);
    expect(resp).toEqual(value);
  });
});