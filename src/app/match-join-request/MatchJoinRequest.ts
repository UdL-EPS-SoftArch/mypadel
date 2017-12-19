import {Status} from './Status';
import {CustomMatch} from '../custom-match/custom-match';
import {Player} from '../player/player';

export class MatchJoinRequest{
  uri:string;
  status: Status;
  message:string;
  customMatch: CustomMatch;
  player: Player;
  eventDate:Date



}
