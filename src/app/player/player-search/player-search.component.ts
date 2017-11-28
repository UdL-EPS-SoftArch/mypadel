
import {Player} from "../player";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html'
})
export class PlayerSearchComponent {
  @Input()
  players: Player[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private playerService: PlayerService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.playerService.getPlayersByUsername(searchTerm).subscribe(
      players => { this.onSearchited.emit(players); },
      error => this.errorMessage = <any>error.message);
  }

}
