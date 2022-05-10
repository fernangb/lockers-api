import Size from './size.value-object';

describe('Locker size value object Unit Tests', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      new Size({
        name: '',
        initials: 'P',
      });
    }).toThrowError('Name is required');
  });

  it('should throw error when initials is empty', () => {
    expect(() => {
      new Size({
        name: 'Size 1',
        initials: '',
      });
    }).toThrowError('Initials is required');
  });

  it('should throw error when initials is invalid', () => {
    expect(() => {
      new Size({
        name: 'Size 1',
        initials: 'size',
      });
    }).toThrowError('Initials is invalid');
  });

  it('should be able to create a locker size with initials as lower case', () => {
    const locker_size = new Size({
      name: 'small',
      initials: 'p',
    });

    expect(locker_size.name).toBe('small');
    expect(locker_size.initials).toBe('P');
  });

  it('should be able to create a locker size with initials as upper case', () => {
    const locker_size = new Size({
      name: 'small',
      initials: 'P',
    });

    expect(locker_size.name).toBe('small');
    expect(locker_size.initials).toBe('P');
  });
});
