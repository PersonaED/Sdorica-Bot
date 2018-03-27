import { WHITE } from '../constants.js';

export default {
  "hestia n": {
    "tier": "n",
    "sprite": "https://i.imgur.com/3WvBX0Z.png",
    "block": WHITE,
    "name": "Hestia N: Splash Sprite",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon Tier R, unlock passive skill"
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 5)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally and selected enemy (:crossed_swords: x 0.45)."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally"
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [],
  },
  "hestia r": {
    "tier": "r",
    "sprite": "https://i.imgur.com/3WvBX0Z.png",
    "block": WHITE,
    "name": "Hestia R: Aqua La Diva",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has full HP, trigger target 1 block skill 1 time, grant Vulnerability."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 5)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally and selected enemy (:crossed_swords: x 0.45)."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove Exhaust."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [
      "Exhaust: Skill power decreased by 30% for each stack. 3 stacks max",
    ],
  },
  "hestia sr": {
    "tier": "sr",
    "sprite": "https://i.imgur.com/zvR0Hzm.png",
    "block": WHITE,
    "name": "Hestia SR: Riverbank Maiden",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has full HP, trigger target 1 block skill 1 time."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 4)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally and selected enemy (:crossed_swords: x 0.45)."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove debuffs."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [],
  },
  "hestia ssr": {
    "tier": "ssr",
    "sprite": "https://i.imgur.com/HNTNTGt.png",
    "block": WHITE,
    "name": "Hestia SSR: Bride Of The Sea",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has full HP, trigger target 1 block skill 1/2 times."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 3)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally and selected enemy (:crossed_swords: x 0.45)."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove debuffs."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy, heal (:crossed_swords: x 0.9) target "
    },
    "status": [],
  },
};