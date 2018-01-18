import {FilterMatchVisitor} from './FilterMatchVisitor';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {PublicMatch} from '../../public-match/PublicMatch';
import {Observable} from 'rxjs/Observable';

export class FilterPublicMatchVisitor extends FilterMatchVisitor {
  public errorMessage: string;

  constructor(private publicMatchService: PublicMatchService) {
    super();
  }

  filterMatch(): Observable<PublicMatch[]> {
    return this.publicMatchService.getAllPublicMatches().map(
      matches => matches,
      error => this.errorMessage = <any>error.message);
  }

}
