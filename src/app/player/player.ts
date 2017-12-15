import { User } from '../login-basic/user';
import {Level} from '../public-match/Level';

export class Player extends User {
  level: Level = Level.NOVICE;
  score: number;

}
