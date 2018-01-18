import { Component, OnInit } from '@angular/core';
import {CourtType} from '../CourtType';
import {Level} from '../../public-match/Level';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../Match.service';
import {MatchBuilder} from '../MatchBuilder';
import {Match} from '../Match';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {
  // public startDate: Date;
  // public duration: string;
  // public courtType: CourtType;
  // public level: Level;
  public matchForm: FormGroup;
  public matchBuilder: MatchBuilder;
  private errorMessage: string;
  private match: Match;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private matchService: MatchService) {

    this.matchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.match = new Match();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.matchService.getMatch(id).subscribe(
          match => this.match = match,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.matchService.updateMatch(this.match)
      .subscribe(
        match => this.router.navigate(['/matches/'+match.id]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }

}
