import Size from 'src/domain/locker/value-object/size.value-object';

interface PriceProps {
  size: Size;
  value: number;
}

export default class Price {
  size: Size;
  value: number;

  constructor(props: PriceProps) {
    this.size = props.size;
    this.value = props.value;

    this.validate();
  }

  private validate() {
    if (this.size === undefined) throw new Error('Size is required');
    if (this.value === undefined) throw new Error('Value is required');
    if (this.value < 0) throw new Error('Value cannot be less than zero');
  }
}
