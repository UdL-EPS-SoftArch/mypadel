import { Component, OnInit } from '@angular/core';
import {MatchInvitation} from '../MatchInvitation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatchInvitationService} from '../MatchInvitation.service';

@Component({
  selector: 'app-invite-create',
  templateUrl: './invite-create.component.html',
  providers: [MatchInvitationService]
})
export class InviteCreateComponent implements OnInit {
  public matchInvitation: MatchInvitation;
  public matchInvitationForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private matchInvitationService: MatchInvitationService) {/*dohvataj sa forme podatke i validiraj*/
    this.matchInvitationForm = fb.group({
      'message': ['Match invitation message', Validators.required]
    });
  }

  ngOnInit() {
    this.matchInvitation = new MatchInvitation();
  }

  onSubmit(): void {
    this.matchInvitationService.addMatchInvitation(this.matchInvitation)
      .subscribe(
        matchInvitation => this.router.navigate([matchInvitation.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
