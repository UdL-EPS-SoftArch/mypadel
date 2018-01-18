import { binding, then } from 'cucumber-tsflow';
import {browser, by, element} from 'protractor';
import {CourtListPage} from '../../../pages/court/court-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListCourtSteps {
  private courtList = new CourtListPage();

  @then(/^I see (\d+) courts$/)
  public iSeePubMa(count: string, callback): void {
    element(by.linkText('Courts')).click();
    browser.waitForAngular();
    expect(this.courtList.getCourtsCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
