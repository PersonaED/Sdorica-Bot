import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Leah extends BaseCharacter {
  constructor(param) {
    super('Leah', new CharStat(2729, 10081, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Leah;
