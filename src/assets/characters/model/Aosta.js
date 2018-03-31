import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Aosta extends BaseCharacter {
  constructor(param) {
    super('Aosta', new CharStat(2940, 8822, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Aosta;
