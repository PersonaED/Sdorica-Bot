import { TIER_SSR } from "../constants";
import Celia from "./model/Celia";

export default {
  "celia ssr": new Celia({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/7TtebG9.png",
    title: "Mirrored Shadow",
    passive: {
      name: "Whirling Illusions",
      description:
        "Upon the end of player's turn, grant self 1 stack \"Deep Slumber\". \nUpon reaching 12 stacks of \"Deep Slumber\", trigger death of this character."
    },
    advisor: {
      name: "Revival in Darkness",
      description:
        "Upon death of white character, reduce Resurrection orbs required by 4."
    },
    "1B": {
        name: "Flowing Time",
      description:
        "The clock is ticking... /nAttack (:crossed_swords: x 0.3) selected and back row enemy, grant both :EXH."
    },
    "2B": {
      name: "Permanent Scars",
      description:
        "The clock is ticking... /nAttack (:crossed_swords: x 1) selected and back row enemy, grant both :VUL."
    },
    "4B": {
      name: "Finally Home",
      description:
        "The clock is ticking... /nTrue Damage (:crossed_swords: x 1.4) selected and back row enemy. \nIf this character has :REGEN, :DMGRED, or :WARCRY, increase skill power of this skill by 15%. (Up to 45%)"
    }
  })
};
