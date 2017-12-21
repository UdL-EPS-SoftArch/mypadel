import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {JoinMatch } from '../JoinMatch';
import {JoinMatchService} from '../JoinMatch.service';
import {Match} from '../../match/Match';

@Component({
  selector: 'app-joinmatch-detail',
  templateUrl: './JoinMatch-detail.component.html',
})

export class JoinMatchDetailComponent implements OnInit {
  public joinMatch: JoinMatch;
  public match: Match;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private joinMatchService: JoinMatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.joinMatchService.getMatchFromJoinMatch(id).subscribe(
            match => this.match = match,
            error => this.errorMessage = <any>error.message);
        this.joinMatchService.getJoinMatch(id).subscribe(
          joinMatch => this.joinMatch = joinMatch,
          error => this.errorMessage = <any>error.message);
        }
      );

  }





}
