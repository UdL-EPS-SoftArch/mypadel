import { binding, when } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { MainContentPage } from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DeletePlayerSteps {
  private mainContent = new MainContentPage();

  @when(/^I delete the current player$/)
  public iDeleteCurrentPlayer(callback): void {
    this.mainContent.clickButtonWithText('Delete');
    browser.waitForAngular();
    callback();
  }

}

export = DeletePlayerSteps;
