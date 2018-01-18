import {binding, when} from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import {PublicMatchFormPage} from '../../../pages/public-match/public-match-form.page';
import {MainContentPage} from '../../../pages/main-content.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class CreatePublicMatchSteps {
  private datasetForm;

  @when(/^I create a public match with duration "([^"]*)", court type "([^"]*)" and level "([^"]*)"$/)
  public iCreateAPublicMatch (duration: string, courtType: string, level: string, callback): void {
    new MainContentPage().clickButtonWithText('Create Public Match');
    this.datasetForm = new PublicMatchFormPage();
    this.datasetForm.setDuration(duration);
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.setLevel(level);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

}

export = CreatePublicMatchSteps;
