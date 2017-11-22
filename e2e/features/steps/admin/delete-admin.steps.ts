import { binding, when } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { MainContentPage } from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DetailsAdminsSteps {
  private mainContent = new MainContentPage();

  @when(/^I delete the current administrator$/)
  public iDeleteCurrentAdmin(callback): void {
    this.mainContent.clickButtonWithText('Delete');
    browser.waitForAngular();
    callback();
  }

  @when(/^I confirm the deletion$/)
  public iConfirmDeletion(callback): void {
    this.mainContent.clickButtonWithText('Delete');
    browser.waitForAngular();
    callback();
  }
}

export = DetailsAdminsSteps;
