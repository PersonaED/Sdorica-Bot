import { TIER_R, TIER_SR, TIER_SSR } from "../constants";
import Karen from "./model/Karen";

export default {
  "karen r": new Karen({
    tier: TIER_R,
    sprite: "https://i.imgur.com/PkjnUhj.png",
    title: "Local Board President",
    passive: {
      name: "Armed and Ready",
      description: "If gold character has Armor, increase self skill power by 15%."
    },
    advisor: {
      name: "Public Support",
      description: "If gold character has Armor, increase black character's skill power by 15%."
    },
    "1B": {
      name: "Gun Control",
      description: "Switch to a different weapon, grant self :DMGRED for 2 turns."
    },
    "2B": {
      name: "Fire Away!",
      description: "Fire the weapon at the top of the rotation.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
    "4B": {
      name: "Total Armageddon",
      description: "Fire all weapons simultaneously.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
  }),
  "karen sr": new Karen({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/uc9adUH.png",
    title: "Senior Board President",
    passive: {
      name: "Armed and Ready",
      description: "If gold character has Armor or :DMGRED, increase self skill power by 15%. (Up to 30%)"
    },
    advisor: {
      name: "Public Support",
      description: "If gold character has Armor or :DMGRED, increase black character's skill power by 15%. (Up to 30%)"
    },
    "1B": {
      name: "Gun Control",
      description: "Switch to a different weapon, clear 1 non-black orb, grant self :DMGRED for 2 turns."
    },
    "2B": {
      name: "Fire Away!",
      description: "Fire the weapon at the top of the rotation.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
    "4B": {
      name: "Total Armageddon",
      description: "Fire all weapons simultaneously.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
  }),
  "karen ssr": new Karen({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/2lZW0z9.png",
    title: "Executive Board President",
    passive: {
      name: "Armed and Ready",
      description: "If gold character has Armor, :DMGRED or :TAUNT, increase self skill power by 15%. (Up to 45%)"
    },
    advisor: {
      name: "Public Support",
      description: "If gold character has Armor, :DMGRED or :TAUNT, increase black character's skill power by 15%. (Up to 45%)"
    },
    "1B": {
      name: "Gun Control",
      description: "Switch to a different weapon, clear 2 non-black orbs, grant self :DMGRED for 2 turns."
    },
    "2B": {
      name: "Fire Away!",
      description: "Fire the weapon at the top of the rotation.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
    "4B": {
      name: "Total Armageddon",
      description: "Fire all weapons simultaneously, grant self :WARCRY for 2 turns.\n\nMachine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.\nFlamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.\nLaser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb."
    },
  }),
};
