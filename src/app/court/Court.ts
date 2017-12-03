import {Authority} from '../login-basic/authority';

export class Court {
  id: number;
  indoor: boolean;
  available: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
