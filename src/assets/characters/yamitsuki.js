import { BLACK } from '../constants.js';

export default {
  "yamitsuki r": {
    "tier": "r",
    "sprite": "https://i.imgur.com/gxp5MYV.png",
    "block": BLACK,
    "name": "Yamitsuki R: Shadow Walker",
    "passive": {
      "name": "Insult To Injury",
      "description": "Upon Tier SR, unlock passive skill"
    },
    "advisor": {
      "name": "After Dark",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 7)"
    },
    "1B": {
      "name": "Just Beat It",
      "description": "Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and Damage Reduction"
    },
    "2B": {
      "name": "Beat The Hush",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy"
    },
    "4B": {
      "name": "Beat And Defeat",
      "description": "Armor Penetration (:crossed_swords: x 2.4) selected enemy"
    },
    "status": [
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max"
    ],
  },
  "yamitsuki sr": {
    "tier": "sr",
    "sprite": "https://i.imgur.com/soxgPHa.png",
    "block": BLACK,
    "name": "Yamitsuki SR: Nevermore Ninja",
    "passive": {
      "name": "Insult To Injury",
      "description": "Upon cast damage skill, if target has Vulnerability, increase skill power by 50% for this turn"
    },
    "advisor": {
      "name": "After Dark",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 6)"
    },
    "1B": {
      "name": "Just Beat It",
      "description": "Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and Damage Reduction"
    },
    "2B": {
      "name": "Beat The Hush",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy, remove Enhance and Vigilance"
    },
    "4B": {
      "name": "Beat And Defeat",
      "description": "Armor Penetration (:crossed_swords: x 2.4) selected enemy"
    },
    "status": [
      "Vulnerability: Upon incoming Attack, damage increased by 30% for each stack. 3 stacks max",
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
      "Enhance: Skill power increased by 30% for each stack. 3 stacks max",
      "Vigilance: Upon incoming Attack, chance for evading damage by 30% for each stack. 3 stacks max"
    ],
  },
  "yamitsuki ssr": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/PEDEMmr.png",
    "block": BLACK,
    "name": "Yamitsuki SSR: Twin Of Twilight",
    "passive": {
      "name": "Insult To Injury",
      "description": "Upon cast damage skill, if target has Vulnerability/Exhaust, increase skill power by 50% for this turn"
    },
    "advisor": {
      "name": "After Dark",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 5)"
    },
    "1B": {
      "name": "Just Beat It",
      "description": "Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and Damage Reduction"
    },
    "2B": {
      "name": "Beat The Hush",
      "description": "Armor Penetration (:crossed_swords: x 1.3) selected enemy, remove Enhance and Vigilance"
    },
    "4B": {
      "name": "Beat And Defeat",
      "description": "Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant 2 stacks Vulnerability and 2 stacks Exhaust for 2 turns"
    },
    "status": [
      "Vulnerability: Upon incoming Attack, damage increased by 30% for each stack. 3 stacks max",
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max",
      "Damage Reduction: Upon incoming Attack, damage decreased by 30% for each stack. 3 stacks max",
      "Enhance: Skill power increased by 30% for each stack. 3 stacks max",
      "Vigilance: Upon incoming Attack, chance for evading damage by 30% for each stack. 3 stacks max"
    ],
  },
}
