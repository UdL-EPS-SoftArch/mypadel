import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatchResult} from '../MatchResult';
import {MatchResultService} from '../MatchResult.service';

@Component({
  selector: 'app-match-result-form',
  templateUrl: './matchResult-form.component.html'
})
export class MatchResultFormComponent implements OnInit {
  public matchResult: MatchResult;
  public matchResultForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private matchResultService: MatchResultService) {
    this.matchResultForm = fb.group({
      'winningPair': ['The Winning pair', Validators.required],
      'losingPair': ['The Loosing pair', Validators.required],
      'isDraw': ['Draw', Validators.required],
      'match': ['Match', Validators.required],
    });
  }

  ngOnInit() {
    this.matchResult = new MatchResult();
  }

  onSubmit(): void {
    this.matchResultService.create(this.matchResult)
      .subscribe(
        matchResult => this.router.navigate([matchResult.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
