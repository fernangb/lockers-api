import Size from '../value-object/size.value-object';
import Locker from './locker.entity';

describe('Locker Unit Tests', () => {
  const smallLockerSize = new Size({
    name: 'small',
    initials: 'P',
  });
  const bigLockerSize = new Size({
    name: 'big',
    initials: 'G',
  });
  const place_id = '1d48478d-b642-4e50-a306-5c7f509ee039';

  it('should throw error when name is empty', () => {
    expect(() => {
      new Locker({
        name: '',
        size: smallLockerSize,
        place_id,
      });
    }).toThrowError('Name is required');
  });

  it('should throw error when size is empty', () => {
    expect(() => {
      const size = undefined;

      new Locker({
        name: 'Locker 1',
        size,
        place_id,
      });
    }).toThrowError('Size is required');
  });

  it('should throw error when place is empty', () => {
    expect(() => {
      const size = smallLockerSize;
      new Locker({
        name: 'Locker 1',
        size,
        place_id: '',
      });
    }).toThrowError('Place is required');
  });

  it('should be able to create a small locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: smallLockerSize,
      place_id,
    });

    expect(locker.id).toBeDefined();
    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toStrictEqual(smallLockerSize);
    expect(locker.available).toBeFalsy();
    expect(locker.place_id).toBe(place_id);
  });

  it('should be able to create a big locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: bigLockerSize,
      place_id,
    });

    expect(locker.id).toBeDefined();
    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toStrictEqual(bigLockerSize);
    expect(locker.available).toBeFalsy();
    expect(locker.place_id).toBe(place_id);
  });
});
