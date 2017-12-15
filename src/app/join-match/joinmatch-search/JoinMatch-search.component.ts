import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoinMatch } from '../JoinMatch';
import { JoinMatchService } from '../JoinMatch.service';

@Component({
  selector: 'app-joinmatch-search',
  templateUrl: './JoinMatch-search.component.html'
})

export class JoinMatchSearchComponent {
  @Input()
  joinMatches: JoinMatch[];
  @Output()
  onSearch: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private joinMatchService: JoinMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(idJoin: string): void {
    this.joinMatchService.getJoinMatch(idJoin).subscribe(
      joinMatches => { this.onSearch.emit(joinMatches); },
      error => this.errorMessage = <any>error.message);
  }
}
