import Entity from './entity';

describe('Entity Unit Tests', () => {
  it('should throw error when id is not uuid', () => {
    expect(() => {
      const id = '123';
      new Entity(id);
    }).toThrowError('Id is invalid');
  });
  it('should create an id', () => {
    const id = '1d48478d-b642-4e50-a306-5c7f509ee039';
    const entity = new Entity(id);

    expect(entity.id).toBe(id);
  });

  it('should create an id if is not provided', () => {
    const entity = new Entity();

    expect(entity.id).toBeDefined();
  });
});
