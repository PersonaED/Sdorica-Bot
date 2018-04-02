import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Angelia extends BaseCharacter {
  constructor(param) {
    super('Angelia', new CharStat(2309, 12603, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Angelia;
