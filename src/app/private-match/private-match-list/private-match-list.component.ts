import { Component, OnInit } from '@angular/core';
import {PrivateMatch} from '../PrivateMatch';
import {PrivateMatchService} from '../PrivateMatch.service';

@Component({
  selector: 'app-private-match-list',
  templateUrl: './private-match-list.component.html'
})
export class PrivateMatchListComponent implements OnInit {
  public PrivateMatches: PrivateMatch[] = [];
  public totalPrivateMatches = 0;
  public errorMessage = '';

  constructor(private PrivateMatchService: PrivateMatchService) {}

  ngOnInit() {
    this.PrivateMatchService.getAllPrivateMatches()
      .subscribe(
        (PrivateMatches: PrivateMatch[]) => {
          this.PrivateMatches = PrivateMatches;
          this.totalPrivateMatches = PrivateMatches.length; },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(PrivateMatches) {
    this.PrivateMatches = PrivateMatches;
  }
}
