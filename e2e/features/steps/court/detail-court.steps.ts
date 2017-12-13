import { binding, when, then } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { AdminDetailsPage } from '../../../pages/admin/admin-details.page';
import { MainContentPage } from '../../../pages/main-content.page';
import {CourtDetailsPage} from '../../../pages/court/court-details.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DetailCourtSteps {
  private mainContent = new MainContentPage();
  private courtDetails = new CourtDetailsPage();

  @when(/^I click on a court with ID "([^"]*)"$/)
  public WhenIClickAdminWithName (id: string, callback): void {
    this.mainContent.clickLinkWithText(id);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see a court with availability "([^"]*)" $/)
  public iSeeACourtWithAvailability(available: string, callback): void {
    expect(this.courtDetails.getAvailable())
      .to.eventually.equal(available).and.notify(callback);
  }

  @then(/^I see a court "([^"]*)" $/)
  public iSeeACourt(indoor: string, callback): void {
    expect(this.courtDetails.getIndoor())
      .to.eventually.equal(indoor).and.notify(callback);
  }
}

export = DetailCourtSteps;
