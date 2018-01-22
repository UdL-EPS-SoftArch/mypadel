import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {MatchInvitation} from '../MatchInvitation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatchInvitationService} from '../MatchInvitation.service';
import {Player} from '../../player/player';
import {PlayerService} from '../../player/player.service';


@Component({
  selector: 'app-invite-create',
  templateUrl: './invite-create.component.html',
  providers: [MatchInvitationService, PlayerService]
})
export class InviteCreateComponent implements OnInit {
  public matchInvitation: MatchInvitation;
  public matchInvitationForm: FormGroup;
  public players: Player[] = [];
  public totalPlayers = 0;
  public errorMessage: string;
  constructor(private fb: FormBuilder,
              private router: Router,
              private matchInvitationService: MatchInvitationService,
              private userService: PlayerService) {/*dohvataj sa forme podatke i validiraj*/
    this.matchInvitationForm = fb.group({
      'message': ['Match invitation message', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getAllPlayers()
      .subscribe(
        (players: Player[]) => {
          this.players = players;
          this.totalPlayers = players.length; },
        error => this.errorMessage = <any>error.message);

    this.matchInvitation = new MatchInvitation();
  }

  onSearch(players) {
    this.players = players ;
  }
  onSubmit(): void {
    this.matchInvitationService.addMatchInvitation(this.matchInvitation)
      .subscribe(
        matchInvitation => this.router.navigate([matchInvitation.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
  storeInvitedPlayer(username): void {
      this.matchInvitation.setInvitedPlayer(username);
      console.log(username);
  }
}
