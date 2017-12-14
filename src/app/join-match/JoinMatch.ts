import { Player } from '../player/player';
import { PublicMatch } from '../public-match/PublicMatch';
import { CustomMatch } from '../custom-match/custom-match';

export class JoinMatch {
  uri: string;
  id: number;
  date_match: Date;
  player: Player;
  publicMatch: PublicMatch;
  customMatch: CustomMatch;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


