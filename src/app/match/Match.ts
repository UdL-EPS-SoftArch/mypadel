import {CourtType} from './CourtType';
import {Player} from '../player/player';

export class Match {
  id: number;
  startDate: Date;
  duration: String;
  courtType: CourtType;
  cancelationDeadline: Date;
  isCancelled: boolean;
  matchCreator: Player;
  /*Waiting for other components being implemented
  invitations: any = [];//invitation[] = []
  reservation: Reservation;
  */

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
