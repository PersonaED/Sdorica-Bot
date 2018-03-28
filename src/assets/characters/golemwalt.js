import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAUST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
 "golemwalt n": {
    "tier": TIER_N,
    "sprite": "https://i.imgur.com/Pa15VUA.png",
    "block": GOLD,
    "name": "Golemwalt N: Pebble Pusher",
    "passive": {
      "name": "Won't Cave In",
      "description": "Upon Tier R, unlock passive skill"
    },
    "advisor": {
      "name": "Collision Course",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 12)"
    },
    "1B": {
      "name": "On The Rocks",
      "description": "Grant self (:crossed_swords: x 0.36) Armor and Enhance for 3 turns"
    },
    "2B": {
      "name": "Rock N' Roll",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Rocky Horror Show",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies"
    },
    "status": [
      ENHANCE,
    ],
  },
 "golemwalt r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/Pa15VUA.png",
    "block": GOLD,
    "name": "Golemwalt R: Boulder Brute",
    "passive": {
      "name": "Won't Cave In",
      "description": "Upon death of any enemy, grant self (:crossed_swords: x 0.6) Armor"
    },
    "advisor": {
      "name": "Collision Course",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 12)"
    },
    "1B": {
      "name": "On The Rocks",
      "description": "Grant self (:crossed_swords: x 0.36) Armor and Enhance for 3 turns. If have Armor, grant all allies Enhance for 3 turns instead"
    },
    "2B": {
      "name": "Rock N' Roll",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Rocky Horror Show",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies"
    },
    "status": [
      ENHANCE,
    ],
  },
 "golemwalt sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/vZqGsc4.png",
    "block": GOLD,
    "name": "Golemwalt SR: Shrine Stone",
    "passive": {
      "name": "Won't Cave In",
      "description": "Upon death of any character, grant self (:crossed_swords: x 0.6) Armor"
    },
    "advisor": {
      "name": "Collision Course",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 11)"
    },
    "1B": {
      "name": "On The Rocks",
      "description": "Grant self (:crossed_swords: x 0.36) Armor and Enhance for 3 turns. If have Armor, grant all allies Enhance for 3 turns instead"
    },
    "2B": {
      "name": "Rock N' Roll",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Rocky Horror Show",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies"
    },
    "status": [
      ENHANCE,
    ],
  },
 "golemwalt ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/G8k9lKO.png",
    "block": GOLD,
    "name": "Golemwalt SSR: Monolith of Myth",
    "passive": {
      "name": "Won't Cave In",
      "description": "Upon death of any character, grant self (:crossed_swords: x 1.2) Armor"
    },
    "advisor": {
      "name": "Collision Course",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 10)"
    },
    "1B": {
      "name": "On The Rocks",
      "description": "Grant self (:crossed_swords: x 0.36) Armor and Enhance for 3 turns. If have Armor, grant all allies Enhance for 3 turns instead"
    },
    "2B": {
      "name": "Rock N' Roll",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy. If have Armor, Armor Penetration (:crossed_swords: x 1.5) selected enemy instead"
    },
    "4B": {
      "name": "Rocky Horror Show",
      "description": "Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies.  If have Armor, Armor Penetration (:crossed_swords: x 1.8) all enemies instead"
    },
    "status": [
      ENHANCE,
    ],
  },
 "golemwalt skin-unreleased": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/z8IODWI.png",
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
