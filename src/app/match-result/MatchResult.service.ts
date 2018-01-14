import { Injectable } from '@angular/core';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { MatchResult } from './MatchResult';
import {ICRUDService} from './ICRUDService';

@Injectable()
export class MatchResultService implements ICRUDService<MatchResult>{

  private readonly http: Http;
  private readonly authenticationBasicService: AuthenticationBasicService;

  public constructor(http: Http, authenticationBasicService: AuthenticationBasicService) {
    this.http = http;
    this.authenticationBasicService = authenticationBasicService;
  }

  // Request Method: GET /matchResults -> Get all the MatchResults
  public getAll(): Observable<MatchResult[]> {
    return this.http.get(`${environment.API}/matchResults`)
      .map((res: Response): MatchResult => res.json() as MatchResult)
      .catch((error: any) => Observable.throw(error.json()));
  }

  // Request Method: GET /matchResults/id -> Get the MatchResult with the given id
  public getById(id: number): Observable<MatchResult> {
    return this.http.get(`${environment.API}/matchResults/${id}`)
      .map((res: Response): MatchResult => res.json() as MatchResult)
      .catch((error: any) => Observable.throw(error.json()));
  }

  // Request Method: POST /matchResults/ -> add's a new MatchResult
  public create(matchResult: MatchResult): Observable<MatchResult> {
    const body = JSON.stringify(matchResult);
    const headers = new Headers([
      { 'Content-Type': 'application/json' },
      {'Authorization': this.authenticationBasicService.getCurrentUser().authorization}]
    );
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${environment.API}/matchResults`, body, options)
      .map((res: Response): MatchResult => res.json() as MatchResult)
      .catch((error: any) => Observable.throw(error.json()));
  }

  // Request Method: PUT /matchResults/id -> update's the given MatchResult
  public update(matchResult: MatchResult): Observable<MatchResult> {
    const body = JSON.stringify(matchResult);
    const headers = new Headers([
      { 'Content-Type': 'application/json' },
      {'Authorization': this.authenticationBasicService.getCurrentUser().authorization}]
    );
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${environment.API}/${matchResult.id}`, body, options)
      .map((res: Response): MatchResult => res.json() as MatchResult)
      .catch((error: any) => Observable.throw(error.json()));
  }

  /**
   * DELETE /admin/{id}
   * @param {MatchResult} matchResult
   * @returns {Observable<Response>}
   */
  public delete(matchResult: MatchResult): Observable<Response> {
    const headers = new Headers([
      { 'Content-Type': 'application/json' },
      {'Authorization': this.authenticationBasicService.getCurrentUser().authorization}]
    );
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(`${environment.API}${matchResult.id}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

}






