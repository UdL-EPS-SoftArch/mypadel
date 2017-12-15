import { Component, OnInit } from '@angular/core';
import { JoinMatchService } from '../JoinMatch.service';
import { JoinMatch } from '../JoinMatch';

@Component({
  selector: 'app-joinmatch-list',
  templateUrl: './JoinMatch-list.component.html'
})

export class JoinMatchListComponent implements OnInit {
  public joinMatches: JoinMatch[] = [];
  public total: number;
  public errorMessage = '';

  constructor(private joinMatchService: JoinMatchService) {}

  ngOnInit() {
    this.joinMatchService.getAllJoinMatches()
      .subscribe(
        (joinMatch: JoinMatch[]) => {
          this.joinMatches = joinMatch;
          this.total = joinMatch.length; },
        error => this.errorMessage = <any>error.message);
  }
  onSearch(joinMatches) {
    this.joinMatches = joinMatches;
  }

}
