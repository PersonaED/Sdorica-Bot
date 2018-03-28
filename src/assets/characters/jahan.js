import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAUST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK, POISON } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
 "jahan r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/z8l1ITW.png",
    "block": GOLD,
    "name": "Jahan R: Aristocrat Brat",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1) against selected enemy"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming damage skill against ally, if ally have Taunt, 20% chance to trigger target 4 block skill"
    },
    "1B": {
      "name": "Dead Giveaway",
      "description": "Grant self Taunt for 5 turns. Reset front row enemy CD"
    },
    "2B": {
      "name": "Dead Wait",
      "description": "Grant self Taunt for 2 turns and Damage Reduction. If have Taunt, Heal (:crossed_swords: x 1.8) self instead"
    },
    "4B": {
      "name": "Knock 'Em Dead",
      "description": "Attack (:crossed_swords: x 3) selected enemy"
    },
    "status": [
      DAMAGEREDUCTION,
    ],
  },
 "jahan sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/xAggLI4.png",
    "block": GOLD,
    "name": "Jahan SR: Charms and Noble",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming damage skill against ally, if ally have Taunt, 25% chance to trigger target 4 block skill"
    },
    "1B": {
      "name": "Dead Giveaway",
      "description": "Grant self Taunt for 5 turns. Reset front row enemy CD"
    },
    "2B": {
      "name": "Dead Wait",
      "description": "Grant self Taunt for 2 turns and 2 stacks Damage Reduction. If have Taunt, Heal (:crossed_swords: x 1.8) self instead"
    },
    "4B": {
      "name": "Knock 'Em Dead",
      "description": "Attack (:crossed_swords: x 4) selected enemy, reset target CD"
    },
    "status": [
      DAMAGEREDUCTION,
    ],
  },
 "jahan ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/Qz7idrT.png",
    "block": GOLD,
    "name": "Jahan SSR: Sir Dance a Lot",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy, grant poison"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming damage skill against ally, if ally have Taunt, 30% chance to trigger target 4 block skill"
    },
    "1B": {
      "name": "Dead Giveaway",
      "description": "Grant self Taunt for 5 turns. Reset front row enemy CD"
    },
    "2B": {
      "name": "Dead Wait",
      "description": "Grant self Taunt for 2 turns and Damage Reduction for 2 turns. If have Taunt, Heal (:crossed_swords: x 1.8) self instead"
    },
    "4B": {
      "name": "Knock 'Em Dead",
      "description": "Attack (:crossed_swords: x 4) selected enemy, reset target CD"
    },
    "status": [
      DAMAGEREDUCTION,
      POISON,
    ],
  },
 "jahan skin": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/fKrWzaV.png",
    "block": GOLD,
    "name": "Jahan Skillbook: Shiny Derpy Pinky",
    "passive": {
      "name": "Borrowed Steel",
      "description": "Upon incoming damage skill, if have Taunt, trigger random ally 1 block skill"
    },
    "advisor": {
      "name": "Tactical Taunting",
      "description": "Reset selected enemy CD (CD: 3)"
    },
    "1B": {
      "name": "Dead Giveaway",
      "description": "Grant self Taunt for 5 turns. Reset front row enemy CD"
    },
    "2B": {
      "name": "Mocking Jab",
      "description": "Grant self Taunt for 2 turns and 2 stacks Damage Reduction. If have Taunt, True Damage (:crossed_swords: x 1) all enemies, grant Exhaust and Tear"
    },
    "4B": {
      "name": "Pièce De Résistance ",
      "description": "True Damage (:crossed_swords: x 4) selected enemy, reset all enemies CD"
    },
    "status": [
      DAMAGEREDUCTION,
      EXHAUST,
      TEAR,
    ],
  },
};
