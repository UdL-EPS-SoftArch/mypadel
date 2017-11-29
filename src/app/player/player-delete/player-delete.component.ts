import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html'
})
export class PlayerDeleteComponent implements OnInit {
  public player: Player = new Player();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.playerService.getPlayer(`${id}`).subscribe(
            player => this.player = player,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  deletePlayer() {
    this.playerService.deletePlayer(this.player).subscribe(
      result => this.router.navigate(['players']),
      error => this.errorMessage = <any>error.message);
  }
}
