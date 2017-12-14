import { element, by } from 'protractor';
import { promise } from 'selenium-webdriver';

export class PlayerFormPage {

  private form;
  private username;
  private email;
  private registerButton;

  constructor() {
    this.form = element(by.id('player-form'));
    this.username = this.form.element(by.id('username'));
    this.email = this.form.element(by.id('email'));
    this.registerButton = this.form.element(by.tagName('button'));
  }

  getUsername(): promise.Promise<string> {
    return this.username.getText();
  }

  getEMail(): promise.Promise<string> {
    return this.email.getText();
  }

  setUsername(value: string): promise.Promise<void> {
    return this.username.clear().sendKeys(value);
  }

  setEMail(value: string): promise.Promise<void> {
    return this.email.clear().sendKeys(value);
  }

  submitForm(): promise.Promise<void> {
    return this.registerButton.click();
  }
}
