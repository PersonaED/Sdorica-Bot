import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Angelia extends BaseCharacter {
  constructor(param) {
    super('Angelia', new CharStat(2729, 10081, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Angelia;
