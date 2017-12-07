import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import {PublicMatchService} from '../PublicMatch.service';

@Component({
  selector: 'app-public-match-edit',
  templateUrl: './public-match-edit.component.html'
})
export class PublicMatchEditComponent implements OnInit {
  public publicMatch: PublicMatch;
  public publicMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
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
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.publicMatchService.getPublicMatch(id).subscribe(
          publicMatch => this.publicMatch = publicMatch,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.publicMatchService.updatePublicMatch(this.publicMatch)
      .subscribe(
        publicMatch => this.router.navigate([publicMatch.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
