import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Yamitsuki extends BaseCharacter {
  constructor(param) {
    super('Yamitsuki', new CharStat(2940, 8822, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Yamitsuki;
