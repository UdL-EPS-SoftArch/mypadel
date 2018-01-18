import { binding, then } from 'cucumber-tsflow';
import {ReservationListPage} from '../../../pages/reservation/reservation-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class ListReservationSteps {
  private reservationList = new ReservationListPage();

  @then(/^I see (\d+) reservations/)
  public iSeeP(count: string, callback): void {
    expect(this.reservationList.getReservationCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}

export = ListReservationSteps;
