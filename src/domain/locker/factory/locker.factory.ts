import Locker from '../entities/locker.entity';
import Size from '../value-object/size.value-object';

interface CreateLockerFactoryInterface {
  id?: string;
  name: string;
  place_id: string;
  size_name: string;
  size_initials: string;
}

export default class LockerFactory {
  public static create(props: CreateLockerFactoryInterface) {
    const size = new Size({
      name: props.size_name,
      initials: props.size_initials,
    });

    return new Locker({
      id: props.id,
      name: props.name,
      size,
      place_id: props.place_id,
    });
  }
}
