import {by, element, ElementFinder} from 'protractor';

export class PublicMatchDetails {
  private detailsBody: ElementFinder;
  private detailsFooter: ElementFinder;

  constructor() {
    this.detailsBody = element.all(by.css('div.panel-body')).first();
    this.detailsFooter = element.all(by.css('div.panel-footer')).first();
  }
}
