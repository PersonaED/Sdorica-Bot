import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from "../constants";
import Lio from "./model/Lio";
import LioSP from "./model/LioSP";

export default {
  "lio r": new Lio({
    tier: TIER_R,
    sprite: "https://i.imgur.com/Me0Jhgr.png",
    title: "Gallant Scout",
    passive: {
      name: "Base Booster",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Nom Nom Nutrition",
      description:
        "Heal (:crossed_swords: x 2.34) selected ally. (CD: 7)"
    },
    "1B": {
      name: "Junk Food",
      description:
        "Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 3 turns."
    },
    "2B": {
      name: "Food Aid",
      description:
        "Heal (:crossed_swords: x 1.8) selected ally."
    },
    "4B": {
      name: "Food Lay Waste",
      description:
        "Armor Penetration (:crossed_swords: x 3) back row enemy."
    },
  }),
  "lio sr": new Lio({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/uJa3NaQ.png",
    title: "Ace Cadet",
    passive: {
      name: "Base Booster",
      description:
        "Upon the end of player's turn, grant self 1 stack. Upon 4 stacks, increase skill ratio by 50% for next skill, reset stacks."
    },
    advisor: {
      name: "Nom Nom Nutrition",
      description:
        "Heal (:crossed_swords: x 2.34) selected ally. (CD: 6)"
    },
    "1B": {
      name: "Junk Food",
      description:
        "Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 2 turns."
    },
    "2B": {
      name: "Food Aid",
      description:
        "Heal (:crossed_swords: x 1.8) selected ally."
    },
    "4B": {
      name: "Food Lay Waste",
      description:
        "Armor Penetration (:crossed_swords: x 3) back row enemy."
    },
  }),
  "lio ssr": new Lio({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/eEi1zGu.png",
    title: "Homeland In Security",
    passive: {
      name: "Base Booster",
      description:
        "Upon the end of player's turn, grant self 1 stack. Upon 3 stacks, increase skill ratio by 50% for next skill, reset stacks."
    },
    advisor: {
      name: "Nom Nom Nutrition",
      description:
        "Heal (:crossed_swords: x 2.34) selected ally. (CD: 5)"
    },
    "1B": {
      name: "Junk Food",
      description:
        "Heal (:crossed_swords: x 0.9) selected ally, grant :EXH."
    },
    "2B": {
      name: "Food Aid",
      description:
        "Heal (:crossed_swords: x 1.8) selected ally."
    },
    "4B": {
      name: "Food Lay Waste",
      description:
        "Armor Penetration (:crossed_swords: x 3) back row enemy."
    },
  }),
 "lio skin": new Lio({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/teiwY8c.png",
    title: "Mandora Shooter",
    passive: {
      name: "Well-timed Support",
      description:
        "Upon start of each battle, heal allies to full HP."
    },
    advisor: {
      name: "Roll The Dice",
      description:
        "Allies' Armor Penetration skills have 30% chance to trigger target CD +1."
    },
    "1B": {
      name: "Toxic Mandora",
      description:
        "Grant selected character :POIS."
    },
    "2B": {
      name: "Carrot Cannon",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) back row enemy. 50% chance to trigger target CD +1."
    },
    "4B": {
      name: "Super Mandrake",
      description:
        "Armor Penetration (:crossed_swords: x 2.25) selected enemy. 50% chance to trigger target CD +3."
    },
  }),
  "lio sp": new LioSP({
    tier: SP,
    sprite: "https://i.imgur.com/3on3iAE.png",
    title: "Flutterfly MAX!",
    passive: {
      name: "Soul Energy Refuel",
      description:
        "Upon being damaged by ally, grant self 1 stack :OVERLOAD."
    },
    advisor: {
      name: "Hyper B, B, Beam!",
      description:
        "Grant all enemies CD +1. (CD: 6)"
    },
    "1B": {
      name: "Flutterfly on Deck",
      description:
        "Regular mode: Grant self (:crossed_swords: x 1.8) Armor.\nIf have :OVERLOAD: Heal (:crossed_swords: x 2.25) self, remove 1 stack of :OVERLOAD."
    },
    "2B": {
      name: "Booster Gold",
      description:
        "Regular mode: Armor Penetration (:crossed_swords: x 0.75) all enemies.\nIf have :OVERLOAD: Grant all enemies CD +2, remove 1 stack of :OVERLOAD."
    },
    "4B": {
      name: "Supernova Insulator",
      description:
        "Regular mode: Grant self (:crossed_swords: x 3.6) Armor and :OVERLOAD.\nIf have :OVERLOAD: Grant all enemies CD +3, remove 1 stack of :OVERLOAD."
    },
  }),
};
