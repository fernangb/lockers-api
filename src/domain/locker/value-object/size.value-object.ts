export default interface SizeProps {
  name: string;
  initials: string;
}

export class Size {
  name: string;
  initials: string;

  constructor(props: SizeProps) {
    this.name = props.name;
    this.initials = props.initials.toUpperCase();
    this.validate();
  }

  private validate() {
    if (this.name.length === 0) throw new Error('[Size] Name is required');
    if (this.initials.length === 0)
      throw new Error('[Size] Initials is required');

    const max_initials_size = 3;

    if (this.initials.length > max_initials_size)
      throw new Error('[Size] Initials is invalid');
  }
}
