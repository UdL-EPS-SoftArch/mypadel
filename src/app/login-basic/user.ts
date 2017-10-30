import {Authority} from './authority';

export class User {
  uri: string;
  username = '';
  email: string;
  authorities: Authority[] = [];
  _links: any = {};
  authorization = '';
  password = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
