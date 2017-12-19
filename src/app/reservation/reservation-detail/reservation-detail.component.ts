import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';


@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {


  public reservation: Reservation = new Reservation();
  public errorMessage: string;
  constructor(private route: ActivatedRoute,
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

}
