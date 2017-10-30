import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import { environment } from '../../environments/environment';
import { Admin } from './admin';

@Injectable()
export class AdminService {

  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /admins
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get(`${environment.API}/admins`)
      .map((res: Response) => res.json()._embedded.admins.map(json => new Admin(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /admins/id
  getAdmin(id: string): Observable<Admin> {
    return this.http.get(`${environment.API}/admins/${id}`)
      .map((res: Response) => new Admin(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // POST /admins
  addAdmin(admin: Admin): Observable<Admin> {
    const body = JSON.stringify(admin);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/admins`, body, options)
      .map((res: Response) => new Admin(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // PUT /admins/id
  updateAdmin(admin: Admin): Observable<Admin> {
    const adminNoAuthorities = admin;
    adminNoAuthorities.authorities = [];
    const body = JSON.stringify(adminNoAuthorities);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${admin.uri}`, body, options)
      .map((res: Response) => new Admin(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // DELETE /admin/{id}
  deleteAdmin(admin: Admin): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${admin.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }

  getAdminsByUsername(searchTerm: string): Observable<Admin[]> {
    return this.http.get(`${environment.API}/admins/search/findByUsernameContaining?text=${searchTerm}`)
      .map((res: Response) => res.json()._embedded.admins.map(json => new Admin(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
}

