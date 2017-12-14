import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomMatchService} from '../custom-match.service';
import {CustomMatch} from '../custom-match';

@Component({
  selector: 'app-custom-match-detail',
  templateUrl: './custom-match-detail.component.html'
})
export class CustomMatchDetailComponent implements OnInit {
  public customMatch: CustomMatch = new CustomMatch();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private customMatchService: CustomMatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.customMatchService.getCustomMatch(`${id}`).subscribe(
            customMatch => this.customMatch = customMatch,
            error => this.errorMessage = <any>error.message);
        }
      );

    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.customMatchService.getCreatorMatch(`${id}`).subscribe(
            player => this.customMatch.matchCreator = player,
            error => this.errorMessage = <any>error.message);
        }
      );
  }
}
