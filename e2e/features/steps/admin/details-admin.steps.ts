import { binding, when, then } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { AdminDetailsPage } from '../../../pages/admin/admin-details.page';
import { MainContentPage } from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DetailsAdminsSteps {
  private mainContent = new MainContentPage();
  private adminsDetails = new AdminDetailsPage();

  @when(/^I click admin with name "([^"]*)"$/)
  public WhenIClickAdminWithName (name: string, callback): void {
    this.mainContent.clickLinkWithText(name);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see an administrator with name "([^"]*)"$/)
  public iSeeAdminWithName(name: string, callback): void {
    expect(this.adminsDetails.getUsername())
    .to.eventually.equal(name).and.notify(callback);
  }

  @then(/^I see an administrator with e-mail "([^"]*)"$/)
  public iSeeAdminWithEMail(email: string, callback): void {
    expect(this.adminsDetails.getEMail())
    .to.eventually.equal(email).and.notify(callback);
  }
}

export = DetailsAdminsSteps;
