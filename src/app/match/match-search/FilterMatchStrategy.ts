import {Match} from '../Match';
import {Observable} from 'rxjs/Observable';

export abstract class FilterMatchStrategy {
  abstract filterMatch(): Observable<Match[]>;

  abstract isFiltered(): boolean;

  abstract isSameType(match: Match): boolean;
}
