import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html'
})
export class PlayerEditComponent implements OnInit {
  public player: Player;
  public playerForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService) {
    this.playerForm = fb.group({
      'username': [{value: '', disabled: true}, Validators.required],
      'email': [Validators.email],
    });
  }

  ngOnInit() {
    this.player = new Player();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.playerService.getPlayer(id).subscribe(
          player => this.player = player,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.playerService.updatePlayer(this.player)
      .subscribe(
        player => this.router.navigate([player.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
