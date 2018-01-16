import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomMatchService} from '../custom-match.service';
import {CustomMatch} from '../custom-match';
import {Player} from '../../player/player';
import {MatchJoinRequest} from '../../match-join-request/MatchJoinRequest';
import {MatchJoinRequestService} from '../../match-join-request/match-join-request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../../player/player.service';
import {User} from '../../login-basic/user';

@Component({
  selector: 'app-custom-match-detail',
  templateUrl: './custom-match-detail.component.html'
})
export class CustomMatchDetailComponent implements OnInit {
  public customMatch: CustomMatch = new CustomMatch();
  public errorMessage: string;
  public matchCreator: Player;
  public matchJoinRequest: MatchJoinRequest;
  public matchJoinRequestForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private customMatchService: CustomMatchService,
              private matchJoinRequestService: MatchJoinRequestService,
              private router: Router,
              private userService: PlayerService,
  ) {this.matchJoinRequestForm = fb.group({
    'message': ['MatchJoinRequest message', Validators.maxLength(255)],
  }); }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.customMatchService.getCustomMatch(`${id}`).subscribe(
            customMatch => this.customMatch = customMatch,
            error => this.errorMessage = <any>error.message);
        }
      );

    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.customMatchService.getCreatorMatch(`${id}`).subscribe(
            player => this.matchCreator = player,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  createMatchJoinRequest(): void {
    this.matchJoinRequest = new MatchJoinRequest();
    this.matchJoinRequest.message = 'Hi I want to join in your match !';
    this.matchJoinRequest.customMatch = this.customMatch.uri;
    this.matchJoinRequest.eventDate = this.customMatch.startDate;

    this.matchJoinRequestService.addMatchJoinRequest(this.matchJoinRequest)
      .subscribe(
            matchJoinRequest => this.router.navigate([matchJoinRequest.uri]),

            error => {
              this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
            });



  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
  getCurrentUser(): User {
    return this.userService.getCurrentUser();
  }

}
