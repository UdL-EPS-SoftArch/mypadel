import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import { Router } from '@angular/router';
import {JoinMatch } from "../../JoinMatch/JoinMatch";
import {PublicMatchService} from '../PublicMatch.service';
import {JoinMatchService} from "../../JoinMatch/JoinMatch.service";

@Component({
  selector: 'app-public-match-detail',
  templateUrl: './public-match-detail.component.html',
})

export class PublicMatchDetailComponent implements OnInit {
  public public_match: PublicMatch;
  public errorMessage: string;
  public joinMatch: JoinMatch;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publicMatchService: PublicMatchService,
              private joinMatchService: JoinMatchService) {
  }

  ngOnInit() {
    this.joinMatch = new JoinMatch();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.publicMatchService.getPublicMatch(id).subscribe(
            public_match => this.public_match = this.formattedPublicMatches(public_match),
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  private formattedPublicMatches(publicMatches: PublicMatch): PublicMatch {
      publicMatches.duration = publicMatches.duration.split('PT')[1];
      return publicMatches;
  }


  onSubmit(): void {
    this.joinMatchService.addJoinMatch(this.joinMatch)
      .subscribe(
        joinMatch => this.router.navigate(['joinMatches' + joinMatch.id]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

}
