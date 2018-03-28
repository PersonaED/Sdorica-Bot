import { WHITE } from '../constants.js';

export default {
  "lio r": {
    "tier": "r",
    "sprite": "https://i.imgur.com/Me0Jhgr.png",
    "block": WHITE,
    "name": "Lio R: Gallant Scout",
    "passive": {
      "name": "Base Booster",
      "description": "Upon Tier SR, unlock passive skill."
    },
    "advisor": {
      "name": "Nom Nom Nutrition",
      "description": "Heal (:crossed_swords: x 1.5) selected ally. (CD: 7)"
    },
    "1B": {
      "name": "Junk Food",
      "description": "Heal (:crossed_swords: x 0.9) selected ally, grant Exhaust for 3 turns."
    },
    "2B": {
      "name": "Food Aid",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Food Lay Waste",
      "description": "Armor Penetration (:crossed_swords: x 2.4) back row enemy."
    },
    "status": [
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max.",
    ],
  },
  "lio sr": {
    "tier": "sr",
    "sprite": "https://i.imgur.com/uJa3NaQ.png",
    "block": WHITE,
    "name": "Lio SR: Ace Cadet",
    "passive": {
      "name": "Base Booster",
      "description": "Upon turn, grant self 1 stack. Upon 4 stacks, skill power increased by 50% for next skill, reset stacks."
    },
    "advisor": {
      "name": "Nom Nom Nutrition",
      "description": "Heal (:crossed_swords: x 1.5) selected ally. (CD: 6)"
    },
    "1B": {
      "name": "Junk Food",
      "description": "Heal (:crossed_swords: x 0.9) selected ally, grant Exhaust for 2 turns."
    },
    "2B": {
      "name": "Food Aid",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Food Lay Waste",
      "description": "Armor Penetration (:crossed_swords: x 2.4) back row enemy."
    },
    "status": [
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max.",
    ],
  },
  "lio ssr": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/eEi1zGu.png",
    "block": WHITE,
    "name": "Lio SSR: Homeland In Security",
    "passive": {
      "name": "Base Booster",
      "description": "Upon turn, grant self 1 stack. Upon 3 stacks, skill power increased by 50% for next skill, reset stacks."
    },
    "advisor": {
      "name": "Nom Nom Nutrition",
      "description": "Heal (:crossed_swords: x 1.5) selected ally. (CD: 5)"
    },
    "1B": {
      "name": "Junk Food",
      "description": "Heal (:crossed_swords: x 0.9) selected ally, grant Exhaust."
    },
    "2B": {
      "name": "Food Aid",
      "description": "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      "name": "Food Lay Waste",
      "description": "Armor Penetration (:crossed_swords: x 2.4) back row enemy."
    },
    "status": [
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max.",
    ],
  },
  "lio skin": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/teiwY8c.png",
    "block": WHITE,
    "name": "Lio Skill Book: Mandora Shooter",
    "passive": {
      "name": "Well-timed Support",
      "description": "Upon start of each battle, heal allies to full HP."
    },
    "advisor": {
      "name": "Roll The Dice",
      "description": "Allies' Armor Penetration skills have 30% chance to trigger target CD+1."
    },
    "1B": {
      "name": "Toxic Mandora",
      "description": "Grant selected character Poison."
    },
    "2B": {
      "name": "Carrot Cannon",
      "description": "Armor Penetration (:crossed_swords: x 1.5) back row enemy. 50% chance to trigger target CD+1"
    },
    "4B": {
      "name": "Super Mandrake",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy. 50% chance to trigger target CD+3"
    },
    "status": [
      "Poison: Upon turn, lose 10% of current HP for each stack. 3 stacks max. Remove upon receive Heal.",
    ],
  },
};