import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { WHITE } from "../../constants";

class LeahSP extends BaseCharacter {
  constructor(param) {
    super("Leah", new CharStat(2940, 10081, WHITE), param);
    this.block = this.stat.block;
  }
}

export default LeahSP;
