import operate from '../../logic/operate';

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it('throws an error when the operation is unknown', () => {
    expect(() => operate(2, 3, '#')).toThrow("Unknown operation '#'");
  });

  it("returns 'Can't divide by 0.' when dividing by zero", () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  it("returns 'Can't find modulo as can't divide by 0.' when finding modulo by zero", () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
