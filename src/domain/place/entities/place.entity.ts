import Entity from '../../@shared/entities/entity';
import Locker from '../../../domain/locker/entities/locker.entity';
import Address from '../value-object/address/address.value-object';
import Price from '../value-object/price/price.value-object';

interface PlaceProps {
  id?: string;
  address: Address;
  price: Price;
}

export default class Place extends Entity {
  private _address: Address;
  private _price: Price;
  private _available: boolean;
  private _lockers: Locker[];

  constructor(props: PlaceProps) {
    super(props.id);
    this._address = props.address;
    this._price = props.price;
    this._available = false;
    this._lockers = [];

    this.validate();
  }

  get address(): Address {
    return this._address;
  }

  get price(): Price {
    return this._price;
  }

  get available(): boolean {
    return this._available;
  }

  get lockers(): Locker[] {
    return this._lockers;
  }

  private validate() {
    if (this._address === undefined) throw new Error('Address is required');
    if (this._price === undefined) throw new Error('Price is required');
  }
}
