import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.component.html',
  styleUrls: ['./reservation-delete.component.css']
})
export class ReservationDeleteComponent implements OnInit {

  public reservation: Reservation = new Reservation();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationService: ReservationService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.reservationService.getReservation(`${id}`).subscribe(
            reservation=> this.reservation = reservation,
            error => this.errorMessage = <any>error.message);
        }
      );
  }

  deleteReservation() {
    this.reservationService.deleteReservation(this.reservation).subscribe(
      result => this.router.navigate(['reservations']),
      error => this.errorMessage = <any>error.message);
  }

}
