import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatchService} from '../Match.service';
import {Match} from "../Match";

@Component({
  selector: 'app-match-search',
  templateUrl: './match-search.component.html'
})

export class MatchSearchComponent {
  @Input()
  matches: Match[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private matchService: MatchService,
              private route: ActivatedRoute) {
  }

  performSearch(from: Date, to: Date): void {
    this.matchService.getMatchByStartDate(from.toISOString(), to.toISOString()).subscribe(
      matches => { this.onSearchited.emit(matches); },
      error => this.errorMessage = <any>error.message);
  }

}
