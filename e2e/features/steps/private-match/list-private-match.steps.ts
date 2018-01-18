import {binding, then} from 'cucumber-tsflow';
import {by, element} from 'protractor';
import {PrivateMatchListPage} from '../../../pages/private-match/private-match-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListPrivateMatchesSteps {
  private privateMatchesList = new PrivateMatchListPage();

  @then(/^I see (\d+) private matches$/)
  public iSeePrivMa(count: string, callback): void {
    element(by.linkText('Matches')).click();
    expect(this.privateMatchesList.getPrivateMatchesCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
