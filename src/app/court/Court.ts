export class Court {
  id: number;
  indoor: boolean;
  available: boolean;

  // TODO: implement relationship with reservation once it is created

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
