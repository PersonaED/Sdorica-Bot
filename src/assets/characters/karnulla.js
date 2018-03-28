import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK, VIGILANCE } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
 "karnulla n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/7SO2zs8.png",
    "block": GOLD,
    "name": "Karnulla N: Mouth of Madness",
    "passive": {
      "name": "Underwater Craft",
      "description": "Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.38) against selected enemy"
    },
    "advisor": {
      "name": "Submerge Urge",
      "description": "Allies' Armor Penetration effects increase by 15%"
    },
    "1B": {
      "name": "Doom Bloom",
      "description": "Grant self 2 stacks Vigilance. Reset front row enemy CD"
    },
    "2B": {
      "name": "Annihilate Bloomer",
      "description": "Armor Penetration (:crossed_swords: x 1.125) front row enemy"
    },
    "4B": {
      "name": "In Full Bloom",
      "description": "Grant self 3 stacks Vigilance. Reset all enemies CD"
    },
    "status": [
      VIGILANCE,
    ],
  },
 "karnulla r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/7SO2zs8.png",
    "block": GOLD,
    "name": "Karnulla R: Crocodile Dummy",
    "passive": {
      "name": "Underwater Craft",
      "description": "Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy"
    },
    "advisor": {
      "name": "Submerge Urge",
      "description": "Allies' Armor Penetration effects increase by 20%"
    },
    "1B": {
      "name": "Doom Bloom",
      "description": "Grant self Taunt and 2 stacks Vigilance. Reset front row enemy CD"
    },
    "2B": {
      "name": "Annihilate Bloomer",
      "description": "Armor Penetration (:crossed_swords: x 1.125) front row enemy"
    },
    "4B": {
      "name": "In Full Bloom",
      "description": "Grant self Taunt and 3 stacks Vigilance. Reset all enemies CD"
    },
    "status": [
      VIGILANCE,
    ],
  },
 "karnulla sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/V78vDwv.png",
    "block": GOLD,
    "name": "Karnulla SR: Greater Alligator",
    "passive": {
      "name": "Underwater Craft",
      "description": "Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy, grant Exhaust"
    },
    "advisor": {
      "name": "Submerge Urge",
      "description": "Allies' Armor Penetration effects increase by 25%"
    },
    "1B": {
      "name": "Doom Bloom",
      "description": "Grant self Taunt and 2 stacks Vigilance. Reset front row enemy CD"
    },
    "2B": {
      "name": "Annihilate Bloomer",
      "description": "Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self Enhance for 3 turns"
    },
    "4B": {
      "name": "In Full Bloom",
      "description": "Grant self Taunt and 3 stacks Vigilance. Reset all enemies CD"
    },
    "status": [
      VIGILANCE,
      EXHAST,
      ENHANCE,
    ],
  },
 "karnulla ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/WzSB5FA.png",
    "block": GOLD,
    "name": "Karnulla SSR: Apex Predator",
    "passive": {
      "name": "Underwater Craft",
      "description": "Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy, grant Exhaust"
    },
    "advisor": {
      "name": "Submerge Urge",
      "description": "Allies' Armor Penetration effects increase by 30%"
    },
    "1B": {
      "name": "Doom Bloom",
      "description": "Grant self Taunt and 2 stacks Vigilance. Reset front row enemy CD"
    },
    "2B": {
      "name": "Annihilate Bloomer",
      "description": "Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self 2 stacks Enhance for 3 turns"
    },
    "4B": {
      "name": "In Full Bloom",
      "description": "Grant self Taunt and 3 stacks Vigilance. Reset all enemies CD"
    },
    "status": [
      VIGILANCE,
      EXHAST,
      ENHANCE,
    ],
  },
 "karnulla skin-unreleased": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/93ioJnW.png",
    "block": GOLD,
    "name": "?????",
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
