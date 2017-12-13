import { element, by } from 'protractor';
import { promise } from 'selenium-webdriver';

export class CourtFormPage {

  private form;
  private available;
  private indoor;
  private registerButton;

  constructor() {
    this.form = element(by.id('admin-form'));
    this.available = this.form.element(by.id('available'));
    this.indoor = this.form.element(by.id('indoor'));
    this.registerButton = this.form.element(by.tagName('button'));
  }

  getAvailable(): promise.Promise<string> {
    return this.available.getText();
  }

  getIndoor(): promise.Promise<string> {
    return this.indoor.getText();
  }

  setAvailable(value: string): promise.Promise<void> {
    return this.available.clear().sendKeys(value);
  }

  setIndoor(value: string): promise.Promise<void> {
    return this.indoor.clear().sendKeys(value);
  }

  submitForm(): promise.Promise<void> {
    return this.registerButton.click();
  }
}
