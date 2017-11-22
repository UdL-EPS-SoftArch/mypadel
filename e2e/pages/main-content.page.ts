import { element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class MainContentPage {

  private mainContainer: ElementFinder;

  constructor() {
    this.mainContainer = element(by.css('nav + div.container'));
  }

  clickLinkWithText(text: string): promise.Promise<void> {
    const link = this.mainContainer.element(by.partialLinkText(text));
    return link.click();
  }

  clickButtonWithText(text: string): promise.Promise<void> {
    const button = this.mainContainer.element(by.partialButtonText(text));
    return button.click();
  }
}
