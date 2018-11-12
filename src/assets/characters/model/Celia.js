import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Celia extends BaseCharacter {
  constructor(param) {
    super('Masked Girl', new CharStat(2520, 11342, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Celia;
