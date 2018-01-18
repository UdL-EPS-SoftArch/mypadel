import {binding, when} from 'cucumber-tsflow';
import {browser} from 'protractor';
import {PublicMatchEditPage} from '../../../pages/public-match/public-match-edit.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class EditPublicMatchSteps {
  private datasetForm;

  @when(/^I change the duration to '([^']*)', court type to '([^']*)' and level to '([^']*)'$/)
  public iCreateAPublicMatch (duration: string, courtType: string, level: string, callback): void {
    this.datasetForm = new PublicMatchEditPage();
    this.datasetForm.setDuration(duration);
    this.datasetForm.setCourtType(courtType);
    this.datasetForm.setLevel(level);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }

}

export = EditPublicMatchSteps;
