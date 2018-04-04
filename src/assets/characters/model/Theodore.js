import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Theodore extends BaseCharacter {
  constructor(param) {
    super('Theodore', new CharStat(2309, 12603, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Theodore;
