import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N, SP } from "../constants";
import Kittyeyes from "./model/Kittyeyes";
import KittyeyesSP from "./model/KittyeyesSP";

export default {
  "kittyeyes n": new Kittyeyes({
    tier: TIER_N,
    sprite: "https://i.imgur.com/ex4n4Gu.png",
    title: "Cat Burglar",
    passive: {
      name: "Cheshire Hire",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Curiosity Killer",
      description:
        "True Damage (:crossed_swords: x 1.3) selected enemy. (CD: 6)"
    },
    "1B": {
      name: "Start From Scratch",
      description:
        "True Damage (:crossed_swords: x 0.5) random enemy."
    },
    "2B": {
      name: "Scratch That",
      description:
        "True Damage (:crossed_swords: x 1) selected enemy."
    },
    "4B": {
      name: "Cat Scratch Fever",
      description:
        "True Damage (:crossed_swords: x 1) all enemies."
    },
  }),
  "kittyeyes r": new Kittyeyes({
    tier: TIER_R,
    sprite: "https://i.imgur.com/ex4n4Gu.png",
    title: "Darling Thief",
    passive: {
      name: "Cheshire Hire",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Curiosity Killer",
      description:
        "True Damage (:crossed_swords: x 1.3) selected enemy. (CD: 6)"
    },
    "1B": {
      name: "Start From Scratch",
      description:
        "True Damage (:crossed_swords: x 0.5) random enemy."
    },
    "2B": {
      name: "Scratch That",
      description:
        "True Damage (:crossed_swords: x 1) selected enemy, grant :VUL."
    },
    "4B": {
      name: "Cat Scratch Fever",
      description:
        "True Damage (:crossed_swords: x 1) all enemies."
    },
  }),
  "kittyeyes sr": new Kittyeyes({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/jfeTw2X.png",
    title: "Meadow Mercenary",
    passive: {
      name: "Cheshire Hire",
      description:
        "Upon player's turn, True Damage (:crossed_swords: x 0.2) enemies with Game Tag, grant :VUL."
    },
    advisor: {
      name: "Curiosity Killer",
      description:
        "True Damage (:crossed_swords: x 1.3) selected enemy. (CD: 5)"
    },
    "1B": {
      name: "Start From Scratch",
      description:
        "True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag."
    },
    "2B": {
      name: "Scratch That",
      description:
        "True Damage (:crossed_swords: x 1) selected enemy, grant :VUL."
    },
    "4B": {
      name: "Cat Scratch Fever",
      description:
        "True Damage (:crossed_swords: x 1) all enemies."
    },
  }),
  "kittyeyes ssr": new Kittyeyes({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/hBhGtEH.png",
    title: "Pasture Prima Donna",
    passive: {
      name: "Cheshire Hire",
      description:
        "Upon player's turn, True Damage (:crossed_swords: x 0.2) enemies with Game Tag, grant :VUL for 2 turns."
    },
    advisor: {
      name: "Curiosity Killer",
      description:
        "True Damage (:crossed_swords: x 1.3) selected enemy. (CD: 4)"
    },
    "1B": {
      name: "Start From Scratch",
      description:
        "True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag."
    },
    "2B": {
      name: "Scratch That",
      description:
        "True Damage (:crossed_swords: x 1) selected enemy, grant :VUL."
    },
    "4B": {
      name: "Cat Scratch Fever",
      description:
        "True Damage (:crossed_swords: x 1) all enemies, grant Game Tag."
    },
  }),
    "kittyeyes sp": new KittyeyesSP({
    tier: SP,
    sprite: "https://i.imgur.com/2fLHa7N.png",
    title: "Sweet Snack",
    passive: {
      name: "A Maid's Duty",
      description:
        "Upon the start of each battle, cast 4-orb skill on front row ally. \nUpon the end of turn, Attack (:crossed_swords: x 0.75)(:crossed_swords: x 0.6)(:crossed_swords: x 0.45) targets with Game Tag multiple times based on number of stacks, remove Game Tag."
    },
    advisor: {
      name: "Have Some Tea",
      description:
        "Grant all enemies 2 stacks :VUL for 2 turns. (CD: 7)"
    },
    "1B": {
      name: "Clumsy Cake Mishap",
      description:
        "Heal (:crossed_swords: x 1.62) selected ally, grant 2 stacks :TEAR, clear 1 white orb."
    },
    "2B": {
      name: "I Will Protect Master",
      description:
        "Grant self :SUPPORT for 6 turns. If have Support, extend Support to 6 turns."
    },
    "4B": {
      name: "Blushing Maid",
      description:
        "Heal (:crossed_swords: x 0.36) and grant selected ally (:crossed_swords: x 2.88) Armor, grant :VIGOR."
    },
  }),
  "kittyeyes skin": new Kittyeyes({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/q9GUXN2.png",
    title: "Frosty Dart Master",
    passive: {
      name: "Chilling Bullseye",
      description:
        "Upon player's turn, Armor Penetration (:crossed_swords: x 0.225)/(:crossed_swords: x 0.45)/(:crossed_swords: x 0.675) enemy with Game Tag, grant 1/2/3 stacks :VUL."
    },
    advisor: {
      name: "Barrage of Darts",
      description:
        "Armor Penetration (:crossed_swords: x 0.75) selected enemy. If enemy has more than 50% Armor before this skill cast, grant target CD +1. (CD: 4)"
    },
    "1B": {
      name: "Locked-on Shot",
      description:
        "Armor Penetration (:crossed_swords: x 0.75) selected enemy, grant Game Tag, 3 stacks max. Only 1 enemy can have Game Tag."
    },
    "2B": {
      name: "Steady Throw",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) selected enemy, grant self :ENHANCE for 2 turns."
    },
    "4B": {
      name: "Concussive Ice Blasts",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) all enemies. In addition, Armor Penetration (:crossed_swords: x 1.125)/(:crossed_swords: x 2.25)/(:crossed_swords: x 3.375) enemy with Game Tag. Remove all Game Tags."
    },
  }),
};
