import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {MatchJoinRequest} from './MatchJoinRequest';
import {Injectable} from '@angular/core';
import {Player} from '../player/player';
import {CustomMatch} from '../custom-match/custom-match';

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

  // GET /players/id
  getMatchJoinRequest(id: string): Observable<MatchJoinRequest> {
    return this.http.get(`${environment.API}/matchJoinRequests/${id}`)
      .map((res: Response) => new MatchJoinRequest(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  getMatchJoinRequestPlayer(id: string): Observable<Player> {
    return this.http.get(`${environment.API}/matchJoinRequests/${id}/player`)
      .map((res: Response) => new Player(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  getMatchJoinRequestCustomMatch(id: string): Observable<CustomMatch> {
    return this.http.get(`${environment.API}/matchJoinRequests/${id}/customMatch`)
      .map((res: Response) => new CustomMatch(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  updateMatchJoinRequest(matchJoinRequest: MatchJoinRequest) {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${matchJoinRequest.uri}`, matchJoinRequest, options)
      .map((res: Response) => new MatchJoinRequest(res.json()))
      .catch((error: any) => Observable.throw(error.json()));

  }
}
