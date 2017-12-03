import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Court} from '../Court';
import {ActivatedRoute, Router} from '@angular/router';
import {CourtService} from '../court.service';

@Component({
  selector: 'app-court-edit',
  templateUrl: './court-edit.component.html',
  styleUrls: ['./court-edit.component.css']
})
export class CourtEditComponent implements OnInit {
  public court: Court;
  public courtForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private courtService: CourtService) {
    this.courtForm = fb.group(
      {
        'indoor': [],
        'available': []
      }
    );
  }

  ngOnInit() {
    this.court = new Court();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.courtService.getCourt(id).subscribe(
          court => this.court = court,
          error => this.errorMessage = <any>error.message
        )
      );
  }

  onSubmit(): void {
    this.courtService.updateCourt(this.court)
      .subscribe(
        court => this.router.navigate(['/courts/' + court.id]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }

}
