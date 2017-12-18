import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class CourtListPage {

  private courts: ElementArrayFinder;

  constructor() {
    this.courts = this.getCourts();
  }

  getCourts(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getCourtsInPosition(position: number): ElementFinder {
    return this.courts.get(position - 1);
  }

  getCourtsCount(): promise.Promise<number> {
    return this.courts.count();
  }
}
