import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Elio extends BaseCharacter {
  constructor(param) {
    super('Elio', new CharStat(2520, 11342, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Elio;
