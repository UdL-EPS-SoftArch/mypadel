import {element, by, protractor} from 'protractor';
import {promise} from 'selenium-webdriver';

export class ReservationFormPage {

  private form;
  private startDate;
  private duration;
  private courtType;
  private registerButton;

  constructor() {
    this.form = element(by.id('reservation-form'));
    this.duration = this.form.element(by.css('option[value="PT60M"]')).click();
    this.courtType = this.form.element(by.css('option[value="INDOOR"]')).click();
    this.form.element(by.id('startDate')).click();
    this.startDate = this.form.element(by.className('owl-calendar-outFocus')).click();
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
    this.startDate.sendKeys(protractor.Key.DELETE);
    return this.startDate.clear().sendKeys(value);
  }

  setDuration(value: string): promise.Promise<void> {
    return this.duration = this.form.element(by.css('option[value="' + value + '"]')).click();
  }

  setCourtType(value: string): promise.Promise<void> {
    return this.duration = this.form.element(by.css('option[value="' + value + '"]')).click();
  }

  submitForm(): promise.Promise<void> {
    return this.registerButton.click();
  }
}
