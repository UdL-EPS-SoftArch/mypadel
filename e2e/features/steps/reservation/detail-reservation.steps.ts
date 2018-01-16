import {binding, when ,then} from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import { ReservationDetailPage } from '../../../pages/reservation/reservation-detail.page';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class CreateReservationSteps {
  private mainContent = new MainContentPage();
  private reservationDetails = new ReservationDetailPage();

  @then(/^I see a reservation with a startDate \"([^\"]*)\", courtType \"([^\"]*)\" and  duration \"([^\"]*)\"$/)
  public iSeeAReservationWithStarDate (startDate: string, courtType: string, duration: string, callback): void {
    expect(this.reservationDetails.getStartDate())
      .to.eventually.equal(startDate).and.notify(callback);
    expect(this.reservationDetails.getCourtType())
      .to.eventually.equal(courtType).and.notify(callback);
    expect(this.reservationDetails.getDuration())
      .to.eventually.equal(duration).and.notify(callback);
 }

 @when(/^I click on a reservation with ID \"([^\"]*)\"$/)
 public iClickOnAReservationWithID (id: string, callback): void {
   this.mainContent.clickLinkWithText(id);
   browser.waitForAngular();
   callback();
 }
}

export = CreateReservationSteps;
