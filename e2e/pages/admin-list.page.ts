import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class AdminListPage {

  private admins: ElementArrayFinder;

  constructor() {
    this.admins = this.getAdmins();
  }

  getAdmins(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }

  getAdminInPosition(position: number): ElementFinder {
    return this.admins.get(position - 1);
  }

  getAdminsCount(): promise.Promise<number> {
    return this.admins.count();
  }
}
