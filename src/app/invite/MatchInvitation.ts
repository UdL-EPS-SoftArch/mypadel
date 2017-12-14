import {User} from '../login-basic/user';
import {Player} from '../admin/player';
import {Match} from '../match/Match';

export class MatchInvitation {
  uri: string;
  id: number;
  eventDate: Date;
  message: string;
  invitedPlayer: string;
  /*createdBy: User;
  invitedPlayer: string;
  invitesToMatch: string;
*/
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
