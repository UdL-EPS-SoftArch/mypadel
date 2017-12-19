import { Component, OnInit } from '@angular/core';
import { JoinMatchService } from '../JoinMatch.service';
import { JoinMatch } from '../JoinMatch';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-joinmatch-list',
  templateUrl: './JoinMatch-list.component.html'
})

export class JoinMatchListComponent implements OnInit {
  public joinMatches: JoinMatch[] = [];
  public finaljoinMatches: JoinMatch[] = [];
  public total: number;
  public errorMessage = '';

  constructor(private joinMatchService: JoinMatchService, private authentication: AuthenticationBasicService) {}

  ngOnInit() {
    this.joinMatchService.getAllJoinMatches()
      .subscribe(
        (joinMatch: JoinMatch[]) => {
          this.joinMatches = joinMatch;
          this.total = joinMatch.length; },
        error => this.errorMessage = <any>error.message);
    this.joinMatches.forEach(t => {
      if(t.player.username === this.authentication.getCurrentUser().username) {
        this.finaljoinMatches.push(t);
      }
    })

  }
  onSearch(joinMatches) {
    this.joinMatches = joinMatches;
  }

}
