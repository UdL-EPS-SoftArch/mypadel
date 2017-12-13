import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PrivateMatch} from '../PrivateMatch';
import {PrivateMatchService} from '../private-match.service';

@Component({
  selector: 'app-private-match-search',
  templateUrl: './private-match-search.component.html'
})

export class PrivateMatchSearchComponent {
  @Input()
  privateMatches: PrivateMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private privateMatchService: PrivateMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.privateMatchService.getPrivateMatch(searchTerm).subscribe(
      privateMatches => { this.onSearchited.emit(privateMatches); },
      error => this.errorMessage = <any>error.message);
  }
}
