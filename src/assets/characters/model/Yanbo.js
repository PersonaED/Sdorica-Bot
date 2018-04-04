import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Yanbo extends BaseCharacter {
  constructor(param) {
    super('Yanbo', new CharStat(2940, 8822, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Yanbo;
