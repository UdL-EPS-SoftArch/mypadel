import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

export interface ICRUDService<T> {

  getAll(): Observable<T[]>;

  getById(id: number): Observable<T>;

  create(entity: T): Observable<T>;

  update(entity: T): Observable<T>;

  delete(entity: T): Observable<Response>;

}
