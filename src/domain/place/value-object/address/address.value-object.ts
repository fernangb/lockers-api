interface AddressProps {
  street: string;
  number: number;
  zip: string;
  city: string;
}

export default class Address {
  street: string;
  number: number;
  zip: string;
  city: string;

  constructor(props: AddressProps) {
    this.street = props.street;
    this.number = props.number;
    this.zip = props.zip;
    this.city = props.city;

    this.validate();
  }

  validate() {
    if (this.street.length === 0) throw new Error('Street is required');

    if (this.number === 0) throw new Error('Number is required');

    if (this.zip.length === 0) throw new Error('Zip is required');

    if (this.city.length === 0) throw new Error('City is required');
  }
}
