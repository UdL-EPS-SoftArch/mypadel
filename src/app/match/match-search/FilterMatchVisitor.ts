import {Match} from '../Match';
import {Observable} from 'rxjs/Observable';

export abstract class FilterMatchVisitor {
  abstract filterMatch(): Observable<Match[]>;
}
