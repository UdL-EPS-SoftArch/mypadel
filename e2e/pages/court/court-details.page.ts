import {element, by, ElementFinder} from 'protractor';

export class CourtDetailsPage {

  private detailsBody: ElementFinder;
  private available: string;
  private indoor: string;

  constructor() {
    this.detailsBody = element.all(by.css('div.panel-body')).first();
  }

  getAvailable(): string {
    this.parseValues();
    return this.available;
  }

  getIndoor(): string {
    this.parseValues();
    return this.indoor;
  }

  private parseValues() {
    let text: string;
    this.detailsBody.getText().then((str: string) => text = str);
    const parts = text.split(' | ');
    this.indoor = parts[0];
    this.available = parts[1];
  }
}
