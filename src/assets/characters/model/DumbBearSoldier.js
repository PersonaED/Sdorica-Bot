import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class DumbBearSoldier extends BaseCharacter {
  constructor(param) {
    super('DumbBearSoldier', new CharStat(2729, 11342, WHITE), param);
    this.block = this.stat.block;
  }
}

export default DumbBearSoldier;
