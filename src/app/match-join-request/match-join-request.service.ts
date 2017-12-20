import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {MatchJoinRequest} from "./MatchJoinRequest";
import {Injectable} from "@angular/core";
@Injectable()
export class MatchJoinRequestService {
  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {

  }
  addMatchJoinRequest(matchJoinRequest: MatchJoinRequest): Observable<MatchJoinRequest> {
    const body = JSON.stringify(matchJoinRequest);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/matchJoinRequests`, body, options)
      .map((res: Response) => new MatchJoinRequest(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
