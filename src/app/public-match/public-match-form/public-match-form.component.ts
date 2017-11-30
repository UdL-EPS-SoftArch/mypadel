import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import {PublicMatchService} from '../PublicMatch.service';

@Component({
  selector: 'app-public-match-form',
  templateUrl: './public-match-form.component.html'
})
export class PublicMatchFormComponent implements OnInit {
  public publicMatch: PublicMatch;
  public publicMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private publicMatchService: PublicMatchService) {
    this.publicMatchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.publicMatch = new PublicMatch();
  }

  onSubmit(): void {
    this.publicMatchService.addPublicMatch(this.publicMatch)
      .subscribe(
        publicMatch => this.router.navigate([publicMatch.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
