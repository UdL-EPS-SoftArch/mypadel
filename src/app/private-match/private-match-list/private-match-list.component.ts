import {Component, OnInit} from '@angular/core';
import {PrivateMatch} from '../PrivateMatch';
import {PrivateMatchService} from '../private-match.service';

@Component({
  selector: 'app-private-match-list',
  templateUrl: './private-match-list.component.html'
})
export class PrivateMatchListComponent implements OnInit {
  public privateMatches: PrivateMatch[] = [];
  public totalPrivateMatches = 0;
  public errorMessage = '';

  constructor(private privateMatchService: PrivateMatchService) {
  }

  ngOnInit() {
    this.privateMatchService.getAllPrivateMatches()
      .subscribe(
        (privateMatches: PrivateMatch[]) => {
          this.privateMatches = privateMatches;
          this.totalPrivateMatches = privateMatches.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(privateMatches) {
    this.privateMatches = privateMatches;
  }
}
