import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {MainContentPage} from '../../../pages/main-content.page';


@binding()
export class DeleteJoinMatchSteps {
  private mainContent = new MainContentPage();

  @when(/^I leave the match$/)
  public iDeleteCurrentPlayer(callback): void {
    this.mainContent.clickButtonWithText('Leave the match');
    browser.waitForAngular();
    callback();
  }

  @when(/^I confirm leaving the game$/)
  public iConfirmDeletion(callback): void {
    this.mainContent.clickButtonWithText('Leave the match');
    browser.waitForAngular();
    callback();
  }
}
