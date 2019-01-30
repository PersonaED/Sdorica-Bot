import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class HestiaSP extends BaseCharacter {
  constructor(param) {
    super('Pang', new CharStat(2520, 10081, BLACK), param);
    this.block = this.stat.block;
  }
}

export default HestiaSP;
