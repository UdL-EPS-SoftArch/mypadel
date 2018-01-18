import { Component, OnInit } from '@angular/core';
import {CustomMatchService} from '../../custom-match/custom-match.service';
import {MatchJoinRequest} from '../MatchJoinRequest';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-match-join-request-list',
  templateUrl: './match-join-request-list.component.html'
})
export class MatchJoinRequestListComponent implements OnInit {
  public matchJoinRequests: MatchJoinRequest[] = [];
  public totalMatchJoinRequests = 0;
  public errorMessage = '';

  constructor(private customMatchService: CustomMatchService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
    this.customMatchService.getMatchJoinRequestByCustomMatch(id)
      .subscribe(
        (matchJoinRequests: MatchJoinRequest[]) => {
          this.matchJoinRequests = matchJoinRequests;
          this.totalMatchJoinRequests = matchJoinRequests.length; },
        error => this.errorMessage = <any>error.message);
  });
  }







}
