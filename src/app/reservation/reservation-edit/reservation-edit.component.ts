import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
})
export class ReservationEditComponent implements OnInit {


  public reservationForm: FormGroup;
  public reservation: Reservation;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private reservationService: ReservationService) {

    this.reservationForm = fb.group({
      'startdate': ['Reservation startDate', Validators.required],
      'duration': ['Reservation duration', Validators.required],
      'courtType': ['Court type', Validators.required]
    });
  }

  ngOnInit() {
    this.reservation = new Reservation();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.reservationService.getReservation(id).subscribe(
          reservation=> this.reservation = reservation,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.reservationService.updateReservation(this.reservation)
      .subscribe(
        reservation => this.router.navigate([reservation.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
