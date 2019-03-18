import { TIER_R, TIER_SR, TIER_SSR } from "../constants";
import DumbBearSoldier from "./model/DumbBearSoldier";

export default {
  "dumbbearsoldier r": new DumbBearSoldier({
    nameOVERRIDE: "Dumb Bear Soldier R",
    tier: TIER_R,
    sprite: "https://i.imgur.com/8e60AC9.png",
    title: "Bumbling Boyfriend",
    passive: {
      name: "Wife's Boxed Lunch",
      description:
        "Upon start of each battle, grant self :TAUNT for 20 turns and 1 stack Wife's Boxed Lunch. When all stacks of Wife's Boxed Lunch are removed, enter combat mode."
    },
    advisor: {
      name: "Angry For Love",
      description:
        "Grant all allies :RAGE for 3 turns. (CD: 7)"
    },
    "1B": {
      name: "Shroom Smack",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 15 turns, Heal (:crossed_swords: x 0.9) self. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2) front row enemy instead."
    },
    "2B": {
      name: "Steak Slap",
      description:
        "Remove 1 stack Wife's Boxed Lunch, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) self 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2)/(:crossed_swords: x 1.2) front row enemy 2 times instead."
    },
    "4B": {
      name: "Tasty Bento Attack!",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 10 turns and :ENHANCE for 10 turns, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.5)/(:crossed_swords: x 1.5)/(:crossed_swords: x 1.5) front row enemy 3 times instead."
    },
  }),
  "dumbbearsoldier sr": new DumbBearSoldier({
    nameOVERRIDE: "Dumb Bear Soldier SR",
    tier: TIER_SR,
    sprite: "https://i.imgur.com/Z3tYsgq.png",
    title: "Clueless Lover",
    passive: {
      name: "Wife's Boxed Lunch",
      description:
        "Upon start of each battle, grant self :TAUNT for 20 turns and 2 stacks Wife's Boxed Lunch. When all stacks of Wife's Boxed Lunch are removed, enter combat mode."
    },
    advisor: {
      name: "Angry For Love",
      description:
        "Grant all allies :RAGE for 3 turns. (CD: 6)"
    },
    "1B": {
      name: "Shroom Smack",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 15 turns, Heal (:crossed_swords: x 0.9) self. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2) front row enemy instead."
    },
    "2B": {
      name: "Steak Slap",
      description:
        "Remove 1 stack Wife's Boxed Lunch, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) self 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2)/(:crossed_swords: x 1.2) front row enemy 2 times instead."
    },
    "4B": {
      name: "Tasty Bento Attack!",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 15 turns and :ENHANCE for 15 turns, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.5)/(:crossed_swords: x 1.5)/(:crossed_swords: x 1.5) front row enemy 3 times instead."
    },
  }),
  "dumbbearsoldier ssr": new DumbBearSoldier({
    nameOVERRIDE: "Dumb Bear Soldier SSR",
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/CKHbzsJ.png",
    title: "Clumsy Husband",
    passive: {
      name: "Wife's Boxed Lunch",
      description:
        "Upon start of each battle, grant self :TAUNT for 20 turns and 3 stacks Wife's Boxed Lunch. When all stacks of Wife's Boxed Lunch are removed, enter combat mode."
    },
    advisor: {
      name: "Angry For Love",
      description:
        "Grant all allies :RAGE for 3 turns. (CD: 5)"
    },
    "1B": {
      name: "Nom Nom, Fresh Fish!",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 15 turns, Heal (:crossed_swords: x 0.9) self. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2) front row enemy instead."
    },
    "2B": {
      name: "Lobster Swipe",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :ENHANCE for 15 turns, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) self 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.2)/(:crossed_swords: x 1.2) front row enemy 2 times instead."
    },
    "4B": {
      name: "Prime Onigiri Attack!",
      description:
        "Remove 1 stack Wife's Boxed Lunch, grant self :DMGRED for 15 turns and :ENHANCE for 15 turns, Heal (:crossed_swords: x 0.9)/(:crossed_swords: x 0.9) 2 times. \nIf in combat mode, Armor Penetration (:crossed_swords: x 1.5)/(:crossed_swords: x 1.5)/(:crossed_swords: x 1.5) front row enemy 3 times instead."
    },
  }),
};
