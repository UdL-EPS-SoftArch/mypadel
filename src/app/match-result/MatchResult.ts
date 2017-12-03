import { Player } from "../admin/player";
import { Match } from "../match/Match";

export class MatchResult {
    public id: number;
    public winningPair: Player[];
    public losingPair: Player[];
    public isDraw: boolean;
    public match: Match;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
