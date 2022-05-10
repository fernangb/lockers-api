import Address from './address.value-object';

describe('Address value object Unit Tests', () => {
  it('should throw error when city is empty', () => {
    expect(() => {
      new Address({
        city: '',
        number: 10,
        street: 'Rua 1',
        zip: '12345',
      });
    }).toThrowError('City is required');
  });

  it('should throw error when street is empty', () => {
    expect(() => {
      new Address({
        city: 'City 1',
        number: 10,
        street: '',
        zip: '12345',
      });
    }).toThrowError('Street is required');
  });

  it('should throw error when number is empty', () => {
    expect(() => {
      new Address({
        city: 'City 1',
        number: 0,
        street: 'Street 1',
        zip: '12345',
      });
    }).toThrowError('Number is required');
  });

  it('should throw error when zip is empty', () => {
    expect(() => {
      new Address({
        city: 'City 1',
        number: 10,
        street: 'Street 1',
        zip: '',
      });
    }).toThrowError('Zip is required');
  });

  it('should be able to create an address', () => {
    const address = new Address({
      city: 'City 1',
      number: 10,
      street: 'Street 1',
      zip: '12345',
    });

    expect(address.city).toBe('City 1');
    expect(address.number).toBe(10);
    expect(address.street).toBe('Street 1');
    expect(address.zip).toBe('12345');
  });
});
