import { Calculator } from '@/utils/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
      expect(calculator.add(-1, 1)).toBe(0);
    });
  });

  describe('divide', () => {
    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('divides numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
  });
});