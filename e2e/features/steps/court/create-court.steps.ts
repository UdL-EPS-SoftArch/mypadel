import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import { CourtFormPage } from '../../../pages/court/court-form.page';

@binding()
class CreateCourtSteps {
  private datasetForm = new CourtFormPage();

  @given(/^I create an unavailable outdoor court$/)
  public createCourt (callback): void {
    element(by.linkText('Create a new Court')).click();
    browser.waitForAngular();
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

  @given(/^I create an available indoor court$/)
  public createAvailableIndoorCourt (callback): void {
    element(by.linkText('Create a new Court')).click();
    browser.waitForAngular();
    element(by.id('available')).click();
    element(by.id('isIndoor')).click();
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateCourtSteps;
