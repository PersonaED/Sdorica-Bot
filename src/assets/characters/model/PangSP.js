import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class PangSP extends BaseCharacter {
  constructor(param) {
    super('Pang', new CharStat(2729, 11342, GOLD), param);
    this.block = this.stat.block;
  }
}

export default PangSP;
