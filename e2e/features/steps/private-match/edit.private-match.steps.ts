import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {PublicMatchEditPage} from '../../../pages/public-match/public-match-edit.page';
import {PrivateMatchEditPage} from '../../../pages/private-match/private-match-edit.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class EditPrivateMatchSteps {
  private datasetForm;

  @when(/^I change the duration to "([^"]*)", court type to "([^"]*)"$/)
  public iCreateAPrivateMatch(duration: string, courtType: string, callback): void {
    this.datasetForm = new PrivateMatchEditPage();
    this.datasetForm.setDuration(duration);
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

}

export = EditPrivateMatchSteps;
