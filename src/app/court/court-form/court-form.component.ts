import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Court} from '../Court';
import {Router} from '@angular/router';
import {CourtService} from '../court.service';

@Component({
  selector: 'app-court-form',
  templateUrl: './court-form.component.html',
  styleUrls: ['./court-form.component.css'],
})
export class CourtFormComponent implements OnInit {

  public court: Court;
  public courtForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private courtService: CourtService) {
    this.courtForm = fb.group({
      'available': ['Available'],
      'isIndoor': ['Indoor'],
    });
    this.court = new Court();
    this.court.available = false;
    this.court.isIndoor = false;
  }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log('adding: ', this.court);
    this.courtService.addCourt(this.court)
      .subscribe(
        court => this.router.navigate(['/courts/' + this.court.id]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  changeAvailability(): void {
    const prevValue = this.court.available;
    this.court.available = !prevValue;
  }

  changeIndoor(): void {
    const prevValue = this.court.isIndoor;
    this.court.isIndoor = !prevValue;
    console.log(this.court.isIndoor);
  }

}
