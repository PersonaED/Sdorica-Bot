import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from "../constants";
import Tica from "./model/Tica";
import TicaSP from "./model/TicaSP";

export default {
  "tica n": new Tica({
    tier: TIER_N,
    sprite: "https://i.imgur.com/aBjWhez.png",
    title: "Fortune Rookie",
    passive: {
      name: "Rune Roll",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Healing Vibes",
      description:
        "Allies' Heal effects increase by 15%."
    },
    "1B": {
      name: "High Light",
      description:
        "Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns."
    },
    "2B": {
      name: "Flash Light",
      description:
        "Attack (:crossed_swords: x 1.5) selected enemy."
    },
    "4B": {
      name: "Let There Be Light",
      description:
        "Heal (:crossed_swords: x 2.25) ally with lowest HP %."
    },
  }),
  "tica r": new Tica({
    tier: TIER_R,
    sprite: "https://i.imgur.com/aBjWhez.png",
    title: "Whizz Kid",
    passive: {
      name: "Rune Roll",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Healing Vibes",
      description:
        "Allies' Heal effects increased by 20%."
    },
    "1B": {
      name: "High Light",
      description:
        "Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns."
    },
    "2B": {
      name: "Flash Light",
      description:
        "Attack (:crossed_swords: x 1.5) selected enemy."
    },
    "4B": {
      name: "Let There Be Light",
      description:
        "Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns."
    },
  }),
  "tica sr": new Tica({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/rntaxhW.png",
    title: "Dream Snatcher",
    passive: {
      name: "Rune Roll",
      description:
        "Upon cast 2-orb skill continuously 2 times, trigger 2-orb skill 1 time."
    },
    advisor: {
      name: "Healing Vibes",
      description:
        "Allies' Heal effects increased by 25%."
    },
    "1B": {
      name: "High Light",
      description:
        "Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns."
    },
    "2B": {
      name: "Flash Light",
      description:
        "Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white orb."
    },
    "4B": {
      name: "Let There Be Light",
      description:
        "Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns."
    },
  }),
  "tica ssr": new Tica({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/3CpQ0Mi.png",
    title: "Miracle Maker",
    passive: {
      name: "Rune Roll",
      description:
        "Upon cast 2-orb skill continuously 2 times, trigger 2-orb skill 2 times."
    },
    advisor: {
      name: "Healing Vibes",
      description:
        "Allies' Heal effects increased by 30%."
    },
    "1B": {
      name: "High Light",
      description:
        "Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns."
    },
    "2B": {
      name: "Flash Light",
      description:
        "Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white orb."
    },
    "4B": {
      name: "Let There Be Light",
      description:
        "Heal (:crossed_swords: x 2.25) selected ally, grant :DMGRED for 3 turns."
    },
  }),
    "tica sp": new TicaSP({
    tier: SP,
    sprite: "https://i.imgur.com/MQEJ2QU.png",
    title: "Late Night Puppet Show",
    passive: {
      name: "Winding Up",
      description:
        "Upon incoming damage skill, grant self :CLOCKWORK. If have :DMGRED, grant self 2 stacks of :CLOCKWORK instead."
    },
    advisor: {
      name: "Mystical Light",
      description:
        "Upon the end of player's turn, if ally has less than 20% HP, grant 2 stacks :DMGRED."
    },
    "1B": {
      name: "Party Must Go On!",
      description:
        "Grant self :DMGRED for 3 turns."
    },
    "2B": {
      name: "Clanging Cymbals",
      description:
        "Grant all player characters (:crossed_swords: x 0.36) Armor and remove all :CLOCKWORK stacks. For each stack of :CLOCKWORK, grant (:crossed_swords: x 0.36) Armor 1 extra time."
    },
    "4B": {
      name: "Who Let The Dolls Out",
      description:
        "Attack (:crossed_swords: x 2) selected enemy and remove all :CLOCKWORK stacks. For each stack of :CLOCKWORK, Attack (:crossed_swords: x 0.5) 1 extra time."
    },
  }),
  "tica skin-unreleased": new Tica({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/IYEa3Me.png",
    title: "?????",
    passive: {
      name: "?????",
      description:
        "?????"
    },
    advisor: {
      name: "?????",
      description:
        "?????"
    },
    "1B": {
      name: "?????",
      description:
        "?????"
    },
    "2B": {
      name: "?????",
      description:
        "?????"
    },
    "4B": {
      name: "?????",
      description:
        "?????"
    },
  }),
};
