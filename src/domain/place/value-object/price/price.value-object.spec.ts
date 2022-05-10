import Size from './../../../locker/value-object/size.value-object';
import Price from './price.value-object';

describe('Price value object Unit Tests', () => {
  const size = new Size({
    name: 'small',
    initials: 'P',
  });

  it('should throw error when size is empty', () => {
    expect(() => {
      new Price({
        size: undefined,
        value: 10,
      });
    }).toThrowError('[Price] Size is required');
  });

  it('should throw error when value is empty', () => {
    expect(() => {
      new Price({
        size,
        value: undefined,
      });
    }).toThrowError('[Price] Value is required');
  });

  it('should throw error when value is less than zero', () => {
    expect(() => {
      new Price({
        size,
        value: -10,
      });
    }).toThrowError('[Price] Value cannot be less than zero');
  });

  it('should be able to create a price', () => {
    const price = new Price({
      size,
      value: 10,
    });

    expect(price.size).toStrictEqual(size);
    expect(price.value).toBe(10);
  });
});
