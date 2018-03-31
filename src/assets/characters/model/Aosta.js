import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { WHITE, ENHANCE, DAMAGEREDUCTION } from '../../constants';

class Aosta extends BaseCharacter {
  constructor(param) {
    super('Aosta', new CharStat(2940, 8822, WHITE), param);

    this.status = [
      ENHANCE,
      DAMAGEREDUCTION,
    ];
  }
}

export default Aosta;
