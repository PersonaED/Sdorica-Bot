import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK, VIGILANCE } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
  "yamitsuki r": {
    "tier": TIER_R,
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
      DAMAGEREDUCTION
    ],
  },
  "yamitsuki sr": {
    "tier": TIER_SR,
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
      VULNERABILITY,
      DAMAGEREDUCTION,
      ENHANCE,
      VIGILANCE
    ],
  },
  "yamitsuki ssr": {
    "tier": TIER_SSR,
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
      VULNERABILITY,
      EXHAST,
      DAMAGEREDUCTION,
      ENHANCE,
      VIGILANCE
    ],
  },
}
