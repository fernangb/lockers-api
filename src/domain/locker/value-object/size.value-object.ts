interface SizeProps {
  name: string;
  initials: string;
}

export default class Size {
  name: string;
  initials: string;

  constructor(props: SizeProps) {
    this.name = props.name;
    this.initials = props.initials.toUpperCase();
    this.validate();
  }

  private validate() {
    if (this.name.length === 0) throw new Error('Name is required');
    if (this.initials.length === 0) throw new Error('Initials is required');

    const max_initials_size = 3;

    if (this.initials.length > max_initials_size)
      throw new Error('Initials is invalid');
  }
}
