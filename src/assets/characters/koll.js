import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAUST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
  "koll n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/j2j9nyX.png",
    "block": WHITE,
    "name": "Koll N: Flame Boy Chant",
    "passive": {
      "name": "Wolfgang Deus",
      "description": "Upon Tier R, unlock passive skill"
    },
    "advisor": {
      "name": "Aware Wolf",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)"
    },
    "1B": {
      "name": "Ready Maim Fire",
      "description": "Armor Penetration (:crossed_swords: x 0.75) front row enemy."
    },
    "2B": {
      "name": "Champ Fire",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Misfire Fighter",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies."
    },
    "status": [],
  },
  "koll r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/j2j9nyX.png",
    "block": WHITE,
    "name": "Koll R: Fear The Sear",
    "passive": {
      "name": "Wolfgang Deus",
      "description": "Upon death of front row ally, grant self Vulnerability, trigger self 4 block skill."
    },
    "advisor": {
      "name": "Aware Wolf",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)"
    },
    "1B": {
      "name": "Ready Maim Fire",
      "description": "Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant Vulnerability"
    },
    "2B": {
      "name": "Champ Fire",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Misfire Fighter",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies."
    },
    "status": [
      VULNERABILITY,
    ],
  },
  "koll sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/ZHcIUfy.png",
    "block": WHITE,
    "name": "Koll SR: Unchained Smoker",
    "passive": {
      "name": "Wolfgang Deus",
      "description": "Upon death of front row ally, trigger self 4 block skill."
    },
    "advisor": {
      "name": "Aware Wolf",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 11)"
    },
    "1B": {
      "name": "Ready Maim Fire",
      "description": "Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks Vulnerability."
    },
    "2B": {
      "name": "Champ Fire",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Misfire Fighter",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies."
    },
    "status": [
      VULNERABILITY,
    ],
  },
  "koll ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/fbjIc87.png",
    "block": WHITE,
    "name": "Koll SSR: Entrails Blazer",
    "passive": {
      "name": "Wolfgang Deus",
      "description": "Upon death of front row ally, trigger self 4 block skill."
    },
    "advisor": {
      "name": "Aware Wolf",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 10)"
    },
    "1B": {
      "name": "Ready Maim Fire",
      "description": "Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks Vulnerability."
    },
    "2B": {
      "name": "Champ Fire",
      "description": "Heal (:crossed_swords: x 1.35) selected ally, grant Damage Reduction for 3 turns."
    },
    "4B": {
      "name": "Misfire Fighter",
      "description": "Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies."
    },
    "status": [
      VULNERABILITY,
      DAMAGEREDUCTION,
    ],
  },
  "koll skin-unreleased": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/2JX1l4z.png",
    "block": WHITE,
    "name": "Koll Skill Book: ?????",
    "passive": {
      "name": "?????",
      "description": "?????"
    },
    "advisor": {
      "name": "?????",
      "description": "?????"
    },
    "1B": {
      "name": "?????",
      "description": "?????"
    },
    "2B": {
      "name": "?????",
      "description": "?????"
    },
    "4B": {
      "name": "?????",
      "description": "?????"
    },
    "status": [],
  },
};
