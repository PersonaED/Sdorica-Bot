import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class SioneSP extends BaseCharacter {
  constructor(param) {
    super('Sione', new CharStat(2520, 11342, WHITE), param);
    this.block = this.stat.block;
  }
}

export default SioneSP;
