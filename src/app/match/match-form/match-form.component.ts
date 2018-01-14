import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {CustomMatchService} from '../../custom-match/custom-match.service';
import {PrivateMatchService} from '../../private-match/private-match.service';
import {CourtType} from '../CourtType';
import {Level} from '../../public-match/Level';
import {MatchBuilder} from '../MatchBuilder';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  public startDate: Date;
  public duration: string;
  public courtType: CourtType;
  public level: Level;
  public matchForm: FormGroup;
  public errorMessage: string;
  public type: string;
  public matchBuilder: MatchBuilder;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private publicMatchService: PublicMatchService,
              private customMatchService: CustomMatchService,
              private privateMatchService: PrivateMatchService) {
    this.matchBuilder = MatchBuilder.match();
    this.matchForm = fb.group({
      'startDate': ['Match start hour', Validators.required],
      'duration': ['Duration of the match', Validators.required],
      'courtType': ['Type of court', Validators.required],
      'level': ['Difficulty', Validators.required],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.type = params['type'];
      console.log(this.type);
    });
  }

  onSelect(type: string): void {
    this.type = type;
  }

  onSubmit(): void {
    this.initializeMatch();
    if (this.isPublic()) {
      this.createPublicMatch();
    } else if (this.isCustom()) {
      this.createCustomMatch();
    } else if (this.isPrivate()) {
      this.createPrivateMatch();
    } else {
    }
  }

  private initializeMatch(): void {
    this.matchBuilder
      .withStartDate(this.startDate)
      .withDuration(this.duration)
      .withCourtType(this.courtType);
  }

  private isPublic(): boolean {
    return this.type === 'public';
  }

  private createPublicMatch(): void {
    this.publicMatchService
      .addPublicMatch(this.matchBuilder.withLevel(this.level).asPublicMatch())
      .subscribe(
        publicMatch => this.router.navigate(['/publicMatches']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  private isCustom(): boolean {
    return this.type === 'custom';
  }

  private createCustomMatch(): void {
    this.customMatchService
      .addCustomMatch(this.matchBuilder.asCustomMatch())
      .subscribe(
        customMatch => this.router.navigate(['/customMatches']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        })
    ;
  }

  private isPrivate(): boolean {
    return this.type === 'private';
  }

  private createPrivateMatch(): void {
    this.privateMatchService
      .addPrivateMatch(this.matchBuilder.asPrivateMatch())
      .subscribe(
        privateMatch => this.router.navigate(['/privateMatches']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

}

