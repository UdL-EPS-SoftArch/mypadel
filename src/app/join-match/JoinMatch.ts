import { Player } from '../player/player';
import {Match} from '../match/Match';

export class JoinMatch {
  uri: string;
  _links: any = {};
  id: number;
  date: Date;
  player: String;
  match: String;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


