import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from "../constants";
import Nolva from "./model/Nolva";
import NolvaSP from "./model/NolvaSP";

export default {
  "nolva r": new Nolva({
    tier: TIER_R,
    sprite: "https://i.imgur.com/2xQXkln.png",
    title: "Coin Operated Toy",
    passive: {
      name: "For Gig Goals",
      description: "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Incur Mission",
      description: "Clear 4 selected black orbs. (CD: 7)"
    },
    "1B": {
      name: "Sob Scene",
      description:
        "True Damage (:crossed_swords: x 0.75) all enemies. Grant ally :VUL."
    },
    "2B": {
      name: "Love Scene Awry",
      description: "True Damage (:crossed_swords: x 1) front row enemy."
    },
    "4B": {
      name: "Remake A Scene",
      description: "True Damage (:crossed_swords: x 1.5) all enemies."
    }
  }),
  "nolva sr": new Nolva({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/zxTlBNu.png",
    title: "Doll Housekeeper",
    passive: {
      name: "For Gig Goals",
      description: "Increase self skill ratio by 20% for each ally with :VUL."
    },
    advisor: {
      name: "Incur Mission",
      description: "Clear 4 selected black orbs. (CD: 6)"
    },
    "1B": {
      name: "Sob Scene",
      description:
        "True Damage (:crossed_swords: x 0.75) all enemies. Grant ally :VUL."
    },
    "2B": {
      name: "Love Scene Awry",
      description:
        "True Damage (:crossed_swords: x 1.5) front row enemy, clear 1 black orb."
    },
    "4B": {
      name: "Remake A Scene",
      description: "True Damage (:crossed_swords: x 1.5) all enemies."
    }
  }),
  "nolva ssr": new Nolva({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/uKd93vg.png",
    title: "Muppet Artiste",
    passive: {
      name: "For Gig Goals",
      description: "Increase self skill ratio by 30% for each ally with :VUL."
    },
    advisor: {
      name: "Incur Mission",
      description: "Clear 4 selected black orbs. (CD: 5)"
    },
    "1B": {
      name: "Sob Scene",
      description:
        "True Damage (:crossed_swords: x 0.75) all enemies. Grant all allies :VUL."
    },
    "2B": {
      name: "Love Scene Awry",
      description:
        "True Damage (:crossed_swords: x 1.5) front row enemy, clear 1 black orb."
    },
    "4B": {
      name: "Remake A Scene",
      description:
        "True Damage (:crossed_swords: x 2) all enemies. Grant all allies and all enemies :VUL."
    }
  }),
  "nolva skin": new Nolva({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/XYn0FAp.png",
    title: "Somnus Puppeteer",
    passive: {
      name: "Puppet Trick: Forever",
      description: "For each downed ally, increase self skill power by 30%."
    },
    advisor: {
      name: "Puppet Trick: Little Secrets",
      description:
        "For each downed ally, increase remaining allies' skill power by 30%."
    },
    "1B": {
      name: "Puppet Trick: Hopscotch Time",
      description:
        "True Damage (:crossed_swords: x 1) all enemies and (:crossed_swords: x 0.5) all allies."
    },
    "2B": {
      name: "Puppet Trick: Naughty Child",
      description:
        "Deal damage to all player characters equal to 30% of their max HP, grant all player characters 2 stacks :DMGRED and :ENHANCE for 2 turns."
    },
    "4B": {
      name: "Puppet Trick: New Toys",
      description:
        "True Damage (:crossed_swords: x 2.5) all enemies, trigger death of allies."
    }
  }),
  "nolva sp": new NolvaSP({
    tier: SP,
    sprite: "https://i.imgur.com/3OeyrNm.png",
    title: "Dreamy Nolva",
    passive: {
      name: "Cheshire Cat's Prank",
      description:
        "Upon player's turn, remove all Armor from all player characters. \nUpon player's turn, grant self 1 stack. Upon the end of player's turn, if have 4 stacks, reset the stacks and Armor Penetration (:crossed_swords: x 3) marked enemy. Afterwards, remove the mark. \nUpon the start and end of player's turn, if no enemy is marked, mark a random enemy."
    },
    advisor: {
      name: "Wonderland Poker",
      description:
        "Upon player's turn, all allies lose all of their Armor. Allies' grant Armor effects increase by 60%."
    },
    "1B": {
      name: "Playing Card Soldiers",
      description:
        "Armor Penetration (:crossed_swords: x 0.75) selected enemy, grant selected ally (:crossed_swords: x 1.2) Armor."
    },
    "2B": {
      name: "Hat Trick",
      description:
        "Heal (:crossed_swords: x 0.9) all player characters, grant all player characters (:crossed_swords: x 1.2) Armor."
    },
    "4B": {
      name: "Mad Tea Party",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) all enemies, grant all player characters (:crossed_swords: x 2.4) Armor."
    }
  })
};
