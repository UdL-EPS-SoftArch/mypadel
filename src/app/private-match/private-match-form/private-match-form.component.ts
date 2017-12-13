import {Component, OnInit} from '@angular/core';
import {PrivateMatch} from '../PrivateMatch';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PrivateMatchService} from '../private-match.service';

@Component({
  selector: 'app-private-match-form',
  templateUrl: './private-match-form.component.html'
})
export class PrivateMatchFormComponent implements OnInit {
  public privateMatch: PrivateMatch;
  public privateMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private privateMatchService: PrivateMatchService) {
    this.privateMatchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.privateMatch = new PrivateMatch();
  }

  onSubmit(): void {
    this.privateMatchService.addPrivateMatch(this.privateMatch)
      .subscribe(
        privateMatch => this.router.navigate([privateMatch.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
