import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import { AdminFormPage } from '../../../pages/admin/admin-form.page';

@binding()
class CreateAdminSteps {
  private datasetForm = new AdminFormPage();

  @given(/^I create an administrator with username "([^"]*)" and e-mail "([^"]*)"$/)
  public createDatasetWithTitleAndDescription (username: string, email: string, callback): void {
    element(by.linkText('Register New Administrator')).click();
    this.datasetForm.setUsername(username);
    this.datasetForm.setEMail(email);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateAdminSteps;
