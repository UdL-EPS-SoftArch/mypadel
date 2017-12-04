export class Court {
  id: number;
  indoor: boolean;
  available: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
