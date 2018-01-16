import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {MainContentPage} from '../../../pages/main-content.page';
import {PrivateMatchFormPage} from '../../../pages/private-match/private-match-form.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class CreatePrivateMatchSteps {
  private datasetForm;

  @when(/^I create a private match with duration "([^"]*)", court type "([^"]*)"$/)
  public iCreateAPublicMatch (duration: string, courtType: string, callback): void {
    new MainContentPage().clickLinkWithText('Create New Private Match');
    this.datasetForm = new PrivateMatchFormPage();
    this.datasetForm.setDuration(duration);
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

}

export = CreatePrivateMatchSteps;
