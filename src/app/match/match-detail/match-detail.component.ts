import {Component, OnInit} from '@angular/core';
import {Match} from '../Match';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../Match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html'
})
export class MatchDetailComponent implements OnInit {
  public match: Match;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private matchService: MatchService) {
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

}
