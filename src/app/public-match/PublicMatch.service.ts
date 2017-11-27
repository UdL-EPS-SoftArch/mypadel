import {Injectable} from "@angular/core";
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import { environment } from '../../environments/environment';
import {PublicMatch} from "./PublicMatch";

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
  getPublicMatch(id: string): Observable<PublicMatch> {
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




}
