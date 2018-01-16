import { binding, when, then } from 'cucumber-tsflow';
import {browser} from 'protractor';
import {PublicMatchDetailsPage} from '../../../pages/public-match/public-match-details.page';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class DetailsPublicMatchSteps {
  private publicMatchDetails = new PublicMatchDetailsPage();
  private mainContent = new MainContentPage();

  @when(/^I click public match number "([^"]*)"$/)
  public iClickPublicMatch(id: string, callback): void {
    this.mainContent.clickLinkWithText(id);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see a public match with duration "([^"]*)", court type "([^"]*)" and level "([^"]*)"$/)
  public iSeePubMaDet(duration: string, courtType: string, level: string, callback): void {
    expect(this.publicMatchDetails.getDuration()).to.eventually.equal(duration);
    expect(this.publicMatchDetails.getCourtType()).to.eventually.equal(courtType);
    expect(this.publicMatchDetails.getLevel()).to.eventually.equal(level);
    callback();
  }
}
