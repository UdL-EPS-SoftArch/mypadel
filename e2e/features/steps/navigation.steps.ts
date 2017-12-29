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
}

export = NavigationSteps;
