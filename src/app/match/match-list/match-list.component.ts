import { Component, OnInit } from '@angular/core';
import {Match} from '../Match';
import {MatchService} from '../Match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {
  public matches: Match[] = [];
  public totalMatches = 0;
  public errorMessage = '';

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getAllMatches()
      .subscribe(
        (matches: Match[]) => {
          this.matches = matches;
          this.totalMatches = matches.length; },
        error => this.errorMessage = <any>error.message);
  }


  onSearch(matches) {
    this.matches = matches;
  }
}
