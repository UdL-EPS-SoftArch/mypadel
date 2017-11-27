import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class PublicMatchListPage {

  private publicMatches: ElementArrayFinder;

  constructor() {
    this.publicMatches = this.getPublicMatches();
  }

  getPublicMatches(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getAdminInPosition(position: number): ElementFinder {
    return this.publicMatches.get(position - 1);
  }

  getAdminsCount(): promise.Promise<number> {
    return this.publicMatches.count();
  }
}
