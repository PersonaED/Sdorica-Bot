import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Koll extends BaseCharacter {
  constructor(param) {
    super('Koll', new CharStat(2100, 13863, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Koll;
