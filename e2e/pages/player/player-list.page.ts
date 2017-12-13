import { element, by, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class PlayerListPage {

  private players: ElementArrayFinder;

  constructor() {
    this.players = this.getPlayers();
  }

  getPlayers(): ElementArrayFinder {
    return element.all(by.css('div.panel'));
  }
  getPlayersCount(): promise.Promise<number> {
    return this.players.count();
  }

}
