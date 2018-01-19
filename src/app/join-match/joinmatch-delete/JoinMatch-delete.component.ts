import {Component, OnInit} from '@angular/core';
import {JoinMatch} from '../JoinMatch';
import {ActivatedRoute, Router} from '@angular/router';
import {JoinMatchService} from '../JoinMatch.service';

@Component({
  selector: 'app-joinmatch-delete',
  templateUrl: './JoinMatch-delete.component.html',
})

export class JoinMatchDeleteComponent implements OnInit {
  public joinMatch: JoinMatch;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private joinMatchService: JoinMatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.joinMatchService.getJoinMatch(id).subscribe(
            joinMatch => this.joinMatch = joinMatch,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  deleteJoinMatch() {
    this.joinMatchService.deleteJoinMatch(this.joinMatch).subscribe(
      result => this.router.navigate(['joinMatches']),
      error => this.errorMessage = <any>error.message);
  }
}
