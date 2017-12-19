import { Player } from '../player/player';
import { PublicMatch } from '../public-match/PublicMatch';
import { CustomMatch } from '../custom-match/custom-match';
import {Match} from "../match/Match";

export class JoinMatch {
  uri: string;
  id: number;
  date_match: string;
  _links: any = {};
  player: Player;
  match: Match;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


