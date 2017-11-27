import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PublicMatch} from "../PublicMatch";
import {PublicMatchService} from "../PublicMatch.service";

@Component({
  selector: 'app-public-match-search',
  templateUrl: './public-match-search.component.html'
})

export class PublicMatchSearchComponent {
  @Input()
  publicMatch: PublicMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private publicMatchService: PublicMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.publicMatchService.getPublicMatch(searchTerm).subscribe(
      publicMatches => { this.onSearchited.emit(publicMatches); },
      error => this.errorMessage = <any>error.message);
  }
}

