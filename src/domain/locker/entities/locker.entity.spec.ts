import { Locker } from './locker.entity';

describe('Locker Unit Tests', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      new Locker({
        name: '',
        size: 'P',
      });
    }).toThrowError('[Locker] Name is required');
  });

  it('should throw error when size is empty', () => {
    expect(() => {
      new Locker({
        name: 'Locker 1',
        size: '',
      });
    }).toThrowError('[Locker] Size is required');
  });

  it('should throw error when size is invalid', () => {
    expect(() => {
      new Locker({
        name: 'Locker 1',
        size: 'M',
      });
    }).toThrowError('[Locker] Invalid size');
  });

  it('should be able to create a small locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: 'P',
    });

    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toBe('P');
    expect(locker.available).toBeFalsy();
  });

  it('should be able to create a big locker', () => {
    const locker = new Locker({
      name: 'Locker 1',
      size: 'G',
    });

    expect(locker.name).toBe('Locker 1');
    expect(locker.size).toBe('G');
    expect(locker.available).toBeFalsy();
  });
});
