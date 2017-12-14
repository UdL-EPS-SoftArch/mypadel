import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CustomMatch} from '../custom-match';
import {CustomMatchService} from '../custom-match.service';

@Component({
  selector: 'app-custom-match-delete',
  templateUrl: './custom-match-delete.component.html'
})
export class CustomMatchDeleteComponent implements OnInit {
  public customMatch: CustomMatch = new CustomMatch();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public customMatchService: CustomMatchService) {
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
  }

  deleteCustomMatch() {
    this.customMatchService.deleteCustomMatch(this.customMatch).subscribe(
      result => this.router.navigate(['customMatches']),
      error => this.errorMessage = <any>error.message);
  }
}
