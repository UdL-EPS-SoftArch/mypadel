import {CourtType} from "./court-type";

export class Reservation {
  uri: string;
  id: number;
  startDate: Date;
  duration: string;
  courtType: CourtType;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


}
