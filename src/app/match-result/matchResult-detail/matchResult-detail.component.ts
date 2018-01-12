import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatchResult } from '../MatchResult';
import { MatchResultService } from '../MatchResult.service';

@Component({
  selector: 'app-matchresult-list',
  templateUrl: './matchResult-list.component.html'
})

export class MatchResultListComponent implements OnInit {

  public MatchResult: MatchResult;
  public errorMessage = '';

  constructor(private matchResultService: MatchResultService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() { 
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
      this.matchResultService.getMatchResult(id)
        .subscribe((matchResult: MatchResult) => {
          this.MatchResult = matchResult;
        })
      })
    }
  }