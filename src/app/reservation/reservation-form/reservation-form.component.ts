import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from "../reservation";
import { ReservationService } from '../reservation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
})
export class ReservationFormComponent implements OnInit {

  public reservationForm: FormGroup;
  public reservation: Reservation;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private reservationService: ReservationService) {

   this.reservationForm = fb.group({
      'startDate': ['Reservation startDate', Validators.required],
      'duration': ['Reservation duration', Validators.required],
      'courtType': ['Court type', Validators.required]
    });

  }

  ngOnInit() {
    this.reservation = new Reservation();
  }

  onSubmit(): void {
    this.reservationService.addReservation(this.reservation)
      .subscribe(
        reservation => this.router.navigate([reservation.uri]),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
