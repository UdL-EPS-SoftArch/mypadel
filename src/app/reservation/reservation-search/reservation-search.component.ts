import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from "../reservation";
import { ReservationService } from "../reservation.service";

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
})
export class ReservationSearchComponent{

  @Input()
  reservations: Reservation[];
  @Output()
  onSearchited: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private reservationService: ReservationService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.reservationService.getReservationsByStartDate(searchTerm).subscribe(
      reservations => { this.onSearchited.emit(reservations); },
      error => this.errorMessage = <any>error.message);
  }
}
