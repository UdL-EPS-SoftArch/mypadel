import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html'
})
export class PlayerDetailComponent implements OnInit {
  public player: Player = new Player();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
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
}
