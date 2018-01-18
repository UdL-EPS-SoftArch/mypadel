import {FilterMatchStrategy} from './FilterMatchStrategy';
import {Observable} from 'rxjs/Observable';
import {PrivateMatchService} from '../../private-match/private-match.service';
import {PrivateMatch} from '../../private-match/PrivateMatch';
import {Match} from '../Match';

export class FilterPrivateMatchStrategy extends FilterMatchStrategy {
  public errorMessage: string;
  filtered = false;

  constructor(private privateMatchService: PrivateMatchService) {
    super();
  }

  filterMatch(): Observable<PrivateMatch[]> {
    this.filtered = !this.filtered;
    return this.privateMatchService.getAllPrivateMatches().map(
      matches => {
        return matches;
      },
      error => this.errorMessage = <any>error.message);
  }

  isFiltered(): boolean {
    return this.filtered;
  }

  isSameType(match: Match): boolean {
    return match instanceof PrivateMatch;
  }

}
