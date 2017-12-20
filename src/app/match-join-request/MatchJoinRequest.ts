import {Status} from './Status';
import {CustomMatch} from '../custom-match/custom-match';
import {Player} from '../player/player';

export class MatchJoinRequest{
  id : number;
  uri:string;
  status: Status;
  message:string;
  customMatch: string;
  player: Player;
  eventDate:Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }



}
