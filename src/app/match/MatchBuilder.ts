import {Level} from '../public-match/Level';
import {CourtType} from './CourtType';
import {PublicMatch} from '../public-match/PublicMatch';
import {PrivateMatch} from '../private-match/PrivateMatch';
import {CustomMatch} from '../custom-match/custom-match';

export class MatchBuilder {

  startDate: Date;
  duration: string;
  courtType: CourtType;
  level: Level;

  static match(): MatchBuilder {
    return new MatchBuilder();
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

  asPublicMatch(): PublicMatch {
    this.checkFieldsForPublicMatch();
    const publicMatch = new PublicMatch();
    publicMatch.startDate = this.startDate;
    publicMatch.duration = this.duration;
    publicMatch.courtType = this.courtType;
    publicMatch.level = this.level;
    return publicMatch;
  }

  asPriateMatch(): PrivateMatch {
    this.checkFields();
    const privateMatch = new PrivateMatch();
    privateMatch.startDate = this.startDate;
    privateMatch.duration = this.duration;
    privateMatch.courtType = this.courtType;
    return privateMatch;
  }

  asCustomMatch(): CustomMatch {
    this.checkFields();
    const customMatch = new CustomMatch();
    customMatch.startDate = this.startDate;
    customMatch.duration = this.duration;
    customMatch.courtType = this.courtType;
    return customMatch;
  }

  checkFields(): void {
    if (this.startDate == null) {
      throw new Error('StartDate not initiated');
    } else if (this.duration == null) {
      throw new Error('Duration not initiated');
    } else if (this.courtType == null) {
      throw new Error('CourtType not initiated');
    }
  }

  private checkFieldsForPublicMatch() {
    this.checkFields();
    if (this.level == null) {
      throw new Error('Level not initiated');
    }
  }
}
