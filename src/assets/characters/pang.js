import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK, WINDEDUP } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
 "pang n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/IgajiVH.png",
    "block": GOLD,
    "name": "Pang N: Amateur Hour",
    "passive": {
      "name": "Merciless Meridians",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "Acupoint Attack",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)"
    },
    "1B": {
      "name": "One Paw Man",
      "description": "Attack (:crossed_swords: x 0.75) front row enemy. Grant self Damage Reduction for 2 turns"
    },
    "2B": {
      "name": "Powerful Punch",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Paws Won't Pause",
      "description": "Attack (:crossed_swords: x 3) front row enemy"
    },
   "status": [
      DAMAGEREDUCTION,
    ],
  },
 "pang r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/IgajiVH.png",
    "block": GOLD,
    "name": "Pang R: Self Made Fan",
    "passive": {
      "name": "Merciless Meridians",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "Acupoint Attack",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)"
    },
    "1B": {
      "name": "One Paw Man",
      "description": "Attack (:crossed_swords: x 0.75) front row enemy. Grant self Damage Reduction for 2 turns"
    },
    "2B": {
      "name": "Powerful Punch",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack Winded Up"
    },
    "4B": {
      "name": "Paws Won't Pause",
      "description": "Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks Enhance for 3 turns"
    },
   "status": [
      DAMAGEREDUCTION,
      WINDEDUP,
      ENHANCE,
    ],
  },
 "pang sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/noYW61K.png",
    "block": GOLD,
    "name": "Pang SR: Notice Me Sensei",
    "passive": {
      "name": "Merciless Meridians",
      "description": "Upon receive Damage Reduction, grant self 1 stack Winded Up"
    },
    "advisor": {
      "name": "Acupoint Attack",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy (CD: 6)"
    },
    "1B": {
      "name": "One Paw Man",
      "description": "Attack (:crossed_swords: x 0.75) front row enemy. Grant self Damage Reduction for 2 turns"
    },
    "2B": {
      "name": "Powerful Punch",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack Winded Up"
    },
    "4B": {
      "name": "Paws Won't Pause",
      "description": "Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks Enhance for 3 turns"
    },
   "status": [
      DAMAGEREDUCTION,
      WINDEDUP,
      ENHANCE,
    ],
  },
 "pang ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/0xe5c0K.png",
    "block": GOLD,
    "name": "Pang SSR: Shaolin Templar",
    "passive": {
      "name": "Merciless Meridians",
      "description": "Upon receive Damage Reduction, grant self 1 or 2 stacks Winded Up"
    },
    "advisor": {
      "name": "Acupoint Attack",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy (CD: 5)"
    },
    "1B": {
      "name": "One Paw Man",
      "description": "Attack (:crossed_swords: x 0.75) front row enemy. Grant self Damage Reduction for 2 turns"
    },
    "2B": {
      "name": "Powerful Punch",
      "description": "Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 or 2 stacks Winded Up"
    },
    "4B": {
      "name": "Paws Won't Pause",
      "description": "Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks Enhance for 3 turns"
    },
   "status": [
      DAMAGEREDUCTION,
      WINDEDUP,
      ENHANCE,
    ],
  },
};
