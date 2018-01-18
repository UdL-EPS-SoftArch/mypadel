import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PrivateMatch} from '../PrivateMatch';
import {PrivateMatchService} from '../private-match.service';

@Component({
  selector: 'app-private-match-edit',
  templateUrl: './private-match-edit.component.html'
})
export class PrivateMatchEditComponent implements OnInit {
  public privateMatch: PrivateMatch;
  public privateMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
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
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.privateMatchService.getPrivateMatch(id).subscribe(
          privateMatch => this.privateMatch = privateMatch,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.privateMatchService.updatePrivateMatch(this.privateMatch)
      .subscribe(
        privateMatch => this.router.navigate(['/matches/' + privateMatch.id]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
