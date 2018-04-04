import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Dylan extends BaseCharacter {
  constructor(param) {
    super('Dylan', new CharStat(1890, 15124, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Dylan;
