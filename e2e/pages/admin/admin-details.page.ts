import { element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class AdminDetailsPage {

  private detailsHeading: ElementFinder;
  private detailsBody: ElementFinder;

  constructor() {
    this.detailsHeading = element.all(by.css('div.panel-heading')).first();
    this.detailsBody = element.all(by.css('div.panel-body')).first();
  }

  getUsername(): promise.Promise<string> {
    return this.detailsHeading.getText();
  }

  getEMail(): promise.Promise<string> {
    return this.detailsBody
      .element(by.cssContainingText('h5', 'E-Mail:'))
      .element(by.xpath('following-sibling::p')).getText();
  }
}
