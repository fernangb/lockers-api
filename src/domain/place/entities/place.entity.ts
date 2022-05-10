import Locker from '../../../domain/locker/entities/locker.entity';
import Address from '../value-object/address/address.value-object';
import Price from '../value-object/price/price.value-object';

interface PlaceProps {
  address: Address;
  price: Price;
}

export default class Place {
  address: Address;
  price: Price;
  available: boolean;
  lockers: Locker[];

  constructor(props: PlaceProps) {
    this.address = props.address;
    this.price = props.price;
    this.available = false;
    this.lockers = [];

    this.validate();
  }

  private validate() {
    if (this.address === undefined) throw new Error('Address is required');
    if (this.price === undefined) throw new Error('Price is required');
  }
}
