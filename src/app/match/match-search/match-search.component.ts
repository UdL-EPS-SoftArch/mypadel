import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../Match.service';
import {Match} from '../Match';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {PrivateMatchService} from '../../private-match/private-match.service';
import {CustomMatchService} from '../../custom-match/custom-match.service';

@Component({
  selector: 'app-match-search',
  templateUrl: './match-search.component.html'
})

export class MatchSearchComponent {
  @Input()
  matches: Match[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;

  constructor(private matchService: MatchService,
              private publicMatchService: PublicMatchService,
              private customMatchService: CustomMatchService,
              private privateMatchService: PrivateMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(from: Date, to: Date): void {
    this.matchService.getMatchByStartDate(from.toISOString(), to.toISOString()).subscribe(
      matches => {
        this.onSearchited.emit(matches);
      },
      error => this.errorMessage = <any>error.message);
  }

  searchPublic(): void {
    this.publicMatchService.getAllPublicMatches().subscribe(
      matches => {
        this.onSearchited.emit(matches);
      },
      error => this.errorMessage = <any>error.message);
  }

  searchPrivate(): void {
    this.privateMatchService.getAllPrivateMatches().subscribe(
      matches => {
        this.onSearchited.emit(matches);
      },
      error => this.errorMessage = <any>error.message);
  }

  searchCustom(): void {
    this.customMatchService.getAllCustomMatches().subscribe(
      matches => {
        this.onSearchited.emit(matches);
      },
      error => this.errorMessage = <any>error.message);
  }
}
