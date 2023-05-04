import calculate from '../../logic/calculate';

describe('calculate function', () => {
  it('clears the calculator', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('concatenates numbers correctly', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '2')).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  it('handles leading zeros correctly', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toEqual({});
  });

  it('handles decimal points correctly', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '.')).toEqual({
      total: null,
      next: '5.',
      operation: null,
    });
  });

  it('handles operations correctly', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });

  it('performs calculations correctly', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('changes sign of the number correctly', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '+/-')).toEqual({
      total: null,
      next: '-5',
      operation: null,
    });
  });

  it('handles operator changes correctly', () => {
    expect(calculate({ total: '10', next: null, operation: '+' }, '-')).toEqual({
      total: '10',
      next: null,
      operation: '-',
    });
  });
});
