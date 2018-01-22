import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import { environment } from '../../environments/environment';
import { Player } from './player';
import {User} from '../login-basic/user';
@Injectable()
export class PlayerService {

  constructor(private http: Http,
              private authentication: AuthenticationBasicService) {}

  // GET /players
  getAllPlayers(): Observable<Player[]> {
    return this.http.get(`${environment.API}/players`)
      .map((res: Response) => res.json()._embedded.players.map(json => new Player(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // POST /players
  addPlayer(player: Player): Observable<Player> {
    const body = JSON.stringify(player);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API}/players`, body, options)
      .map((res: Response) => new Player(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  getPlayersByUsername(searchTerm: string): Observable<Player[]> {
    return this.http.get(`${environment.API}/players/search/findByUsernameContaining?text=${searchTerm}`)
      .map((res: Response) => res.json()._embedded.players.map(json => new Player(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // GET /players/id
  getPlayer(id: string): Observable<Player> {
    return this.http.get(`${environment.API}/players/${id}`)
      .map((res: Response) => new Player(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  updatePlayer(player: Player): Observable<Player> {
    const playerNoAuthorities = player;
    playerNoAuthorities.authorities = [];
    const body = JSON.stringify(playerNoAuthorities);
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.put(`${environment.API}${player.uri}`, body, options)
      .map((res: Response) => new Player(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
  // DELETE /player/{id}
  deletePlayer(player: Player): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authentication.getCurrentUser().authorization);
    const options = new RequestOptions({headers: headers});

    return this.http.delete(`${environment.API}${player.uri}`, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json()));
  }
  isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.authentication.isAdmin();
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }
}
