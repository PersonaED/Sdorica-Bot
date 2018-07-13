import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE } from '../../constants';

class KittyeyesSP extends BaseCharacter {
  constructor(param) {
    super('Kittyeyes', new CharStat(2520, 11342, WHITE), param);
    this.block = this.stat.block;
  }
}

export default KittyeyesSP;
