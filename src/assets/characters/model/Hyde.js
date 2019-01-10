import BaseCharacter from "./core/BaseCharacter";
import CharStat from "./core/CharStat";
import { WHITE } from "../../constants";

class Hyde extends BaseCharacter {
  constructor(param) {
    super("Hyde", new CharStat(1890, 14283, WHITE), param);
    this.block = this.stat.block;
  }
}

export default Hyde;
