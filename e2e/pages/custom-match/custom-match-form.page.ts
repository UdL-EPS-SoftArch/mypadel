import { element, by } from 'protractor';
import { promise } from 'selenium-webdriver';

export class CustomMatchFormPage {

  private form;
  private startDate;
  private duration;
  private courtType;
  private registerButton;

  constructor() {
    this.form = element(by.id('public-match-form'));
    this.startDate = this.form.element(by.id('startDate'));
    this.duration = this.form.element(by.id('duration'));
    this.courtType = this.form.element(by.id('courtType'));
    this.registerButton = this.form.element(by.tagName('button'));
  }

  getStartDate(): promise.Promise<string> {
    return this.startDate.getText();
  }

  getDuration(): promise.Promise<string> {
    return this.duration.getText();
  }

  getCourtType(): promise.Promise<string> {
    return this.courtType.getText();
  }



  setStartDate(value: string): promise.Promise<void> {
    return this.startDate.clear().sendKeys(value);
  }

  setDuration(value: string): promise.Promise<void> {
    return this.duration.clear().sendKeys(value);
  }

  setCourtType(value: string): promise.Promise<void> {
    return this.courtType.clear().sendKeys(value);
  }


  submitForm(): promise.Promise<void> {
    return this.registerButton.click();
  }
}
