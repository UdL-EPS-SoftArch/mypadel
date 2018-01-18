import {FilterMatchStrategy} from './FilterMatchStrategy';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {PublicMatch} from '../../public-match/PublicMatch';
import {Observable} from 'rxjs/Observable';

export class FilterPublicMatchStrategy extends FilterMatchStrategy {
  public errorMessage: string;
  filtered = false;

  constructor(private publicMatchService: PublicMatchService) {
    super();
  }

  filterMatch(): Observable<PublicMatch[]> {
    this.filtered = !this.filtered;
    return this.publicMatchService.getAllPublicMatches().map(
      matches => {return matches;},
      error => this.errorMessage = <any>error.message);
  }

  isFiltered(): boolean {
    return this.filtered;
  }

  getMatchType(): string {
    return "PublicMatch";
  }
}
