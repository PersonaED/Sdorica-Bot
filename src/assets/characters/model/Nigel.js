import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { GOLD } from "../../constants";

class Nigel extends BaseCharacter {
  constructor(param) {
    super("Nigel", new CharStat(2268, 15124, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Nigel;
