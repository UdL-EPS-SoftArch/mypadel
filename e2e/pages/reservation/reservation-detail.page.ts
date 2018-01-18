import { element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';


export class ReservationDetailPage {

  private detailsBody: ElementFinder;
  private detailsHeading: ElementFinder;

  constructor() {
    this.detailsHeading = element.all(by.css('div.panel-heading')).first();
    this.detailsBody = element.all(by.css('div.panel-body')).first();
  }

  getStartDate(): promise.Promise<string> {
    return this.detailsBody
      .element(by.cssContainingText('h5', 'StartDate:'))
      .element(by.xpath('following-sibling::p')).getText();
  }

  getDuration(): promise.Promise<string> {
    return this.detailsBody
      .element(by.cssContainingText('h5', 'Duration'))
      .element(by.xpath('following-sibling::p')).getText();
  }

  getCourtType(): promise.Promise<string> {
    return this.detailsBody
      .element(by.cssContainingText('h5', 'CourtType:'))
      .element(by.xpath('following-sibling::p')).getText();
  }
}
