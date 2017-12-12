import {Injectable} from '@angular/core';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MatchInvitationService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}
  // GET /matchInvitations
  // GET /matchInvitations /id
  // POST /matchInvitations
  // PUT /matchInvitations/id
  // DELETE /matchInvitations/{id}
}
