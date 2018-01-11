import { Player } from '../player/player';
import { Match } from '../match/Match';

export class MatchResult {
    uri: string;
    _links: any = {};
    public id: number;
    public winningPair: Player[];
    public losingPair: Player[];
    public isDraw: boolean;
    public match: Match;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
