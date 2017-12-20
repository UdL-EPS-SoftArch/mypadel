import {Level} from '../public-match/Level';
import {CourtType} from './CourtType';

export class MatchBuilder {

  startDate: Date;
  duration: string;
  courtType: CourtType;
  level: Level;

  constructor() {

  }

  withStartDate(startDate: Date): MatchBuilder {
    this.startDate = startDate;
    return this;
  }

  withDuration(duration: string): MatchBuilder {
    this.duration = duration;
    return this;
  }

  withCourtType(courtType: CourtType): MatchBuilder {
    this.courtType = courtType;
    return this;
  }

  withLevel(level: Level): MatchBuilder {
    this.level = level;
    return this;
  }

}
