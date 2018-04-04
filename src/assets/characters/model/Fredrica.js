import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Fredrica extends BaseCharacter {
  constructor(param) {
    super('Fredrica', new CharStat(2940, 8822, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Fredrica;
