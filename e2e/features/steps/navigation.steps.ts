import { binding, given, when } from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import { NavigationBar } from '../../pages/navbar.page';

@binding()
class NavigationSteps {
  private navBar = new NavigationBar();

  @given(/^I'm in the home page$/)
  public iMInHomePage(callback): void {
    browser.get('http://localhost:4200');
    callback();
  }

  @when(/^I click menu option "([^"]*)"$/)
  public WhenIClickMenuOption (option: string, callback): void {
    this.navBar.goToMenuOption(option);
    browser.waitForAngular();
    callback();
  }

  @given(/^I'm on the home page and logged out$/)
  public iMOnTheHomePageAndLoggedOut(callback): void {
    browser.get('http://localhost:4200');
    const logoutButton = element(by.linkText('Logout'));
    if (logoutButton.isDisplayed()) {
      logoutButton.click();
    }
    callback();
  }

}

export = NavigationSteps;
