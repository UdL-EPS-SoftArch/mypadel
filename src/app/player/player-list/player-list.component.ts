import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html'
})
export class PlayerListComponent implements OnInit {
  public players: Player[] = [];
  public totalPlayers = 0;
  public errorMessage = '';

  constructor(private userService: PlayerService) {}

  ngOnInit() {
    this.userService.getAllPlayers()
      .subscribe(
        (players: Player[]) => {
          this.players = players;
          this.totalPlayers = players.length; },
        error => this.errorMessage = <any>error.message);
  }
  onSearch(players) {
    this.players = players;
  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.userService.isAdmin();
  }



}
