import { binding, given, when, then } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import { AdminFormPage } from '../../pages/admin-form.page';
import { NavigationBar } from '../../pages/navbar.page';
import { LoginForm } from '../../pages/login-form.page';
import { AdminListPage } from '../../pages/admin-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class ListAdminsSteps {
  private datasetForm = new AdminFormPage();
  private navBar = new NavigationBar();
  private loginForm = new LoginForm();
  private datasetsList = new AdminListPage();

  @given(/^I'm in the home page$/)
  public iMInHomePage(callback): void {
    browser.get('http://localhost:4200');
    callback();
  };

  @given(/^I sign in as "([^"]*)" with password "([^"]*)"$/)
  public iSignInAsWithPassword (username: string, password: string, callback): void {
    this.navBar.clickSignin();
    this.loginForm.typeUsername(username);
    this.loginForm.typePassword(password);
    this.loginForm.submitForm();
    browser.waitForAngular();
    callback();
  };

  @given(/^I'm signed in as "([^"]*)"$/)
  public iMSignedInAs (username: string, callback): void {
    const currentUser = this.navBar.getCurrentUser();
    expect(currentUser)
      .to.eventually.equal(username.toUpperCase()).and.notify(callback);
  }

  @given(/^I create an administrator with username "([^"]*)" and e-mail "([^"]*)"$/)
  public createDatasetWithTitleAndDescription (username: string, email: string, callback): void {
    element(by.linkText('Register New Administrator')).click();
    this.datasetForm.setUsername(username);
    this.datasetForm.setEMail(email);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  };

  @when(/^I click menu option "([^"]*)"$/)
  public WhenIClickMenuOption (option: string, callback): void {
    this.navBar.goToMenuOption(option);
    browser.waitForAngular();
    callback();
  }

  @then(/^I see (\d+) administrators/)
  public iSeeAds(count: string, callback): void {
    expect(this.datasetsList.getAdminsCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  };
}

export = ListAdminsSteps;
