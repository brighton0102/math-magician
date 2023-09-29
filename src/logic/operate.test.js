import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8'); // 5 + 3 = 8
  });

  it('should perform subtraction correctly', () => {
    const result = operate('10', '4', '-');
    expect(result).toBe('6'); // 10 - 4 = 6
  });

  it('should perform multiplication correctly', () => {
    const result = operate('6', '7', 'x');
    expect(result).toBe('42'); // 6 * 7 = 42
  });

  it('should perform division correctly', () => {
    const result = operate('15', '3', '÷');
    expect(result).toBe('5'); // 15 / 3 = 5
  });

  it('should handle division by zero gracefully', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0."); // Division by zero error message
  });

  it('should perform modulo correctly', () => {
    const result = operate('17', '5', '%');
    expect(result).toBe('2'); // 17 % 5 = 2
  });

  it('should handle modulo by zero gracefully', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0."); // Modulo by zero error message
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '3', '&')).toThrowError("Unknown operation '&'");
  });
});
