import { binding, then } from 'cucumber-tsflow';
import {PublicMatchListPage} from "../../../pages/public-match/public-match-list.page";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class ListPublicMatchesSteps {
  private adminsList = new PublicMatchListPage();

  @then(/^I see (\d+) public matches/)
  public iSeeAds(count: string, callback): void {
    expect(this.adminsList.getAdminsCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}
