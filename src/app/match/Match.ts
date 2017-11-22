import {CourtType} from './CourtType';
import {Player} from '../admin/player';

export class Match {
  id: number;
  startDate: String;
  duration: String;
  courtType: CourtType;
  cancelationDeadline: String;
  isCancelled: boolean;
  matchCreator: Player;
  invitations: any = [];

  /*
  reservation: Reservation;
  */

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
