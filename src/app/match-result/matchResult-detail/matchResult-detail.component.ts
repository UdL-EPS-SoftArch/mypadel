import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchResult } from '../MatchResult';
import { MatchResultService } from '../MatchResult.service';

@Component({
  selector: 'app-matchresult-detail',
  templateUrl: './matchResult-detail.component.html'
})

export class MatchResultDetailComponent implements OnInit {

  public MatchResult: MatchResult;
  public errorMessage = '';

  public constructor(private matchResultService: MatchResultService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.params.map(params => params['id']).subscribe((id) => {
      this.matchResultService.getById(id).subscribe((matchResult: MatchResult) => {
          this.MatchResult = matchResult;
      });
    });
  }

}
