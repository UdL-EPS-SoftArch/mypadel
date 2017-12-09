import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Court} from './Court';

@Injectable()
export class CourtService {

  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {
  }

  getAllCourts(): Observable<Court[]> {
    const options = this.createAuthenticationHeader();

    return this.http.get(`${environment.API}/courts`, options)
      .map((res: Response) => res.json()._embedded.courts.map(json => new Court(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  private createAuthenticationHeader() {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});
    return options;
  }

  getCourt(id: string): Observable<Court> {
    const options = this.createAuthenticationHeader();

    return this.http.get(`${environment.API}/courts/${id}`, options)
      .map((res: Response) => new Court(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  getCourtByAvailable(): Observable<Court[]> {
    const options = this.createAuthenticationHeader();
    return this.http.get(`${environment.API}/courts/search/findByAvailableTrue`, options)
      .map((res: Response) => res.json()._embedded.courts.map(json => new Court(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  addCourt(court: Court): Observable<Court> {
    const body = JSON.stringify(court);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/courts`, body, options)
      .map((res: Response) => new Court(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  updateCourt(court: Court): Observable<Court> {
    const body = JSON.stringify(court);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(
      `${environment.API}/courts/${court.id}`, body, options)
      .map((res: Response) => new Court(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  deleteCourt(court: Court): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}/courts/${court.id}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }
}
