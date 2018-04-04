import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class DylanSP extends BaseCharacter {
  constructor(param) {
    super('Dylan', new CharStat(2309, 12603, BLACK), param);
    this.block = this.stat.block;
  }
}

export default DylanSP;
