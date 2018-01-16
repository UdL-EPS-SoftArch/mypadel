import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import { AdminFormPage } from '../../../pages/admin/admin-form.page';
import {CourtFormPage} from '../../../pages/court/court-form.page';

@binding()
class CreateCourtSteps {
  private datasetForm = new CourtFormPage();

  @given(/^I create a court$/)
  public createCourt (callback): void {
    element(by.linkText('Create a new Court')).click();
    element(by.id('available')).click();//we need to add this lines of codes to create a reservation
    element(by.id('isIndoor')).click();//we need to add this lines of codes to create a reservation
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateCourtSteps;
