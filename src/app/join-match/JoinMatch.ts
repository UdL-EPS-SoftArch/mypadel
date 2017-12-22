import { Player } from '../player/player';
import {Match} from '../match/Match';

export class JoinMatch {
  uri: string;
  id: number;
  date_match: Date;
  player: Player;
  match: Match;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


