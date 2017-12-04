import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PublicMatchService} from '../PublicMatch.service';
import {PublicMatch} from '../PublicMatch';


@Component({
  selector: 'app-public-match-delete',
  templateUrl: './public-match-delete.component.html'
})
export class PublicMatchDeleteComponent implements OnInit {
  public publicMatch: PublicMatch = new PublicMatch();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publicMatchService: PublicMatchService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.publicMatchService.getPublicMatch(Number(`${id}`)).subscribe(
            publicMatch => this.publicMatch = publicMatch,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  deletePublicMatch() {
    this.publicMatchService.deletePublicMatch(this.publicMatch).subscribe(
      result => this.router.navigate(['publicMatches']),
      error => this.errorMessage = <any>error.message);
  }
}
