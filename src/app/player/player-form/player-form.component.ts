import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html'
})
export class PlayerFormComponent implements OnInit {
  public player: Player;
  public playerForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private playerService: PlayerService) {
    this.playerForm = fb.group({
      'username': ['Player username', Validators.required],
      'email': ['Player e-mail', Validators.email],
      'password': ['Player password', Validators.required],
    });
  }
  ngOnInit() {
    this.player = new Player();
  }
  onSubmit(): void {
    this.playerService.addPlayer(this.player)
      .subscribe(
        player => this.router.navigate([player.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
