import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import { AdminFormPage } from '../../../pages/admin/admin-form.page';

@binding()
class CreateAdminSteps {
  private datasetForm = new AdminFormPage();

  @given(/^I create an administrator with username "([^"]*)", e-mail "([^"]*)" and password "([^"]*)"$/)
  public createAdminWithUsernameEmailPassword (username: string, email: string, password: string, callback): void {
    element(by.linkText('Register New Administrator')).click();
    browser.waitForAngular();
    this.datasetForm.setUsername(username);
    this.datasetForm.setEMail(email);
    this.datasetForm.setPassword(password);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateAdminSteps;
