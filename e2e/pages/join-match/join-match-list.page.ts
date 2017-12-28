import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class JoinMatchListPage {

  private joinMatches: ElementArrayFinder;

  constructor() {
    this.joinMatches = this.getJoinMatches();
  }

  getJoinMatches(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getJoinedMatchInPosition(position: number): ElementFinder {
    return this.joinMatches.get(position - 1);
  }

  getJoinedMatchesCount(): promise.Promise<number> {
    return this.joinMatches.count();
  }
}
