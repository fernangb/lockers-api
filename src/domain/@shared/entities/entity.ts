import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export default class Entity {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? uuidv4();

    this.validateId();
  }

  get id(): string {
    return this._id;
  }

  validateId() {
    const isValid = uuidValidate(this.id);

    if (!isValid) throw new Error('Id is invalid');
  }
}
