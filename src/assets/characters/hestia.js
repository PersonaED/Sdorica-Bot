import { BLACK, WHITE, GOLD } from '../constants.js';
import { EXHAUST, DAMAGEREDUCTION, VULNERABILITY, TANKUP, ENHANCE, TEAR, SHOCKLOCK, REGEN } from '../constants.js';
import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants.js';

export default {
  "hestia n": {
    "tier": TIER_N,
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
      "description": "Heal (:crossed_swords: x 1.08) selected ally, grant Regen."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally"
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [
      REGEN,
    ],
  },
  "hestia r": {
    "tier": TIER_R,
    "sprite": "https://i.imgur.com/3WvBX0Z.png",
    "block": WHITE,
    "name": "Hestia R: Aqua La Diva",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has debuff(s), grant Regen."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 5)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally, grant Regen."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove debuffs."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [
      REGEN,
    ],
  },
  "hestia sr": {
    "tier": TIER_SR,
    "sprite": "https://i.imgur.com/zvR0Hzm.png",
    "block": WHITE,
    "name": "Hestia SR: Riverbank Maiden",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has debuff(s), grant Regen for 2 turns."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 4)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally, grant Regen for 2 turns."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove debuffs."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy."
    },
    "status": [
      REGEN,
    ],
  },
  "hestia ssr": {
    "tier": TIER_SSR,
    "sprite": "https://i.imgur.com/HNTNTGt.png",
    "block": WHITE,
    "name": "Hestia SSR: Bride Of The Sea",
    "passive": {
      "name": "Happy Harmony",
      "description": "Upon cast Heal, if target has debuff(s), grant Regen for 3 turns."
    },
    "advisor": {
      "name": "Magic Melody",
      "description": "Remove all debuffs from selected ally. (CD: 3)"
    },
    "1B": {
      "name": "Etude Chords",
      "description": "Heal (:crossed_swords: x 1.08) selected ally, grant Regen for 2 turns."
    },
    "2B": {
      "name": "Serenade Chords",
      "description": "Heal (:crossed_swords: x 1.26) selected ally, remove debuffs."
    },
    "4B": {
      "name": "Variation Chords",
      "description": "Armor Penetration (:crossed_swords: x 2.25) selected enemy, heal (:crossed_swords: x 0.9) target "
    },
    "status": [
      REGEN,
    ],
  },
};
