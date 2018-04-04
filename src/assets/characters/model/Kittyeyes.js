import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { BLACK } from '../../constants';

class Kittyeyes extends BaseCharacter {
  constructor(param) {
    super('Kittyeyes', new CharStat(2309, 12603, BLACK), param);
    this.block = this.stat.block;
  }
}

export default Kittyeyes;
