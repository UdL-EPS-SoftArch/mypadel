import { element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class PublicMatchDetailsPage {

  private duration: ElementFinder;
  private courtType: ElementFinder;
  private level: ElementFinder;

  constructor() {
    this.duration = element.all(by.id('duration')).first();
    this.courtType = element.all(by.id('courtType')).first();
    this.level = element.all(by.id('level')).first();
  }

  getDuration(): promise.Promise<string> {
    return this.duration.getText().then(text => text.split('\n')[1]);
  }

  getCourtType(): promise.Promise<string> {
    return this.courtType.getText().then(text => text.split('\n')[1]);
  }

  getLevel(): promise.Promise<string> {
    return this.level.getText().then(text => text.split('\n')[1]);
  }
}
