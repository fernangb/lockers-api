import { Size } from '../value-object/size.value-object';

export default interface LockerProps {
  name: string;
  size: Size;
}

export class Locker {
  name: string;
  size: Size;
  available: boolean;

  constructor(props: LockerProps) {
    console.log(props);
    this.name = props.name;
    this.size = props.size;
    this.available = false;
    this.validate();
  }

  private validate() {
    if (this.name.length === 0) throw new Error('[Locker] Name is required');
    if (this.size === undefined) throw new Error('[Locker] Size is required');
  }
}
