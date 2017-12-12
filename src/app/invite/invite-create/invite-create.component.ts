import { Component, OnInit } from '@angular/core';
import {MatchInvitation} from '../MatchInvitation';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatchInvitationService} from '../MatchInvitation.service';

@Component({
  selector: 'app-invite-create',
  templateUrl: './invite-create.component.html',
  styleUrls: ['./invite-create.component.css']
})
export class InviteCreateComponent implements OnInit {
  public matchInvitation: MatchInvitation;
  public matchInvitationForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private matchInvitationService: MatchInvitationService) {/*dohvataj sa forme podatke i validiraj*/
  }

  ngOnInit() {
    this.matchInvitation = new MatchInvitation();
  }

  onSubmit(): void {
  }
}
