import { Component, OnInit } from '@angular/core';
import { MatchResult } from '../MatchResult';
import { MatchResultService } from '../MatchResult.service';

@Component({
  selector: 'app-matchresult-list',
  templateUrl: './matchResult-list.component.html'
})
export class MatchResultListComponent implements OnInit {

  public MatchResults: MatchResult[];
  public totalMatchResults = 0;
  public errorMessage = '';

  public constructor(private matchResultService: MatchResultService) {}

  public ngOnInit() {
    this.matchResultService.getAll().subscribe((matchResults: MatchResult[]) => {
        this.MatchResults = matchResults;
        this.totalMatchResults = matchResults.length;
      },
      (error: Error) => this.errorMessage = error.message);
  }

  public onSearch(matchResults: MatchResult[]) {
    this.MatchResults = matchResults;
  }
}
