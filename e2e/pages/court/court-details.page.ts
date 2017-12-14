import {element, by, ElementFinder, browser} from 'protractor';
import {promise} from 'selenium-webdriver';

export class CourtDetailsPage {

  private detailsBody: ElementFinder;

  constructor() {
    this.detailsBody = element.all(by.css('div.panel-body')).first();
  }

  getAvailable(): promise.Promise<string> {
    return this.detailsBody.getText().then((str: string) => {
      const parts = str.split(' | ');
      return parts[1];
    });
  }

  getIndoor(): promise.Promise<string> {
    return this.detailsBody.getText().then((str: string) => {
      const parts = str.split(' | ');
      return parts[0];
    });
  }
}
