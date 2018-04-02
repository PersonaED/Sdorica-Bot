import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Angelia extends BaseCharacter {
  constructor(param) {
    super('Crushfang', new CharStat(2100, 13863, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Angelia;
