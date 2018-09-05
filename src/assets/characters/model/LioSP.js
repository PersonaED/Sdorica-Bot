import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { GOLD } from "../../constants";

class LioSP extends BaseCharacter {
  constructor(param) {
    super("Lio", new CharStat(2309, 12603, GOLD), param);
    this.block = this.stat.block;
  }
}

export default LioSP;
