import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { GOLD } from "../../constants";

class LisaSP extends BaseCharacter {
  constructor(param) {
    super("Lisa", new CharStat(2940, 10081, GOLD), param);
    this.block = this.stat.block;
  }
}

export default LisaSP;
