import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAUST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
 "crushfang r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/5uoQiEX.png",
    "block": GOLD,
    "name": "Crushfang R: Abe Ruthless",
    "passive": {
      "name": "Run After Stun",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "Battle Rattle",
      "description": "Attack (:crossed_swords: x 1.6) all enemies (CD: 12)"
    },
    "1B": {
      "name": "Break Cover",
      "description": "Attack (:crossed_swords: x 0.5) all enemies. Grant self Enhance"
    },
    "2B": {
      "name": "Hit The Breaks",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Break And Enter",
      "description": "Attack (:crossed_swords: x 1.6) all enemies"
    },
    "status": [
      ENHANCE,
    ],
  },
 "crushfang sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/kOb2zL0.png",
    "block": GOLD,
    "name": "Crushfang SR: Lumberjack the Ripper",
    "passive": {
      "name": "Run After Stun",
      "description": "Upon 0 Armor, trigger 1 block skill 1 time."
    },
    "advisor": {
      "name": "Battle Rattle",
      "description": "Attack (:crossed_swords: x 1.6) all enemies (CD: 11)"
    },
    "1B": {
      "name": "Break Cover",
      "description": "Attack (:crossed_swords: x 0.5) all enemies. Grant self Enhance"
    },
    "2B": {
      "name": "Hit The Breaks",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy"
    },
    "4B": {
      "name": "Break And Enter",
      "description": "Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor"
    },
    "status": [
      ENHANCE,
    ],
  },
 "crushfang ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/eRhIva6.png",
    "block": GOLD,
    "name": "Crushfang SSR: Jungle Juggernaut",
    "passive": {
      "name": "Run After Stun",
      "description": "Upon 0 Armor, trigger 1 block skill 2 times."
    },
    "advisor": {
      "name": "Battle Rattle",
      "description": "Attack (:crossed_swords: x 1.6) all enemies (CD: 10)"
    },
    "1B": {
      "name": "Break Cover",
      "description": "Attack (:crossed_swords: x 0.5) all enemies. Grant self Enhance"
    },
    "2B": {
      "name": "Hit The Breaks",
      "description": "Armor Penetration (:crossed_swords: x 1.5) front row enemy. Grant self (:crossed_swords: x 0.6) Armor"
    },
    "4B": {
      "name": "Break And Enter",
      "description": "Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor"
    },
    "status": [
      ENHANCE,
    ],
  },
  "crushfang skin": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/zjRFkE9.png",
    "block": GOLD,
    "name": "Crushfang Skill Book: Lord of the Caves",
    "passive": {
      "name": "Shattered Armor",
      "description": "Upon 0 Armor, trigger 2 block skill 1 time"
    },
    "advisor": {
      "name": "Declaration of War",
      "description": "Upon 0 Armor of front row ally, trigger ally 2 block skill"
    },
    "1B": {
      "name": "Timber Toss",
      "description": "Attack (:crossed_swords: x 0.5) all enemies. Grant CD+1 to all characters with Armor"
    },
    "2B": {
      "name": "Skull Smash",
      "description": "True Damage (:crossed_swords: x 1) front row enemy. Grant self (:crossed_swords: x 0.6) Armor"
    },
    "4B": {
      "name": "Rumble In The Jungle",
      "description": "Attack (:crossed_swords: x 1.2) selected enemy, then attack all enemy characters (:crossed_swords: x 1.2). Grant self (:crossed_swords: x 0.6) Armor"
    },
    "status": [],
  },
};
