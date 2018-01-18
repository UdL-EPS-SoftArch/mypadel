import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../Match.service';
import {Match} from '../Match';
import {PublicMatchService} from '../../public-match/PublicMatch.service';
import {PrivateMatchService} from '../../private-match/private-match.service';
import {CustomMatchService} from '../../custom-match/custom-match.service';
import {FilterCustomMatchStrategy} from './FilterCustomMatchStrategy';
import {FilterPublicMatchStrategy} from './FilterPublicMatchStrategy';
import {FilterPrivateMatchStrategy} from './FilterPrivateMatchStrategy';
import {FilterMatchStrategy} from './FilterMatchStrategy';

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
  filterPublicMatch: FilterPublicMatchStrategy;
  filterPrivateMatch: FilterPrivateMatchStrategy;
  filterCustomMatch: FilterCustomMatchStrategy;
  filteredMatches: Match[] = [];

  constructor(private matchService: MatchService,
              private publicMatchService: PublicMatchService,
              private customMatchService: CustomMatchService,
              private privateMatchService: PrivateMatchService,
              private route: ActivatedRoute) {
    this.filterPublicMatch = new FilterPublicMatchStrategy(this.publicMatchService);
    this.filterPrivateMatch = new FilterPrivateMatchStrategy(this.privateMatchService);
    this.filterCustomMatch = new FilterCustomMatchStrategy(this.customMatchService);
  }

  performSearch(from: Date, to: Date): void {
    this.matchService.getMatchByStartDate(from.toISOString(), to.toISOString()).subscribe(
      matches => {
        this.onSearchited.emit(matches);
      },
      error => this.errorMessage = <any>error.message);
  }

  filter(filterMatch: FilterMatchStrategy): void {
    filterMatch.filterMatch().subscribe(
      matches => {
        this.showMatches(matches, filterMatch);
      }
    );
  }

  private showMatches(matches: Match[], filterMatch: FilterMatchStrategy) {
    if (filterMatch.isFiltered()) {
      this.filteredMatches = this.filteredMatches.concat(matches);
    } else {
      this.filteredMatches = this.filteredMatches.filter((match) => !filterMatch.isSameType(match));
    }
    this.onSearchited.emit(this.filteredMatches);
  }
}
