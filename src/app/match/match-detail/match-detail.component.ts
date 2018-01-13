import {Component, OnInit} from '@angular/core';
import {Match} from '../Match';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../Match.service';
import {MatchJoinRequestService} from '../../match-join-request/match-join-request.service';
import {MatchJoinRequest} from "../../match-join-request/MatchJoinRequest";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html'
})
export class MatchDetailComponent implements OnInit {
  public match: Match;
  public matchJoinRequest:MatchJoinRequest;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private matchService: MatchService,
              private matchJoinRequestService:MatchJoinRequestService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.matchService.getMatch(`${id}`).subscribe(
            match => {
              this.match = match;
              this.setLinkedAttributes(match);
            },
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  setLinkedAttributes(match: Match) {
    this.matchService.getMatchCreator(match._links.matchCreator.href).subscribe(
      player => this.match.matchCreator = player,
      error => this.errorMessage = <any>error.message
    );
    this.matchService.getMatchInvitations(match._links.invitations.href).subscribe(
      matchInvitations => this.match.invitations = matchInvitations,
      error => this.errorMessage = <any>error.message
    );
  }
  isLoggedIn(): boolean {
    return this.matchService.isLoggedIn();
  }
  createMatchJoinRequest(): void {
    this.matchJoinRequest = new MatchJoinRequest();
    this.matchJoinRequest.message="Hi I want to join in your match !";
    this.matchJoinRequest.customMatch=`${environment.API}/customMatches/${this.match.id}`
    this.matchJoinRequest.eventDate=this.match.startDate;

    this.matchJoinRequestService.addMatchJoinRequest(this.matchJoinRequest)
      .subscribe(
        matchJoinRequest => this.router.navigate([matchJoinRequest.uri]),

        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });



  }
  customMatchURI():string{
    return `/customMatches/${this.match.id}`

  }

}
