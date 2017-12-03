import {Component, OnInit} from '@angular/core';
import {Court} from '../Court';
import {ActivatedRoute} from '@angular/router';
import {CourtService} from '../court.service';

@Component({
  selector: 'app-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.css']
})
export class CourtDetailComponent implements OnInit {
  public court: Court;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private courtService: CourtService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.courtService.getCourt(`${id}`).subscribe(
            court => this.court = court,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

}
