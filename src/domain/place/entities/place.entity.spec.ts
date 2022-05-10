import Size from './../../../domain/locker/value-object/size.value-object';
import Address from '../value-object/address/address.value-object';
import Price from '../value-object/price/price.value-object';
import Place from './place.entity';

describe('Place Unit Tests', () => {
  const address = new Address({
    city: 'City 1',
    number: 10,
    street: 'Street 1',
    zip: '12345',
  });
  const size = new Size({
    name: 'small',
    initials: 'P',
  });
  const price = new Price({
    size,
    value: 10,
  });

  it('should throw error when address is empty', () => {
    expect(() => {
      new Place({
        address: undefined,
        price,
      });
    }).toThrowError('Address is required');
  });

  it('should throw error when price is empty', () => {
    expect(() => {
      new Place({
        address,
        price: undefined,
      });
    }).toThrowError('Price is required');
  });

  it('should be able to create a place', () => {
    const place = new Place({
      address,
      price,
    });

    expect(place.address).toStrictEqual(address);
    expect(place.price).toStrictEqual(price);
    expect(place.available).toBeFalsy();
    expect(place.lockers.length).toBe(0);
  });
});
