import { Component, OnInit } from '@angular/core';
import { JoinMatchService } from '../JoinMatch.service';
import { JoinMatch } from '../JoinMatch';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Player} from '../../player/player';

@Component({
  selector: 'app-joinmatch-list',
  templateUrl: './JoinMatch-list.component.html'
})

export class JoinMatchListComponent implements OnInit {
  public joinMatches: JoinMatch[] = [];
  public total: number;
  public errorMessage = '';
  public player: Player;

  constructor(private joinMatchService: JoinMatchService, private authentication: AuthenticationBasicService) {}

  ngOnInit() {
    this.joinMatchService.getJoinMatchbyPlayer(this.authentication.getCurrentUser().username)
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
