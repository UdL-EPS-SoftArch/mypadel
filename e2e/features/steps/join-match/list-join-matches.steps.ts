import {binding, then, when} from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import {JoinMatchListPage} from '../../../pages/join-match/join-match-list.page';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListPublicMatchesSteps {
  private joinMatchesList = new JoinMatchListPage();
  private mainContent = new MainContentPage();

  @when(/^I click to the match "([^"]*)"$/)
  public WhenIClickMatch (name: string, callback): void {
    this.mainContent.clickLinkWithText(name);
    browser.waitForAngular();
    callback();
  }

  @when(/^I join to the match$/)
  public WhenIJoinToMatch (callback): void {
    this.mainContent.clickButtonWithText('Join');
    browser.waitForAngular();
    callback();
  }

  @then(/^I see (\d+) games$/)
  public iSeeGames(count: string, callback): void {
    element(by.linkText('My Games')).click();
    browser.waitForAngular();
    expect(this.joinMatchesList.getJoinedMatchesCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
