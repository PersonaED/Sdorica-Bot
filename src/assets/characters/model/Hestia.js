import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class Hestia extends BaseCharacter {
  constructor(param) {
    super('Hestia', new CharStat(1890, 15124, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Hestia;
