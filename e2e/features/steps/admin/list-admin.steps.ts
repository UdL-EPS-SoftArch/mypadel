import { binding, then } from 'cucumber-tsflow';
import { AdminListPage } from '../../../pages/admin/admin-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class ListAdminsSteps {
  private adminsList = new AdminListPage();

  @then(/^I see (\d+) administrators/)
  public iSeeAds(count: string, callback): void {
    expect(this.adminsList.getAdminsCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}

export = ListAdminsSteps;
