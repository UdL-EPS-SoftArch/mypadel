import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoinMatch } from '../JoinMatch';
import { JoinMatchService } from '../JoinMatch.service';

@Component({
  selector: 'app-JoinMatch-search',
  templateUrl: './JoinMatch-search.component.html'
})

export class JoinMatchSearchComponent {
  @Input()
  joinMatches: JoinMatch[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private joinMatchService: JoinMatchService,
              private route: ActivatedRoute) {
  }

  performSearch(idJoin: number): void {
    this.joinMatchService.getJoinMatch(idJoin).subscribe(
      joinMatches => { this.onSearchited.emit(joinMatches); },
      error => this.errorMessage = <any>error.message);
  }
}
