import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private matchResultService: MatchResultService) {
  }

  ngOnInit() {
    this.matchResultService.getAllMatchReults()
    .subscribe(
      (matchResults: MatchResult[]) => {
        this.MatchResults = matchResults;
        this.totalMatchResults = matchResults.length;
      },
      error => this.errorMessage = <any>error.message);
  }

  public onSearch(MatchResults) {
    this.MatchResults = MatchResults;
  }
}
