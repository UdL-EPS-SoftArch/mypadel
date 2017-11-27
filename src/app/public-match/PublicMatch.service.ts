import {Injectable} from "@angular/core";
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {Admin} from "../admin/admin";
import { environment } from '../../environments/environment';
import {PublicMatch} from "./PublicMatch";

@Injectable()
export class PublicMatchService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /publicMatches /id
  getPublicMatch(id: string): Observable<PublicMatch> {
    return this.http.get(`${environment.API}/publicMatches/${id}`)
      .map((res: Response) => new PublicMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }






}
