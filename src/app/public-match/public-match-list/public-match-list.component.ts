import { Component, OnInit } from '@angular/core';
import {PublicMatch} from '../PublicMatch';
import {PublicMatchService} from '../PublicMatch.service';

@Component({
  selector: 'app-public-match-list',
  templateUrl: './public-match-list.component.html'
})
export class PublicMatchListComponent implements OnInit {
  public publicMatches: PublicMatch[] = [];
  public totalPublicMatches = 0;
  public errorMessage = '';

  constructor(private publicMatchService: PublicMatchService) {}

  ngOnInit() {
    this.publicMatchService.getAllPublicMatches()
      .subscribe(
        (publicMatches: PublicMatch[]) => {
          this.publicMatches = this.formattedPublicMatches(publicMatches);
          this.totalPublicMatches = publicMatches.length; },
        error => this.errorMessage = <any>error.message);
  }

  private formattedPublicMatches(publicMatches: PublicMatch[]): PublicMatch[] {
    publicMatches.forEach((match) => {
      match.duration = match.duration.split('PT')[1];
    });
    return publicMatches;
  }

  onSearch(publicMatches) {
    this.publicMatches = publicMatches;
  }
}
