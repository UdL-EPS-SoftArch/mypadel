import { element, by } from 'protractor';
import { promise } from 'selenium-webdriver';

export class PublicMatchFormPage {

  private form;
  private startDate;
  private duration;
  private courtType;
  private level;
  private registerButton;

  constructor() {
    this.form = element(by.id('public-match-form'));
    this.startDate = this.form.element(by.className("owl-datetime-main-input"));
    this.duration = this.form.element(by.id('duration'))
      .then((options)=>{
        options[0].click();
      });
    this.courtType = this.form.element(by.id('courtType'))
      .then((options)=>{
        options[0].click();
      });
    this.level = this.form.element(by.id('level'))
      .then((options)=>{
        options[0].click();
      });
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

  getLevel(): promise.Promise<string> {
    return this.duration.getText();
  }

  setStartDate(value: string): promise.Promise<void> {
    return this.startDate.clear().sendKeys(value);
  }

  setDuration(value: string): promise.Promise<void> {
    return this.duration;
  }

  setCourtType(value: string): promise.Promise<void> {
    return this.courtType;
  }

  setLevel(value: string): promise.Promise<void> {
    return this.level;
  }

  submitForm(): promise.Promise<void> {
    return this.registerButton.click();
  }
}
