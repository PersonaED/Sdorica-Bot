import { WHITE, EXHAUST, REGEN, ENHANCE, TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
  "puggi n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/UinmoxH.png",
    "block": WHITE,
    "name": "Puggi N: Faraway Fledgling",
    "passive": {
      "name": "False Bravado",
      "description": "Upon Tier SR, unlock passive skill."
    },
    "advisor": {
      "name": "Motormouth",
      "description": "Grant selected ally Taunt. (CD: 3)"
    },
    "1B": {
      "name": "Mockingbird",
      "description": "Grant selected enemy Exhaust."
    },
    "2B": {
      "name": "Bird's The Word",
      "description": "Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally."
    },
    "4B": {
      "name": "Bird Brain Storming	",
      "description": "Grant selected enemy CD +3"
    },
    "status": [
      EXHAUST,
    ],
  },
  "puggi r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/UinmoxH.png",
    "block": WHITE,
    "name": "Puggi R: Tourist Chap",
    "passive": {
      "name": "False Bravado",
      "description": "Upon Tier SR, unlock passive skill."
    },
    "advisor": {
      "name": "Motormouth",
      "description": "Grant selected ally Taunt. (CD: 3)"
    },
    "1B": {
      "name": "Mockingbird",
      "description": "Grant selected enemy 2 stacks Exhaust."
    },
    "2B": {
      "name": "Bird's The Word",
      "description": "Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally."
    },
    "4B": {
      "name": "Bird Brain Storming	",
      "description": "Grant selected enemy CD +3"
    },
    "status": [
      EXHAUST,
    ],
  },
  "puggi sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/y0vZ2io.png",
    "block": WHITE,
    "name": "Puggi SR: Wander Klutz",
    "passive": {
      "name": "False Bravado",
      "description": "Upon death of ally, grant self full HP."
    },
    "advisor": {
      "name": "Motormouth",
      "description": "Grant selected ally Taunt. (CD: 2)"
    },
    "1B": {
      "name": "Mockingbird",
      "description": "Grant selected enemy 2 stacks Exhaust."
    },
    "2B": {
      "name": "Bird's The Word",
      "description": "Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant Enhance"
    },
    "4B": {
      "name": "Bird Brain Storming",
      "description": "Grant selected enemy CD +3"
    },
    "status": [
      ENHANCE,
      EXHAUST,
    ],
  },
  "puggi ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/7lFt0oG.png",
    "block": WHITE,
    "name": "Puggi SSR: Seasoned Traveller",
    "passive": {
      "name": "False Bravado",
      "description": "Upon death of ally, grant self full HP and Armor."
    },
    "advisor": {
      "name": "Motormouth",
      "description": "Grant selected ally Taunt. (CD: 1)"
    },
    "1B": {
      "name": "Mockingbird",
      "description": "Grant selected enemy 2 stacks Exhaust."
    },
    "2B": {
      "name": "Bird's The Word",
      "description": "Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant Enhance"
    },
    "4B": {
      "name": "Bird Brain Storming",
      "description": "Grant all enemies CD +3"
    },
    "status": [
      ENHANCE,
      EXHAUST,
    ],
  },
  "puggi skin": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/ma6ugro.png",
    "block": WHITE,
    "name": "Puggi Skill Book: Sir Adventurer",
    "passive": {
      "name": "Don't Fail Me",
      "description": "If front row ally was attacked more than 2 times in one turn, heal (:crossed_swords: x 0.45) ally, grant Regen for 3 turns."
    },
    "advisor": {
      "name": "Verbal Compliments",
      "description": "Allies' Heal skills grant target Regen for 2 turns."
    },
    "1B": {
      "name": "Mockingbird",
      "description": "Grant selected enemy 2 stacks of Exhaust"
    },
    "2B": {
      "name": "Praise The Lord",
      "description": "Heal (:crossed_swords: x 0.9) selected ally, grant Regen for 3 turns."
    },
    "4B": {
      "name": "All Hail Puggi!",
      "description": "Trigger all allies 4 block skill. Reset all anemies CD"
    },
    "status": [
      REGEN,
      EXHAUST,
    ],
  },
};
