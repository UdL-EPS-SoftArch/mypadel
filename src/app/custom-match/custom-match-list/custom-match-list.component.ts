import { Component, OnInit } from '@angular/core';
import {CustomMatch} from '../custom-match';
import {CustomMatchService} from '../custom-match.service';

@Component({
  selector: 'app-custom-match-list',
  templateUrl: './custom-match-list.component.html'
})
export class CustomMatchListComponent implements OnInit {
  public customMatches: CustomMatch[] = [];
  public totalCustomMatches: number;
  public errorMessage = '';

  constructor(private customMatchService: CustomMatchService) {}

  ngOnInit() {
    this.customMatchService.getAllCustomMatches()
      .subscribe(
        (customMatches: CustomMatch[]) => {
          this.customMatches = customMatches;
          this.totalCustomMatches = customMatches.length; },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(customMatches) {
    this.customMatches = customMatches;
  }
}
