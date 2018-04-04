import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Jahan extends BaseCharacter {
  constructor(param) {
    super('Jahan', new CharStat(1890, 15124, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Jahan;
