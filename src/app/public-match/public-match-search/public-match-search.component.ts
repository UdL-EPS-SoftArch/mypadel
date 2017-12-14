import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import {PublicMatchService} from '../PublicMatch.service';
import {MatchService} from '../../match/Match.service';

@Component({
  selector: 'app-public-match-search',
  templateUrl: './public-match-search.component.html'
})

export class PublicMatchSearchComponent {
  @Input()
  publicMatches: PublicMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private publicMatchService: PublicMatchService,
              private matchService: MatchService,
              private route: ActivatedRoute) {
  }

  performSearch(from: Date, to: Date): void {
    this.matchService.getMatchByStartDate(from.toISOString(), to.toISOString()).subscribe(
      matches => { this.onSearchited.emit(matches); },
      error => this.errorMessage = <any>error.message);
  }
}

