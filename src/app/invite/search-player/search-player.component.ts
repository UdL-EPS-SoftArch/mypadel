import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Player} from '../../player/player';
import {PlayerService} from '../../player/player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html'
})

export class SearchPlayerComponent {
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

