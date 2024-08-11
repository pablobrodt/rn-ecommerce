import { formatCurrency } from './format-currency.util';

function normalize(text: string) {
  return text.replace(/\s/g, ' ');
}

describe('Format Currency Util Tests', () => {
  it('should format to brazilian real', () => {
    const expectedValue = normalize('R$ 17,10');

    const result = normalize(formatCurrency(17.1));

    expect(result).toEqual(expectedValue);
  });
});
