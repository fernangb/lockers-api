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

  it('should throw error when name is empty', () => {
    expect(() => {
      new Locker({
        name: '',
        size: smallLockerSize,
      });
    }).toThrowError('[Locker] Name is required');
  });

  it('should throw error when size is empty', () => {
    expect(() => {
      const size = undefined;

      new Locker({
        name: 'Locker 1',
        size,
      });
    }).toThrowError('[Locker] Size is required');
  });

  it('should be able to create a small locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: smallLockerSize,
    });

    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toStrictEqual(smallLockerSize);
    expect(locker.available).toBeFalsy();
  });

  it('should be able to create a big locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: bigLockerSize,
    });

    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toStrictEqual(bigLockerSize);
    expect(locker.available).toBeFalsy();
  });
});
