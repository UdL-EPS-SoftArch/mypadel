import { Component, OnInit } from '@angular/core';
import { Reservation } from "../reservation";
import { ReservationService } from "../reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  public reservations: Reservation[] = [];
  public totalreservations: number;
  public errorMessage = '';

  constructor(private ReservationService: ReservationService) {}

  ngOnInit() {
    this.ReservationService.getAllReservations()
      .subscribe(
        (reservations: Reservation[]) => {
          this.reservations = reservations;
          this.totalreservations = reservations.length; },
        error => this.errorMessage = <any>error.message);
  }

  onSearch(reservations) {
    this.reservations = reservations;
  }

}
