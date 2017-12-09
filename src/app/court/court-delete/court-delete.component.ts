import {Component, OnInit} from '@angular/core';
import {Court} from '../Court';
import {ActivatedRoute, Router} from '@angular/router';
import {CourtService} from '../court.service';

@Component({
  selector: 'app-court-delete',
  templateUrl: './court-delete.component.html',
  styleUrls: ['./court-delete.component.css']
})
export class CourtDeleteComponent implements OnInit {
  public court: Court;
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
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

  deleteCourt() {
    this.courtService.deleteCourt(this.court).subscribe(
      result => this.router.navigate(['courts']),
      error => this.errorMessage = <any>error.message);
  }
}
