import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {MainContentPage} from '../../../pages/main-content.page';

@binding()
export class DetailsJoinMatchSteps {
  private mainContent = new MainContentPage();

  @when(/^I click to the joined match "([^"]*)"$/)
  public WhenIClickJoinMatchWithId (name: string, callback): void {
    this.mainContent.clickLinkWithText(name);
    browser.waitForAngular();
    callback();
  }
}
