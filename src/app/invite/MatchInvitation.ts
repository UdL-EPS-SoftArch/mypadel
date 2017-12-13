import {User} from '../login-basic/user';
import {Player} from '../admin/player';
import {Match} from '../match/Match';

export class MatchInvitation {
  id: number;
  eventDate: Date;
  message: string;
  /*createdBy: User;
  invitedPlayer: Player;
  invitesToMatch: Match;
*/
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
