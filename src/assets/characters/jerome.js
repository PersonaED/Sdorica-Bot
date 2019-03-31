import { TIER_R, TIER_SR, TIER_SSR } from "../constants";
import Jerome from "./model/Jerome";

export default {
  "jerome r": new Jerome({
    tier: TIER_R,
    sprite: "https://i.imgur.com/0LEAFAN.png",
    title: "Newbie Officer",
    passive: {
      name: "Subordinate's Sword",
      description:
        "Upon casting damage skill by white character, switch to assault stance."
    },
    advisor: {
      name: "Orderly Maintenance",
      description:
        "Increase gold and white character's skill ratio by 10%."
    },
    "1B": {
      name: "Combat Preparations",
      description:
        "Grant self 2 stacks :DMGRED. If in assault stance, Armor Penetration (:crossed_swords: x 0.75) back row enemy, leave assault stance."
    },
    "2B": {
      name: "Never Surrender",
      description: 
        "Grant self 3 stacks :TANKU."
    },
    "4B": {
      name: "Excellent Support",
      description:
        "Trigger white character's 1-orb skill 3 times. \nBefore next self-turn, will not trigger white character's 1-orb skill again."
    },
  }),
  "jerome sr": new Jerome({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/8j2fccT.png",
    title: "Helpful Assistant",
    passive: {
      name: "Subordinate's Sword",
      description:
        "Upon incoming damage skill, trigger white character's 1-orb skill. Upon casting damage skill by white character, switch to assault stance. \nBefore next self-turn, can only trigger white character's 1-orb skill up to 2 times."
    },
    advisor: {
      name: "Orderly Maintenance",
      description:
        "Increase gold and white character's skill ratio by 15%."
    },
    "1B": {
      name: "Combat Preparations",
      description:
        "Grant self 2 stacks :DMGRED. If in assault stance, Armor Penetration (:crossed_swords: x 0.75) back row enemy, leave assault stance."
    },
    "2B": {
      name: "Never Surrender",
      description: 
        "Grant self 3 stacks :TANKU. If in assault stance, Armor Penetration (:crossed_swords: x 1.5) back row enemy, leave assault stance."
    },
    "4B": {
      name: "Excellent Support",
      description:
        "Trigger white character's 1-orb skill 3 times. \nBefore next self-turn, will not trigger white character's 1-orb skill again."
    },
  }),
  "jerome ssr": new Jerome({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/TiOIHgw.png",
    title: "Elite  Right-hand Man",
    passive: {
      name: "Subordinate's Sword",
      description:
        "Upon incoming damage skill, trigger white character's 1-orb skill. Upon casting damage skill by white character, switch to assault stance. \nBefore next self-turn, can only trigger white character's 1-orb skill up to 2 times."
    },
    advisor: {
      name: "Orderly Maintenance",
      description:
        "Increase gold and white character's skill ratio by 20%."
    },
    "1B": {
      name: "Combat Preparations",
      description:
        "Grant self 2 stacks :DMGRED. If in assault stance, Armor Penetration (:crossed_swords: x 0.75) back row enemy, leave assault stance."
    },
    "2B": {
      name: "Never Surrender",
      description: 
        "Grant self 3 stacks :TANKU. If in assault stance, Armor Penetration (:crossed_swords: x 1.5) back row enemy, leave assault stance."
    },
    "4B": {
      name: "Excellent Support",
      description:
        "Trigger white character's 1-orb skill 4 times. If in assault stance, Armor Penetration (:crossed_swords: x 3) back row enemy, leave assault stance. \nBefore next self-turn, will not trigger white character's 1-orb skill again."
    },
  }),
};
