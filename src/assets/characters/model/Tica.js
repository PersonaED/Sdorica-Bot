import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Tica extends BaseCharacter {
  constructor(param) {
    super('Tica', new CharStat(2520, 11342, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Tica;
