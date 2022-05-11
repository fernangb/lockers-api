import LockerFactory from './locker.factory';

describe('Locker Factory Unit Tests', () => {
  const place_id = '1d48478d-b642-4e50-a306-5c7f509ee039';
  it('should create a locker', () => {
    const locker = LockerFactory.create({
      name: 'Locker 1',
      size_name: 'small',
      size_initials: 'P',
      place_id,
    });

    expect(locker.id).toBeDefined();
    expect(locker.name).toBe('Locker 1');
    expect(locker.available).toBeFalsy();
    expect(locker.place_id).toBe(place_id);
    expect(locker.size.name).toBe('small');
    expect(locker.size.initials).toBe('P');
  });
});
