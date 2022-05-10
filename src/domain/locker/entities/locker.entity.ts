import Size from '../value-object/size.value-object';

interface LockerProps {
  name: string;
  size: Size;
}

export default class Locker {
  name: string;
  size: Size;
  available: boolean;

  constructor(props: LockerProps) {
    this.name = props.name;
    this.size = props.size;
    this.available = false;
    this.validate();
  }

  private validate() {
    if (this.name.length === 0) throw new Error('Name is required');
    if (this.size === undefined) throw new Error('Size is required');
  }
}
