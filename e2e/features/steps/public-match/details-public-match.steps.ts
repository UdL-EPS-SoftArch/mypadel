import {binding, when} from 'cucumber-tsflow';
import {MainContentPage} from '../../../pages/main-content.page';
import {browser} from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class DetailPublicMatches {
  private mainContent = new MainContentPage();

  @when(/^I click to the match "([^"]*)"$/)
  public WhenIClickMatchWithId (name: string, callback): void {
    this.mainContent.clickLinkWithText(name);
    browser.waitForAngular();
    callback();
  }

  @when(/^I join to the match$/)
  public WhenIClickJoin (callback): void {
    this.mainContent.clickButtonWithText('Join');
    browser.waitForAngular();
    callback();
  }

  @when(/^I leave the match$/)
  public iLeaveTheMatch(callback): void {
    this.mainContent.clickButtonWithText('Leave the match');
    browser.waitForAngular();
    callback();
  }
}
