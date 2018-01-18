import {FilterMatchStrategy} from './FilterMatchStrategy';
import {Observable} from 'rxjs/Observable';
import {PrivateMatch} from '../../private-match/PrivateMatch';
import {CustomMatchService} from '../../custom-match/custom-match.service';

export class FilterCustomMatchStrategy extends FilterMatchStrategy {
  public errorMessage: string;

  constructor(private customMatchService: CustomMatchService) {
    super();
  }

  filterMatch(): Observable<PrivateMatch[]> {
    return this.customMatchService.getAllCustomMatches().map(
      matches => {return matches;},
      error => this.errorMessage = <any>error.message);
  }

}
