import { CourtType } from './court-type';

export class Reservation {
  uri: string;
  _links: any = {};
  id: number;
  startDate: Date;
  duration: string;
  courtType: CourtType;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


}
