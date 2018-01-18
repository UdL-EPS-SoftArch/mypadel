import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class FilterPublicMatchSteps {
  private mainContent = new MainContentPage();

  @when(/^I click button "([^"]*)"$/)
  public iClickFilterButton(filterButton: string, callback): void {
    this.mainContent.clickButtonWithText(filterButton);
    browser.waitForAngular();
    callback();
  }
}
