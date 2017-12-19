import {CourtType} from './CourtType';
import {Player} from '../player/player';

export class Match {
  uri: string;
  _links: any = {};
  id: number;
  startDate: Date;
  duration: string;
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
