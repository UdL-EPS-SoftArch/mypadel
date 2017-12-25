import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReservationService {

  constructor(private http: Http,
              private authentication: AuthenticationBasicService) { }

  // GET /reservations
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get(`${environment.API}/reservations`)
      .map((res: Response) => res.json()._embedded.reservations.map(json => new Reservation(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // GET /reservations/id
  getReservation(id: string): Observable<Reservation> {
    return this.http.get(`${environment.API}/reservations/${id}`)
      .map((res: Response) => new Reservation(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // POST /reservations
  addReservation(reservation: Reservation): Observable<Reservation> {
    const body = JSON.stringify(reservation);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/reservations`, body, options)
      .map((res: Response) => new Reservation(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  getReservationsByStartDate(searchTerm: string): Observable<Response> {
    return this.http.get(`${environment.API}/reservations/search/findByStartDateContaining?text=${searchTerm}`)
      .map((res: Response) => res.json()._embedded.reservations.map(json => new Reservation(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // DELETE /reservation/{id}
  deleteReservation(reservation: Reservation): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${reservation.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

  // PUT /reservation/id
  updateReservation(reservation: Reservation): Observable<Reservation> {
    const body = JSON.stringify(reservation);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${reservation.uri}`, body, options)
      .map((res: Response) => new Reservation(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
