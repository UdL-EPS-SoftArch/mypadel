import { binding, then } from 'cucumber-tsflow';
import {by, element} from 'protractor';
import {JoinMatchListPage} from '../../../pages/join-match/join-match-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListPublicMatchesSteps {
  private joinMatchesList = new JoinMatchListPage();

  @then(/^I see (\d+) games$/)
  public iSeeGames(count: string, callback): void {
    element(by.linkText('My Games')).click();
    expect(this.joinMatchesList.getJoinedMatchesCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
