import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {JoinMatch } from '../../join-match/JoinMatch';
import {JoinMatchService} from '../../join-match/JoinMatch.service';

@Component({
  selector: 'app-joinmatch-detail',
  templateUrl: './JoinMatch-detail.component.html',
})

export class JoinMatchDetailComponent implements OnInit {
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





}
