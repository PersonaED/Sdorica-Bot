import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { GOLD } from "../../constants";

class TicaSP extends BaseCharacter {
  constructor(param) {
    super("Tica", new CharStat(2520, 13863, GOLD), param);
    this.block = this.stat.block;
  }
}

export default TicaSP;
