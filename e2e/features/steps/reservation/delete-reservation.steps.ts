import { binding, when } from 'cucumber-tsflow';
import { browser } from 'protractor';
import { MainContentPage } from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class DeleteReservationSteps {

  private mainContent = new MainContentPage();

  @when(/^I click delete the current reservation$/)
  public iClickDeleteTheCurrentReservation(callback):void{
    this.mainContent.clickButtonWithText('Delete');
    browser.waitForAngular();
    callback()
  }
}
