import {FilterMatchStrategy} from './FilterMatchStrategy';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {PublicMatch} from '../../public-match/PublicMatch';
import {Observable} from 'rxjs/Observable';

export class FilterPublicMatchStrategy extends FilterMatchStrategy {
  public errorMessage: string;

  constructor(private publicMatchService: PublicMatchService) {
    super();
  }

  filterMatch(): Observable<PublicMatch[]> {
    return this.publicMatchService.getAllPublicMatches().map(
      matches => {return matches;},
      error => this.errorMessage = <any>error.message);
  }

}
