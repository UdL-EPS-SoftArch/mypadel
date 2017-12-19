import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomMatchService} from "../../custom-match/custom-match.service";
import {CustomMatch} from "../../custom-match/custom-match";
import {MatchJoinRequest} from "../MatchJoinRequest";

@Component({
  selector: 'app-match-join-request-form',

})
export class MatchJoinRequestFormComponent implements OnInit {
  public matchJoinRequest:MatchJoinRequest;
  public customMatch: CustomMatch;
  public customMatchForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private customMatchService: CustomMatchService,
              private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.matchJoinRequest=new MatchJoinRequest();
    this.matchJoinRequest.message="Hi I want to join in your match !";
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.customMatchService.getCustomMatch(id).subscribe(
          customMatch => this.customMatch = customMatch,
          error => this.errorMessage = <any>error.message));
    this.matchJoinRequest.eventDate=this.customMatch.startDate;
    this.matchJoinRequest.customMatch=this.customMatch;
  }



}
