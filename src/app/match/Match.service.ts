import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';
import {Match} from './Match';

@Injectable()
export class MatchService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {
  }


  getMatchByStartDate(from: string, to: string): Observable<Response> {
    return this.http.get(`${environment.API}/matches/search/findByStartDateBetween?from=${from}&to=${to}`)
      .map((res: Response) => res.json()._embedded.matches.map(json => new Match(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
