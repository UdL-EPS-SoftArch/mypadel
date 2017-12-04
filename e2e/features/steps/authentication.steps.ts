import { binding, given } from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import { NavigationBar } from '../../pages/navbar.page';
import { LoginForm } from '../../pages/login-form.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class AuthenticationSteps {
  private navBar = new NavigationBar();
  private loginForm = new LoginForm();

  @given(/^I sign in as "([^"]*)" with password "([^"]*)"$/)
  public iSignInAsWithPassword (username: string, password: string, callback): void {
    this.navBar.clickSignin();
    this.loginForm.typeUsername(username);
    this.loginForm.typePassword(password);
    this.loginForm.submitForm();
    browser.waitForAngular();
    callback();
  }

  @given(/^I'm signed in as "([^"]*)"$/)
  public iMSignedInAs (username: string, callback): void {
    const currentUser = this.navBar.getCurrentUser();
    expect(currentUser)
      .to.eventually.equal(username).and.notify(callback);
  }

  @given(/^I logout$/)
  public iLogout(callback):void{
    element(by.linkText('Logout')).click();
    callback();
  }
}

export = AuthenticationSteps;
