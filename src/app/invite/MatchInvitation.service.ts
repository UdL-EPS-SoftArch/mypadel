import {Injectable} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {MatchInvitation} from './MatchInvitation';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class MatchInvitationService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}
  // GET /matchInvitations
  // GET /matchInvitations /id
  // POST /matchInvitations
  addMatchInvitation(matchInvitation: MatchInvitation): Observable<MatchInvitation> {
    const body = JSON.stringify(matchInvitation);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/matchInvitations`, body, options)
      .map((res: Response) => new MatchInvitation(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // PUT /matchInvitations/id
  // DELETE /matchInvitations/{id}
}
