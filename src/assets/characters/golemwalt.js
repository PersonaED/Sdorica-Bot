import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from "../constants";
import Golemwalt from "./model/Golemwalt";

export default {
  "golemwalt n": new Golemwalt({
    tier: TIER_N,
    sprite: "https://i.imgur.com/Pa15VUA.png",
    title: "Pebble Pusher",
    passive: {
      name: "Won't Cave In",
      description:
        "Upon Tier R, unlock passive skill."
    },
    advisor: {
      name: "Collision Course",
      description:
        "Armor Penetration (:crossed_swords: x 2.1) all enemies and (:crossed_swords: x 0.75) all allies. (CD: 12)"
    },
    "1B": {
      name: "On The Rocks",
      description:
        "Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns."
    },
    "2B": {
      name: "Rock N' Roll",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy."
    },
    "4B": {
      name: "Rocky Horror Show",
      description:
        "Armor Penetration (:crossed_swords: x 1.875) all enemies and (:crossed_swords: x 0.75) all allies."
    },
  }),
  "golemwalt r": new Golemwalt({
    tier: TIER_R,
    sprite: "https://i.imgur.com/Pa15VUA.png",
    title: "Boulder Brute",
    passive: {
      name: "Won't Cave In",
      description:
        "Upon death of any enemy, grant self (:crossed_swords: x 0.6) Armor."
    },
    advisor: {
      name: "Collision Course",
      description:
        "Armor Penetration (:crossed_swords: x 2.1) all enemies and (:crossed_swords: x 0.75) all allies. (CD: 12)"
    },
    "1B": {
      name: "On The Rocks",
      description:
        "Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all player characters :ENHANCE for 3 turns instead."
    },
    "2B": {
      name: "Rock N' Roll",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy."
    },
    "4B": {
      name: "Rocky Horror Show",
      description:
        "Armor Penetration (:crossed_swords: x 1.875) all enemies and (:crossed_swords: x 0.75) all allies."
    },
  }),
  "golemwalt sr": new Golemwalt({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/vZqGsc4.png",
    title: "Shrine Stone",
    passive: {
      name: "Won't Cave In",
      description:
        "Upon death of any character, grant self (:crossed_swords: x 0.6) Armor."
    },
    advisor: {
      name: "Collision Course",
      description:
        "Armor Penetration (:crossed_swords: x 2.1) all enemies and (:crossed_swords: x 0.75) all allies. (CD: 10)"
    },
    "1B": {
      name: "On The Rocks",
      description:
        "Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all player characters :ENHANCE for 3 turns instead."
    },
    "2B": {
      name: "Rock N' Roll",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy. If have Armor, Armor Penetration (:crossed_swords: x 1.5) selected enemy instead."
    },
    "4B": {
      name: "Rocky Horror Show",
      description:
        "Armor Penetration (:crossed_swords: x 1.875) all enemies and (:crossed_swords: x 0.75) all allies."
    },
  }),
  "golemwalt ssr": new Golemwalt({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/G8k9lKO.png",
    title: "Monolith of Myth",
    passive: {
      name: "Won't Cave In",
      description:
        "Upon death of any character, grant self (:crossed_swords: x 1.2) Armor."
    },
    advisor: {
      name: "Collision Course",
      description:
        "Armor Penetration (:crossed_swords: x 2.1) all enemies and (:crossed_swords: x 0.75) all allies. (CD: 8)"
    },
    "1B": {
      name: "On The Rocks",
      description:
        "Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all player characters :ENHANCE for 3 turns instead."
    },
    "2B": {
      name: "Rock N' Roll",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy. If have Armor, Armor Penetration (:crossed_swords: x 1.5) selected enemy instead."
    },
    "4B": {
      name: "Rocky Horror Show",
      description:
        "Armor Penetration (:crossed_swords: x 1.875) all enemies and (:crossed_swords: x 0.75) all allies.  If have Armor, Armor Penetration (:crossed_swords: x 1.875) all enemies instead."
    },
  }),
  "golemwalt skin": new Golemwalt({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/z8IODWI.png",
    title: "Runic Behemoth",
    passive: {
      name: "Summon The Beast",
      description:
        "Upon cast 2/4-orb skill with Armor Penetration by white character, trigger self 2/4-orb skill."
    },
    advisor: {
      name: "Friends",
      description:
        "Grant all player characters :ARMORSHIFT. (CD: 3)"
    },
    "1B": {
      name: "Trembling Roar",
      description:
        "Grant all player characters :TANKU for 2 turns. If have :TANKU, grant all allies :ARMORSHIFT for 2 turns instead."
    },
    "2B": {
      name: "Crystal Crunch",
      description:
        "Armor Penetration (:crossed_swords: x 0.5625) all enemies, clear 2 gold orbs."
    },
    "4B": {
      name: "Ground Fissure",
      description:
        "Armor Penetration (:crossed_swords: x 1.125) all enemies, scramble the orbs."
    },
  }),
};
