import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatchResult} from '../MatchResult';
import {MatchResultService} from '../MatchResult.service';

@Component({
  selector: 'app-matchResult-search',
  templateUrl: './matchResult-search.component.html'
})

export class MatchResultSearchComponent {
  @Input()
  matchResults: MatchResult[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private matchResultService: MatchResultService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: number): void {
    this.matchResultService.getMatchResult(searchTerm).subscribe(
        matchResults => { this.onSearchited.emit(matchResults); },
      error => this.errorMessage = <any>error.message);
  }
}