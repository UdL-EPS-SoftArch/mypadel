import {binding, then} from 'cucumber-tsflow';
import {PublicMatchListPage} from '../../../pages/public-match/public-match-list.page';
import {browser, by, element} from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListPublicMatchesSteps {
  private publicMatchesList = new PublicMatchListPage();

  @then(/^I see (\d+) public matches$/)
  public iSeePubMa(count: string, callback): void {
    element(by.linkText('Matches')).click();
    browser.waitForAngular();
    expect(this.publicMatchesList.getPublicMatchesCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
