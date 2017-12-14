import { binding, then } from 'cucumber-tsflow';
import {PlayerListPage} from '../../../pages/player/player-list.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
class ListPlayersSteps {
  private playersList = new PlayerListPage();

  @then(/^I see (\d+) players/)
  public iSeePlayers(count: string, callback): void {
    expect(this.playersList.getPlayersCount())
      .to.eventually.equal(parseInt(count, 10)).and.notify(callback);
  }
}

export = ListPlayersSteps;
