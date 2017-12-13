import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CustomMatch} from '../custom-match';
import {CustomMatchService} from '../custom-match.service';

@Component({
  selector: 'app-custom-match-search',
  templateUrl: './custom-match-search.component.html'
})

export class CustomMatchSearchComponent {
  @Input()
  customMatches: CustomMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private customMatchService: CustomMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: number): void {
    this.customMatchService.getCustomMatch(searchTerm).subscribe(
      customMatches => { this.onSearchited.emit(customMatches); },
      error => this.errorMessage = <any>error.message);
  }
}

