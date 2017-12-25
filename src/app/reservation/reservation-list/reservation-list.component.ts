import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
})
export class ReservationListComponent implements OnInit {

  public reservations: Reservation[] = [];
  public totalReservations = 0;
  public errorMessage = '';

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservationService.getAllReservations()
      .subscribe(
        (reservations: Reservation[]) => {
          this.reservations = reservations;
          this.totalReservations = reservations.length; },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(reservations) {
    this.reservations = reservations;
  }
}
