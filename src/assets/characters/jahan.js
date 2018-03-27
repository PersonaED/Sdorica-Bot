import { GOLD } from '../constants.js';

export default {
 "jahan r": {
    "tier": "r",
    "sprite": "https://i.imgur.com/z8l1ITW.png",
    "block": GOLD,
    "name": "Jahan R: Aristocrat Brat",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming Attack, if have Taunt, trigger retaliate (:crossed_swords: x 1) against selected enemy"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming Attack of ally, if ally have Taunt, 20% chance to trigger target 4 block skill"
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
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
    ],
  },
 "jahan sr": {
    "tier": "sr",
    "sprite": "https://i.imgur.com/xAggLI4.png",
    "block": GOLD,
    "name": "Jahan SR: Charms and Noble",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming Attack, if have Taunt, trigger retaliate (:crossed_swords: x 1.5) against selected enemy"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming Attack of ally, if ally have Taunt, 25% chance to trigger target 4 block skill"
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
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
    ],
  },
 "jahan ssr": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/Qz7idrT.png",
    "block": GOLD,
    "name": "Jahan SSR: Sir Dance a Lot",
    "passive": {
      "name": "Jump Grope",
      "description": "Upon incoming Attack, if have Taunt, trigger retaliate (:crossed_swords: x 1.5) against selected enemy, grant poison"
    },
    "advisor": {
      "name": "Trick Is Treat",
      "description": "Upon incoming Attack of ally, if ally have Taunt, 30% chance to trigger target 4 block skill"
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
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
      "Poison: Upon turn, lose 10% current HP for each stack, 3 stacks max",
    ],
  },
 "jahan skin": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/fKrWzaV.png",
    "block": GOLD,
    "name": "Jahan Skillbook: Shiny Derpy Pinky",
    "passive": {
      "name": "Borrowed Steel",
      "description": "Upon incoming Attack, if have Taunt, trigger random ally 1 block skill"
    },
    "advisor": {
      "name": "Tactical Taunting",
      "description": "Upon incoming Attack of ally, if ally has Taunt, 30% chance for trigger 4 block skill"
    },
    "1B": {
      "name": "Dead Giveaway",
      "description": "Grant self Taunt for 5 turns. Reset front row enemy CD"
    },
    "2B": {
      "name": "Mocking Jab",
      "description": "Grant self Taunt and 2 stacks Damage Reduction for 2 turns. If have Taunt, True Damage (:crossed_swords: x 1) all enemies, grant Exhaust and Tear"
    },
    "4B": {
      "name": "Pièce De Résistance ",
      "description": "True Damage (:crossed_swords: x 4) selected enemy, reset all enemies CD"
    },
    "status": [
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max",
      "Tear: Upon cast skill, lose HP equal to 30% skill power for each stack. 3 stacks max",
    ],
  },
};
