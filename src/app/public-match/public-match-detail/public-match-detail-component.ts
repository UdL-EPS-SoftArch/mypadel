import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import { Router } from '@angular/router';
import {JoinMatch } from '../../join-match/JoinMatch';
import {PublicMatchService} from '../PublicMatch.service';
import {JoinMatchService} from '../../join-match/JoinMatch.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Match} from '../../match/Match';
import {Player} from '../../player/player';
import {PlayerService} from '../../player/player.service';

@Component({
  selector: 'app-public-match-detail',
  templateUrl: './public-match-detail.component.html',
})

export class PublicMatchDetailComponent implements OnInit {
  public public_match: PublicMatch;
  public errorMessage: string;
  public joinMatches: JoinMatch[] = [];
  public joinMatch: JoinMatch;
  public showJoin: boolean;
  public match: Match;
  public players: Player[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publicMatchService: PublicMatchService,
              private joinMatchService: JoinMatchService,
              private playerService: PlayerService,
              private authentication: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.joinMatch = new JoinMatch();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.publicMatchService.getPublicMatch(id)
            .subscribe(
            public_match => this.public_match = this.formattedPublicMatches(public_match),
            error => this.errorMessage = <any>error.message);
        }

      );

    this.joinMatchService.getJoinMatchByPlayer(this.authentication.getCurrentUser().username)
      .subscribe(
        (joinMatch: JoinMatch[]) => {
          this.joinMatches = joinMatch;

          if(this.joinMatches.length === 0){
            this.showJoin = true;
          }else {
            this.joinMatches.forEach(t => {
              this.joinMatchService.getMatchFromJoinMatch(t.id.toString())
                .subscribe(
                  (match: Match) => {
                    this.match = match;

                    if (this.match.id !== this.public_match.id) {
                      this.showJoin = true;
                    } else {
                      this.showJoin = false;
                    }
                  },
                  error => this.errorMessage = <any>error.message);
            })
          }},
        error => this.errorMessage = <any>error.message);
  }
  public submitJoin(){
    this.joinMatch.date_match = this.public_match.startDate;
    this.joinMatch.match = this.public_match;

    this.playerService.getAllPlayers()
      .subscribe(
        (players: Player[]) => {
          this.players = players;
          this.players.forEach(t => {
            if(t.username === this.authentication.getCurrentUser().username){
              this.joinMatch.player = t;
            }
          })
        },
      );

      this.joinMatchService.addJoinMatch(this.joinMatch)
        .subscribe(
          joinMatch => this.router.navigate(['/joinMatches']),
          error => {
            this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
          });
    }

  private formattedPublicMatches(publicMatches: PublicMatch): PublicMatch {
      publicMatches.duration = publicMatches.duration.split('PT')[1];
      return publicMatches;
  }




}
