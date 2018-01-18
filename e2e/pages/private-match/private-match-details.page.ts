import {by, element, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';

export class PrivateMatchDetailsPage {

  private duration: ElementFinder;
  private courtType: ElementFinder;

  constructor() {
    this.duration = element.all(by.id('duration')).first();
    this.courtType = element.all(by.id('courtType')).first();
  }

  getDuration(): promise.Promise<string> {
    return this.duration.getText().then(text => text.split('\n')[1]);
  }

  getCourtType(): promise.Promise<string> {
    return this.courtType.getText().then(text => text.split('\n')[1]);
  }

}
