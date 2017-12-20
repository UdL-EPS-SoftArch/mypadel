import {Component, OnInit} from '@angular/core';
import {Match} from '../Match';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatchService} from '../Match.service';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {CustomMatchService} from '../../custom-match/custom-match.service';
import {PrivateMatchService} from '../../private-match/private-match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  public match: Match;
  public matchForm: FormGroup;
  public errorMessage: string;
  public type: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private publicMatchService: PublicMatchService,
              private customMatchService: CustomMatchService,
              private privateMatchService: PrivateMatchService) {
    this.type = 'public';
    this.matchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.match = new Match();
  }

  OnSelect(type: string): void{
    this.type = type;
  }

  onSubmit(): void {
  }
}

