import Entity from '../../@shared/entities/entity';
import Size from '../value-object/size.value-object';

interface LockerProps {
  id?: string;
  name: string;
  size: Size;
}

export default class Locker extends Entity {
  private _name: string;
  private _size: Size;
  private _available: boolean;

  constructor(props: LockerProps) {
    super(props.id);
    this._name = props.name;
    this._size = props.size;
    this._available = false;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get size(): Size {
    return this._size;
  }

  get available(): boolean {
    return this._available;
  }

  private validate() {
    if (this.name.length === 0) throw new Error('Name is required');
    if (this.size === undefined) throw new Error('Size is required');
  }
}
