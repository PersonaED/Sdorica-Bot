import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from "../constants";
import Hestia from "./model/Hestia";
import HestiaSP from "./model/HestiaSP";

export default {
  "hestia n": new Hestia({
    tier: TIER_N,
    sprite: "https://i.imgur.com/3WvBX0Z.png",
    title: "Splash Sprite",
    passive: {
      name: "Happy Harmony",
      description: "Upon Tier R, unlock passive skill."
    },
    advisor: {
      name: "Magic Melody",
      description: "Remove all debuffs from selected ally. (CD: 4)"
    },
    "1B": {
      name: "Etude Chords",
      description: "Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN."
    },
    "2B": {
      name: "Serenade Chords",
      description: "Heal (:crossed_swords: x 1.35) selected ally."
    },
    "4B": {
      name: "Variation Chords",
      description: "Armor Penetration (:crossed_swords: x 2.25) selected enemy, grant target CD +2."
    },
  }),
  "hestia r": new Hestia({
    tier: TIER_R,
    sprite: "https://i.imgur.com/3WvBX0Z.png",
    title: "Aqua La Diva",
    passive: {
      name: "Happy Harmony",
      description: "Upon cast Heal, if target has debuff(s), grant :REGEN."
    },
    advisor: {
      name: "Magic Melody",
      description: "Remove all debuffs from selected ally. (CD: 4)"
    },
    "1B": {
      name: "Etude Chords",
      description: "Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN."
    },
    "2B": {
      name: "Serenade Chords",
      description: "Heal (:crossed_swords: x 1.35) selected ally, remove debuffs."
    },
    "4B": {
      name: "Variation Chords",
      description: "Armor Penetration (:crossed_swords: x 2.25) selected enemy, grant target CD +2."
    },
  }),
  "hestia sr": new Hestia({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/zvR0Hzm.png",
    title: "Riverbank Maiden",
    passive: {
      name: "Happy Harmony",
      description: "Upon cast Heal, if target has debuff(s), grant :REGEN for 2 turns."
    },
    advisor: {
      name: "Magic Melody",
      description: "Remove all debuffs from selected ally. (CD: 3)"
    },
    "1B": {
      name: "Etude Chords",
      description: "Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN for 2 turns."
    },
    "2B": {
      name: "Serenade Chords",
      description: "Heal (:crossed_swords: x 1.35) selected ally, remove debuffs."
    },
    "4B": {
      name: "Variation Chords",
      description: "Armor Penetration (:crossed_swords: x 2.25) selected enemy, grant target CD +2."
    },
  }),
  "hestia ssr": new Hestia({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/HNTNTGt.png",
    title: "Bride Of The Sea",
    passive: {
      name: "Happy Harmony",
      description: "Upon cast Heal, if target has debuff(s), grant :REGEN for 3 turns."
    },
    advisor: {
      name: "Magic Melody",
      description: "Remove all debuffs from selected ally. (CD: 2)"
    },
    "1B": {
      name: "Etude Chords",
      description: "Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN for 2 turns."
    },
    "2B": {
      name: "Serenade Chords",
      description: "Heal (:crossed_swords: x 1.35) selected ally, remove debuffs."
    },
    "4B": {
      name: "Variation Chords",
      description: "Armor Penetration (:crossed_swords: x 2.25) selected enemy, grant target CD +2."
     },
  }),
  "hestia skin": new Hestia({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/GFWYlmm.png",
    title: "Flowers' Whisper",
    passive: {
      name: "Spring Solo",
      description: "Upon player's turn, grant self a random buff."
    },
    advisor: {
      name: "Summer Aria",
      description: "Grant selected ally a random buff. (CD: 1)"
    },
    "1B": {
      name: "Fall Etude",
      description: "Grant self a random buff for 2 turns."
    },
    "2B": {
      name: "Winter Fantasia",
      description: "Copy all buffs this character has, grant all allies 1 stack of the copied buffs for 2 turns."
    },
    "4B": {
      name: "Hestia's Four Seasons",
      description: "Copy all buffs this character has, grant all allies 3 stacks of the copied buffs for 2 turns."
    },
  }),
  "hestia sp": new HestiaSP({
    tier: SP,
    sprite: "https://i.imgur.com/6IZzrqn.png",
    title: "Cerulean Mirage",
    passive: {
      name: "Bubble Illusion",
      description: "Upon player's turn, Heal (:crossed_swords: x 0.09)/(:crossed_swords: x 0.18)/(:crossed_swords: x 0.36)/(:crossed_swords: x 0.54) all player characters. The more bubbles Hestia has, the higher the amount healed. \nHestia has 1 bubble on her at all times."
    },
    advisor: {
      name: "Serenity Grace",
      description: "Upon cast skill continuously by the same ally, increase said ally's skill ratio by 20% for all turns. Reset upon cast skill by another ally."
    },
    "1B": {
      name: "Deep Sea Water Drop",
      description: "Attack (:crossed_swords: x 0.6)/(:crossed_swords: x 0.7)/(:crossed_swords: x 0.9)/(:crossed_swords: x 1.2) front row enemy, grant self 1 bubble, 4 max. The more bubbles Hestia has, the higher the damage. \nIf Hestia has 4 bubbles when this skill is cast, remove all but 1 bubble."
    },
    "2B": {
      name: "Sparkling Splash",
      description: "Remove all but 1 bubble, randomly cast one of the following effects: \nGrant gold character :DMGRED; grant white character :ENHANCE; grant self :WARCRY for 3 turns. \nThe more bubbles Hestia has, the more times this skill cast will repeat."
    },
    "4B": {
      name: "Furious Tidal Wave",
      description: "Remove all but 1 bubble, Attack (:crossed_swords: x 2)/(:crossed_swords: x 3)/(:crossed_swords: x 4.5)/(:crossed_swords: x 6.5) front row enemy. The more bubbles Hestia has, the higher the damage."
    },
  }),
};
