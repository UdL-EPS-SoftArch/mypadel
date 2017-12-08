



import { Player } from "../admin/player";
import { Match } from "../match/Match";
import { PublicMatch } from "../public-match/PublicMatch";

export class JoinMatch{

  uri: string;
  id: number;
  date_match: Date;
  player: Player;
  match: Match;
  publicMatch: PublicMatch;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}


