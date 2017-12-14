import { Component, OnInit } from '@angular/core';
import { JoinMatchService } from '../JoinMatch.service';
import { JoinMatch } from '../JoinMatch';

@Component({
  selector: 'app-JoinMatch-list',
  templateUrl: './JoinMatch-list.component.html'
})

export class JoinMatchListComponent implements OnInit {
  public joinMatches: JoinMatch[] = [];
  public total: number;
  public errorMessage = '';

  constructor(private joinMatchService: JoinMatchService) {}

  ngOnInit() {
    this.joinMatchService.getAllJoinMatchs()
      .subscribe(
        (joinMatch: JoinMatch[]) => {
          this.joinMatches = joinMatch;
          this.total = joinMatch.length; },
        error => this.errorMessage = <any>error.message);
  }
  onSearch(joinMatch) {
    this.joinMatches = joinMatch;
  }


}