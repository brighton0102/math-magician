import calculate from './calculate';

describe('calculate', () => {
  it('should clear the calculator when "AC" is pressed', () => {
    const result = calculate({ total: '100', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update the next number when a digit is pressed', () => {
    const result = calculate({ total: '100', next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: '100',
      next: '52', // Concatenates the digit
      operation: '+',
    });
  });

  it('should handle decimal point input correctly', () => {
    const result = calculate({ total: '100', next: '5', operation: '+' }, '.');
    expect(result).toEqual({
      total: '100',
      next: '5.', // Adds a decimal point
      operation: '+',
    });
  });

  it('should calculate the result when "=" is pressed', () => {
    const result = calculate({ total: '100', next: '50', operation: '+' }, '=');
    expect(result).toEqual({
      total: '150', // Calculates the result of 100 + 50
      next: null,
      operation: null,
    });
  });

  it('should toggle the sign of the number when "+/-" is pressed', () => {
    const result = calculate({ total: '100', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({
      total: '100',
      next: '-5', // Toggles the sign
      operation: '+',
    });
  });

  it('should handle addition correctly', () => {
    const result = calculate({ total: '100', next: '50', operation: '+' }, '-');
    expect(result).toEqual({
      total: '150', // Calculates the result of 100 + 50 before subtracting
      next: null,
      operation: '-',
    });
  });
});
