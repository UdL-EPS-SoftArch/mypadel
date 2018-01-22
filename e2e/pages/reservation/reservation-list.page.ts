import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class ReservationListPage {

  private reservations: ElementArrayFinder;

  constructor() {
    this.reservations = this.getReservation();
  }

  getReservation(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getReservationPosition(position: number): ElementFinder {
    return this.reservations.get(position - 1);
  }

  getReservationCount(): promise.Promise<number> {
    return this.reservations.count();
  }
}
