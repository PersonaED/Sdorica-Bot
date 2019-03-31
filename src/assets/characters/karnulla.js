import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from "../constants";
import Karnulla from "./model/Karnulla";

export default {
  "karnulla n": new Karnulla({
    tier: TIER_N,
    sprite: "https://i.imgur.com/7SO2zs8.png",
    title: "Mouth of Madness",
    passive: {
      name: "Underwater Craft",
      description:
        "Upon incoming damage skill, retaliate with Armor Penetration (:crossed_swords: x 0.375) against selected enemy."
    },
    advisor: {
      name: "Submerge Urge",
      description:
        "Allies' Armor Penetration effects increase by 15%."
    },
    "1B": {
      name: "Doom Bloom",
      description:
        "Grant self 2 stacks :VIGIL. Reset front row enemy CD."
    },
    "2B": {
      name: "Annihilate Bloomer",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) front row enemy."
    },
    "4B": {
      name: "In Full Bloom",
      description:
        "Grant self 3 stacks :VIGIL. Reset all enemies CD."
    },
  }),
  "karnulla r": new Karnulla({
    tier: TIER_R,
    sprite: "https://i.imgur.com/7SO2zs8.png",
    title: "Crocodile Dummy",
    passive: {
      name: "Underwater Craft",
      description:
        "Upon incoming damage skill, retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy."
    },
    advisor: {
      name: "Submerge Urge",
      description:
        "Allies' Armor Penetration effects increase by 20%."
    },
    "1B": {
      name: "Doom Bloom",
      description:
        "Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD."
    },
    "2B": {
      name: "Annihilate Bloomer",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) front row enemy."
    },
    "4B": {
      name: "In Full Bloom",
      description:
        "Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD."
    },
  }),
  "karnulla sr": new Karnulla({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/V78vDwv.png",
    title: "Greater Alligator",
    passive: {
      name: "Underwater Craft",
      description:
        "Upon incoming damage skill, retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy, grant :EXH."
    },
    advisor: {
      name: "Submerge Urge",
      description:
        "Allies' Armor Penetration effects increase by 25%."
    },
    "1B": {
      name: "Doom Bloom",
      description:
        "Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD."
    },
    "2B": {
      name: "Annihilate Bloomer",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self :ENHANCE for 3 turns."
    },
    "4B": {
      name: "In Full Bloom",
      description:
        "Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD."
    },
  }),
  "karnulla ssr": new Karnulla({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/WzSB5FA.png",
    title: "Apex Predator",
    passive: {
      name: "Underwater Craft",
      description:
        "Upon incoming damage skill, retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy, grant :EXH. If have :ENHANCE, retaliate against all enemies instead."
    },
    advisor: {
      name: "Submerge Urge",
      description:
        "Allies' Armor Penetration effects increase by 30%."
    },
    "1B": {
      name: "Doom Bloom",
      description:
        "Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD."
    },
    "2B": {
      name: "Annihilate Bloomer",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns."
    },
    "4B": {
      name: "In Full Bloom",
      description:
        "Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD."
    },
  }),
  "karnulla skin": new Karnulla({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/93ioJnW.png',
    title: "Mutated Croc",
    passive: {
      name: "March Of The Frogodiles",
      description:
        "Upon death of any enemy, Armor Penetration (:crossed_swords: x 1.05) all enemies and (:crossed_swords: x 0.6) all allies, grant :TEAR, clear all gold orbs."
    },
    advisor: {
      name: "Croc's Revenge",
      description:
        "Upon death of any character by enemy skill, grant enemy :EXH for all turns."
    },
    "1B": {
      name: "Quick Little Appetizers",
      description:
        "Armor Penetration (:crossed_swords: x 0.525) selected enemy, grant :VUL. Heal (:crossed_swords: x 0.45) self, clear 2 non-gold orbs."
    },
    "2B": {
      name: "Fresh Taste Test",
      description:
        "Armor Penetration (:crossed_swords: x 0.75) all enemies, grant :EXH, clear 2 gold orbs."
    },
    "4B": {
      name: "Nutritious, Delicious",
      description:
        "Grant self :WARCRY for 3 turns, :TAUNT for 3 turns and 3 stacks :VIGIL. Reset all enemies CD."
    },
  }),
};
