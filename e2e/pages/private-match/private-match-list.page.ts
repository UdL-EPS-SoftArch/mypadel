import {by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';

export class PrivateMatchListPage {

  private privateMatches: ElementArrayFinder;

  constructor() {
    this.privateMatches = this.getPrivateMatches();
  }

  getPrivateMatches(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getPrivateMatchInPosition(position: number): ElementFinder {
    return this.privateMatches.get(position - 1);
  }

  getPrivateMatchesCount(): promise.Promise<number> {
    return this.privateMatches.count();
  }
}
