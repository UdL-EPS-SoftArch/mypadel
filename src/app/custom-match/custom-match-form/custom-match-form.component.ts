import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomMatch } from '../custom-match';
import { CustomMatchService } from '../custom-match.service';
import {CourtType} from '../../match/CourtType';

@Component({
  selector: 'app-custom-match-form',
  templateUrl: './custom-match-form.component.html'
})
export class CustomMatchFormComponent implements OnInit {
  public courts: CourtType[]=[CourtType.INDOOR,CourtType.OUTDOOR,CourtType.UNDEFINED]
  public customMatch: CustomMatch;
  public customMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private customMatchService: CustomMatchService) {
    this.customMatchForm = fb.group({
      'duration': ['CustomMatch duration' , Validators.required],
      'startDate': ['CustomMatch startDate', Validators.required],
      'courtType': ['CustomMatch courtType', Validators.required],
    });
  }
  ngOnInit() {
    this.customMatch = new CustomMatch ();
  }
  onSubmit(): void {
    this.customMatchService.addCustomMatch(this.customMatch)
      .subscribe(
        customMatch => this.router.navigate([customMatch.uri]),

        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
