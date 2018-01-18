
import {binding, when} from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import { ReservationFormPage } from '../../../pages/reservation/reservation-form.page';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class CreateReservationSteps {
  private datasetForm;

  @when(/^I create a reservation with duration "([^"]*)", courtType "([^"]*)" and startDate "([^"]*)"$/)
  public iCreateAReservation (duration: string, courtType: string, startDate: string, callback): void {
    new MainContentPage().clickLinkWithText('Make a new Reservation');
    browser.waitForAngular();
    this.datasetForm = new ReservationFormPage();
    this.datasetForm.setDuration(duration);
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

}

export = CreateReservationSteps;
