import {User} from '../login-basic/user';
import {Match} from '../match/Match';

export class MatchInvitation {
  uri: string;
  id: number;
  eventDate: Date;
  message: string;
  invitedPlayer: string;

  /*
  invitedPlayer: string;
  invitesToMatch: string;
*/
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
  setInvitedPlayer(username): void {
    this.invitedPlayer = username;
  }
}
