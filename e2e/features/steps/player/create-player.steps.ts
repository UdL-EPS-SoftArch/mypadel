import { binding, given } from 'cucumber-tsflow';
import { browser, element, by } from 'protractor';
import {PlayerFormPage} from '../../../pages/player/player-form.page';


@binding()
class CreatePlayerSteps {
  private datasetForm = new PlayerFormPage();

  @given(/^I create a player with username "([^"]*)" and e-mail "([^"]*)"$/)
  public createDatasetWithTitleAndDescription (username: string, email: string, callback): void {
    element(by.linkText('Register New Player')).click();
    this.datasetForm.setUsername(username);
    this.datasetForm.setEMail(email);
    this.datasetForm.submitForm();
    browser.waitForAngular();
    callback();
  }
}

export = CreatePlayerSteps;
