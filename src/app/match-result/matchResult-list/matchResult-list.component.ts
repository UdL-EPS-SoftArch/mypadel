import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchResult } from '../MatchResult';
import { MatchResultService } from '../MatchResult.service';



@Component({
    selector: 'app-matchResult-list',
    templateUrl: './matchResult-list.component.html'
  })

export class MatchResultListComponent {

    public MatchResults: MatchResult[];
    public totalMatchResults: number;
    public errorMessage = '';

    constructor(private matchResultService: MatchResultService) {}

    public ngOnInit() {
        this.matchResultService.getAllMatchReults()
          .subscribe(
            (matchResults: MatchResult[]) => {
              this.MatchResults = matchResults;
              this.totalMatchResults = matchResults.length; },
            error => this.errorMessage = <any>error.message);
      }
    public onSearch(MatchResults) {
    this.MatchResults = MatchResults;
    }
}