import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import {CustomMatchFormPage} from "../../../pages/custom-match/custom-match-form.page";



@binding()
class CreateCustomMatchSteps {
  private datasetForm = CustomMatchFormPage;

  @given(/^I create a custom match with court type "([^"]*)" and start date "([^"]*)"$/)
  public createDatasetWithTitleAndDescription (duration: string, courtType: string, StartDate: string, callback): void {
    element(by.linkText('Public Matches')).click();
    element(by.linkText('Create New Public Match')).click();
    this.datasetForm.setStartDate(StartDate);
    this.datasetForm.setDuration('PT30M');
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreateCustomMatchSteps;
