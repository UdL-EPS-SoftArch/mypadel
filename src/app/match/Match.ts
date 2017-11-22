import {CourtType} from './CourtType';
import {Player} from '../admin/player';

export class Match {
  id: number;
  startDate: Date;
  duration: String;
  courtType: CourtType;
  cancelationDeadline: Date;
  isCancelled: boolean;
  matchCreator: Player;
  invitations: any = [];//invitation[] = []
  /*Waiting for other components being implemented
  reservation: Reservation;
  */

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
