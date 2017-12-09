import { binding, when, then } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { MainContentPage } from '../../../pages/main-content.page';
import {PlayerDetailsPage} from '../../../pages/player/player-details.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DetailsPlayersSteps {
  private mainContent = new MainContentPage();
  private playersDetails = new PlayerDetailsPage();

  @when(/^I click player with name "([^"]*)"$/)
  public WhenIClickAdminWithName (name: string, callback): void {
    this.mainContent.clickLinkWithText(name);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see a player with name "([^"]*)"$/)
  public iSeePlayerWithName(name: string, callback): void {
    expect(this.playersDetails.getUsername())
      .to.eventually.equal(name).and.notify(callback);
  }

  @then(/^I see an player with e-mail "([^"]*)"$/)
  public iSeePlayerWithEMail(email: string, callback): void {
    expect(this.playersDetails.getEMail())
      .to.eventually.equal(email).and.notify(callback);
  }
}

export = DetailsPlayersSteps;
