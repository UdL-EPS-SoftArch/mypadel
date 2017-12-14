import {Injectable} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { JoinMatch } from './JoinMatch';

@Injectable()
export class JoinMatchService{
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /joinMatch
  getAllJoinMatchs(): Observable<JoinMatch[]> {
    return this.http.get(`${environment.API}/joinMatches`)
      .map((res: Response) => res.json()._embedded.joinMatch.map(json => new JoinMatch(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /JoinMatches/id
  getJoinMatch(id: number): Observable<JoinMatch> {
    return this.http.get(`${environment.API}/joinMatches/${id}`)
      .map((res: Response) => new JoinMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // POST /JoinMatches
  addJoinMatch(joinMatch: JoinMatch): Observable<JoinMatch> {
    const body = JSON.stringify(joinMatch);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/joinMatches`, body, options)
      .map((res: Response) => new JoinMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // DELETE /publicMatches/{id}
  deletePublicMatch(joinMatch: JoinMatch): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${joinMatch.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

}

