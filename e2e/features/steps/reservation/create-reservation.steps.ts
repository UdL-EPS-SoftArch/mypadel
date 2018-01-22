
import { binding, when } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { ReservationFormPage } from '../../../pages/reservation/reservation-form.page';
import { MainContentPage } from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class CreateReservationSteps {
  private form;

  @when(/^I create a reservation with duration "([^"]*)", courtType "([^"]*)" and startDate "([^"]*)"$/)
  public iCreateAReservation (duration: string, courtType: string, startDate: string, callback): void {
    new MainContentPage().clickLinkWithText('Make a new Reservation');
    browser.waitForAngular();
    this.form = new ReservationFormPage();
    this.form.setDuration(duration);
    // this.form.setStartDate(startDate);
    this.form.setCourtType(courtType);
    this.form.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateReservationSteps;
