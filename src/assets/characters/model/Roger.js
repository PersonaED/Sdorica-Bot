import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Roger extends BaseCharacter {
  constructor(param) {
    super('Roger', new CharStat(2520, 11342, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Roger;
