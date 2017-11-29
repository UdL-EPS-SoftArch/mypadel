export class Court {
  isIndoor: boolean;
  available: boolean;
  // TODO: implement relationship with reservation once it is created

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
