import {CourtType} from './court-type';

export class Reservation {
  uri: string;
  _links: any = {};
  id: number;
  startdate: Date;
  duration: string;
  courtType: CourtType;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


}
