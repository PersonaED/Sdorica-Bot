import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class SioneSP extends BaseCharacter {
  constructor(param) {
    super('Sione', new CharStat(2520, 11342, BLACK), param);
    this.block = this.stat.block;
  }
}

export default SioneSP;
