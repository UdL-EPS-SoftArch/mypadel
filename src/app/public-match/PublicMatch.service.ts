import {Injectable} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {PublicMatch} from './PublicMatch';
import {Match} from '../match/Match';

@Injectable()
export class PublicMatchService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /publicMatches
  getAllPublicMatches(): Observable<PublicMatch[]> {
    return this.http.get(`${environment.API}/publicMatches`)
      .map((res: Response) => res.json()._embedded.publicMatches.map(json => new PublicMatch(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /publicMatches /id
  getPublicMatch(id: number): Observable<PublicMatch> {
    return this.http.get(`${environment.API}/publicMatches/${id}`)
      .map((res: Response) => new PublicMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // POST /publicMatches
  addPublicMatch(publicMatch: PublicMatch): Observable<PublicMatch> {
    const body = JSON.stringify(publicMatch);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/publicMatches`, body, options)
      .map((res: Response) => new PublicMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // PUT /publicMatches/id
  updatePublicMatch(publicMatch: PublicMatch): Observable<PublicMatch> {
    const body = JSON.stringify(publicMatch);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${publicMatch.uri}`, body, options)
      .map((res: Response) => new PublicMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // DELETE /publicMatches/{id}
  deletePublicMatch(publicMatch: PublicMatch): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${publicMatch.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPublicMatchByStartDate(from: string, to: string): Observable<Response> {
    return this.http.get(`${environment.API}/matches/search/findByStartDateBetween?from=${from}&to=${to}`)
      .map((res: Response) => res.json()._embedded.matches.map(json => new Match(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

}
