import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Player} from '../../player/player';
import {MatchJoinRequest} from '../../match-join-request/MatchJoinRequest';
import {MatchJoinRequestService} from '../../match-join-request/match-join-request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomMatch} from '../../custom-match/custom-match';
import {Status} from "../Status";

@Component({
  selector: 'app-match-join-request-detail',
  templateUrl: './match-join-request-detail.component.html'
})
export class MatchJoinRequestDetailComponent implements OnInit {
  public errorMessage: string;
  public matchJoinRequest : MatchJoinRequest;
  public player: Player;
  public customMatch: CustomMatch;
  public matchJoinRequestForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private matchJoinRequestService: MatchJoinRequestService,
              private router: Router,
  ) {
    this.matchJoinRequestForm = fb.group({
      'status': [{value: '' }],
    });
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.matchJoinRequestService.getMatchJoinRequest(`${id}`).subscribe(
            matchJoinRequest => this.matchJoinRequest = matchJoinRequest,
            error => this.errorMessage = <any>error.message);
        }
      );
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.matchJoinRequestService.getMatchJoinRequestPlayer(`${id}`).subscribe(
            player => this.player = player,
            error => this.errorMessage = <any>error.message);
        }
      );

    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.matchJoinRequestService.getMatchJoinRequestCustomMatch(`${id}`).subscribe(
            customMatch => this.customMatch = customMatch,
            error => this.errorMessage = <any>error.message);
        }
      );

  }
  accept(){
    this.matchJoinRequest.status=Status.ACCEPTED;
    this.matchJoinRequestService.updateMatchJoinRequest(this.matchJoinRequest)
      .subscribe(
        player => this.router.navigate([player.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);

  }
  reject(){
    this.matchJoinRequest.status=Status.REJECTED;
    this.matchJoinRequestService.updateMatchJoinRequest(this.matchJoinRequest)
      .subscribe(
        player => this.router.navigate([player.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);

  }
  isPENDING():boolean{
    return this.matchJoinRequest.status==Status.PENDING;

  }



}
