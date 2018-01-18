import { Player } from '../player/player';
import { Match } from '../match/Match';

export class MatchResult {

    public uri: string;
    public _links: any = {};
    public id: number;
    public winningPair: Player[];
    public losingPair: Player[];
    public isDraw: boolean;
    public match: Match;

}
