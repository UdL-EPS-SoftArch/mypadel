import {CourtType} from './CourtType';
import {Player} from '../player/player';

export class Match {
  uri: string;
  _links: any = {};
  id: number;
  startDate: Date;
  startDateString: string;
  duration: string;
  courtType: CourtType;
  cancelationDeadline: Date;
  isCancelled: boolean;
  matchCreator: Player;
  invitations: any = [];
  // reservation: Reservation;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
