import {binding, then, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {MainContentPage} from '../../../pages/main-content.page';
import {PrivateMatchDetailsPage} from '../../../pages/private-match/private-match-details.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class DetailsPrivateMatch {
  private privateMatchDetails = new PrivateMatchDetailsPage();
  private mainContent = new MainContentPage();

  @when(/^I click private match number "([^"]*)"$/)
  public iClickPrivateMatch(id: string, callback): void {
    this.mainContent.clickLinkWithText(id);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see a private match with duration "([^"]*)", court type "([^"]*)"$/)
  public iSeePrivMaDet(duration: string, courtType: string, callback): void {
    expect(this.privateMatchDetails.getDuration()).to.eventually.equal(duration);
    expect(this.privateMatchDetails.getCourtType()).to.eventually.equal(courtType);
    callback();
  }
}
