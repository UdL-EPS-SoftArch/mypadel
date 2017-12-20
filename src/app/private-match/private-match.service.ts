import {Injectable} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {PrivateMatch} from './PrivateMatch';
import {Match} from '../match/Match';

@Injectable()
export class PrivateMatchService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /privateMatches
  getAllPrivateMatches(): Observable<PrivateMatch[]> {
    return this.http.get(`${environment.API}/privateMatches`)
      .map((res: Response) => res.json()._embedded.privateMatches.map(json => new PrivateMatch(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /privateMatches /id
  getPrivateMatch(id: string): Observable<PrivateMatch> {
    return this.http.get(`${environment.API}/privateMatches/${id}`)
      .map((res: Response) => new PrivateMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // POST /privateMatches
  addPrivateMatch(privateMatch: PrivateMatch): Observable<PrivateMatch> {
    const body = JSON.stringify(privateMatch);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/privateMatches`, body, options)
      .map((res: Response) => new PrivateMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // PUT /privateMatches/id
  updatePrivateMatch(privateMatch: PrivateMatch): Observable<PrivateMatch> {
    const body = JSON.stringify(privateMatch);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${privateMatch.uri}`, body, options)
      .map((res: Response) => new PrivateMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // DELETE /privateMatches/{id}
  deletePrivateMatch(privateMatch: PrivateMatch): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${privateMatch.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPrivateMatchByStartDate(from: string, to: string): Observable<Response> {
    // from = from.split(".")[0]+"Z";
    // to = to.split(".")[0]+"Z";
    return this.http.get(`${environment.API}/matches/search/findByStartDateBetween?from=${from}&to=${to}`)
      .map((res: Response) => res.json()._embedded.matches.map(json => new Match(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

}
