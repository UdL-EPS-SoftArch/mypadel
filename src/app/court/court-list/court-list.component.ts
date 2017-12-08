import {Component, OnInit} from '@angular/core';
import {Court} from '../Court';
import {CourtService} from '../court.service';

@Component({
  selector: 'app-court-list',
  templateUrl: './court-list.component.html',
  styleUrls: ['./court-list.component.css']
})
export class CourtListComponent implements OnInit {

  public courts: Court[] = [];
  public totalCourts = 0;
  public errorMessage = '';

  constructor(private courtService: CourtService) {
  }

  ngOnInit() {
    this.courtService.getAllCourts()
      .subscribe(
        (courts: Court[]) => {
          this.courts = courts;
          this.totalCourts = courts.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(courts) {
    this.courts = courts;
  }

}
