import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
  "angelia n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/sT1bN2g.png",
    "block": WHITE,
    "name": "Angelia N: Thy Fair Lady",
    "passive": {
      "name": "Helpful Halo",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "Angelic Aura",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)"
    },
    "1B": {
      "name": "Wing and Prayer",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill"
    },
    "2B": {
      "name": "Let Us Pray",
      "description": "Grant all allies (:crossed_swords: x 0.72) Armor"
    },
    "4B": {
      "name": "Prayer Player",
      "description": "Heal (:crossed_swords: x 1.8) front row ally"
    },
    "status": [],
  },
  "angelia r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/sT1bN2g.png",
    "block": WHITE,
    "name": "Angelia R: Shy Sweetheart",
    "passive": {
      "name": "Helpful Halo",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "Angelic Aura",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)"
    },
    "1B": {
      "name": "Wing and Prayer",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill"
    },
    "2B": {
      "name": "Let Us Pray",
      "description": "Grant all allies (:crossed_swords: x 0.72) Armor"
    },
    "4B": {
      "name": "Prayer Player",
      "description": "Heal (:crossed_swords: x 1.8) front row ally, grant Exhaust, trigger 2 block skill"
    },
    "status": [
      EXHAST,
    ],
  },
  "angelia sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/dxxHkc0.png",
    "block": WHITE,
    "name": "Angelia SR: Unfazed Dame",
    "passive": {
      "name": "Helpful Halo",
      "description": "Upon cast Armor, if target has Exhaust, skill power increased by 100%"
    },
    "advisor": {
      "name": "Angelic Aura",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 2)"
    },
    "1B": {
      "name": "Wing and Prayer",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill"
    },
    "2B": {
      "name": "Let Us Pray",
      "description": "Grant all allies (:crossed_swords: x 0.72) Armor"
    },
    "4B": {
      "name": "Prayer Player",
      "description": "Heal (:crossed_swords: x 1.8) front row ally, grant Exhaust, trigger 2 block skill"
    },
    "status": [
      EXHAST,
    ],
  },
  "angelia ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/7vEcX1i.png",
    "block": WHITE,
    "name": "Angelia SSR: Virtue Virtuoso",
    "passive": {
      "name": "Helpful Halo",
      "description": "Upon cast Armor, if target has Exhaust/Vulnerability, increase skill power by 100%"
    },
    "advisor": {
      "name": "Angelic Aura",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 1)"
    },
    "1B": {
      "name": "Wing and Prayer",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill"
    },
    "2B": {
      "name": "Let Us Pray",
      "description": "Grant all allies (:crossed_swords: x 0.72) Armor, grant Damage Reduction"
    },
    "4B": {
      "name": "Prayer Player",
      "description": "Heal (:crossed_swords: x 1.8) front row ally, grant Exhaust, trigger 4 block skill"
    },
    "status": [
      EXHAST,
      DAMAGEREDUCTION,
      VULNERABILITY,
    ],
  },
  "angelia skin": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/sETzJmO.png",
    "block": WHITE,
    "name": "Angelia Skill Book: Daybreak Darling",
    "passive": {
      "name": "Empress' Order",
      "description": "Upon cast Armor, if target has Exhaust/Vulnerability, trigger target 1 block skill"
    },
    "advisor": {
      "name": "For The Kingdom",
      "description": "Trigger front row ally 1 block skill. (CD: 3)"
    },
    "1B": {
      "name": "Stand Tall",
      "description": "Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill"
    },
    "2B": {
      "name": "Glowing Prayer",
      "description": "Grant all allies (:crossed_swords: x 0.72) Armor and Tank Up for 2 turns"
    },
    "4B": {
      "name": "Luminious Radiance",
      "description": "Heal (:crossed_swords: x 1.8) front row ally, grant Exhaust, trigger 2 block skill 2 times"
    },
    "status": [
      EXHAST,
      VULNERABILITY,
      TANKUP,
    ],
  },
  "angelia sp": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/4rIox7p.png",
    "block": BLACK,
    "name": "Angelia SP: Enchantress of Fate",
    "passive": {
      "name": "Be My Shield",
      "description": "Upon 0 Armor of front row ally, grant Tank Up for 3 turns"
    },
    "advisor": {
      "name": "Emergency Command",
      "description": "Grant selected ally Tank Up for 3 turns. (CD: 5)"
    },
    "1B": {
      "name": "Prepare For Combat",
      "description": "Grant selected ally Tank Up for 3 turns"
    },
    "2B": {
      "name": "Assault Order",
      "description": "Trigger 2 block skill of all allies with Armor"
    },
    "4B": {
      "name": "Annihilation Order",
      "description": "Trigger 4 block skill of all allies with Tank up"
    },
    "status": [
      TANKUP,
    ],
  }
};
