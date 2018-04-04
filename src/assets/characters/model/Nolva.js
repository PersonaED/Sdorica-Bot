import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Nolva extends BaseCharacter {
  constructor(param) {
    super('Nolva', new CharStat(2100, 11342, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Nolva;
