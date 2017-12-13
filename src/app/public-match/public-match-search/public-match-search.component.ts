import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PublicMatch} from '../PublicMatch';
import {PublicMatchService} from '../PublicMatch.service';

@Component({
  selector: 'app-public-match-search',
  templateUrl: './public-match-search.component.html'
})

export class PublicMatchSearchComponent {
  @Input()
  publicMatches: PublicMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private publicMatchService: PublicMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(from: Date, to: Date): void {
    this.publicMatchService.getPublicMatchByStartDate(from.toISOString(), to.toISOString()).subscribe(
      publicMatches => { this.onSearchited.emit(publicMatches); },
      error => {console.log(error); this.errorMessage = <any>error.message});
  }
}

