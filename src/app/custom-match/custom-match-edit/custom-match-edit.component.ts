import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomMatch} from '../custom-match';
import {CustomMatchService} from '../custom-match.service';


@Component({
  selector: 'app-custom-match-edit',
  templateUrl: './custom-match-edit.component.html'
})
export class CustomMatchEditComponent implements OnInit {
  public customMatch: CustomMatch;
  public customMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private customMatchService: CustomMatchService) {
    this.customMatchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.customMatch = new CustomMatch();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.customMatchService.getCustomMatch(id).subscribe(
          customMatch => this.customMatch = customMatch,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.customMatchService.updateCustomMatch(this.customMatch)
      .subscribe(
        customMatch => this.router.navigate([customMatch.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
