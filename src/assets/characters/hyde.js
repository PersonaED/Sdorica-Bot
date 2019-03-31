import { TIER_R, TIER_SR, TIER_SSR } from "../constants";
import Hyde from "./model/Hyde";

export default {
  "hyde r": new Hyde({
    tier: TIER_R,
    sprite: "https://i.imgur.com/a3W9zp0.png",
    title: "Cottage Teacher",
    passive: {
      name: "Furinkazan",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Chains of Deceit",
      description:
        "2 orbs become white. (CD: 7)"
    },
    "1B": {
      name: "Oracle's Vision",
      description:
        "Grant self :CHARISMA."
    },
    "2B": {
      name: "Strategic Instruction",
      description: 
        "Trigger selected ally's 1-orb skill 2 times."
    },
    "4B": {
      name: "Guaranteed Victory",
      description:
        "Attack (:crossed_swords: x 2.5) all enemies whose CD is at 1 or 2."
    },
  }),
  "hyde sr": new Hyde({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/tEN2pwx.png",
    title: "Wartime Minister",
    passive: {
      name: "Furinkazan",
      description: 
        "This character has random hidden effects. Change upon player's turn. \n\nForest: Allies' Heal and grant Armor effects increase by 40%; damage effects decrease by 20%. \nFire: Allies' damage effects increase by 40%; Heal and grant Armor effects decrease by 20%."
    },
    advisor: {
      name: "Chains of Deceit",
      description: 
        "2 orbs become white. (CD: 6)"
    },
    "1B": {
      name: "Oracle's Vision",
      description: 
        "Grant self :CHARISMA for 1 turn and :FORESIGHT for 2 turns."
    },
    "2B": {
      name: "Strategic Instruction",
      description:
        "Trigger selected ally's 1-orb skill 2 times."
    },
    "4B": {
      name: "Guaranteed Victory",
      description:
        "Attack (:crossed_swords: x 2.5) all enemies whose CD is at 1 or 2."
    },
  }),
  "hyde ssr": new Hyde({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/5WXFyMi.png",
    title: "Legendary Conspirator",
    passive: {
      name: "Furinkazan",
      description: 
        "This character has random hidden effects. Change upon player's turn. \n\nWind: Increase black character's skill power by 30%. \nForest: Allies' Heal and grant Armor effects increase by 40%; damage effects decrease by 20%. \nFire: Allies' damage effects increase by 40%; Heal and grant Armor effects decrease by 20%. \nMountain: Increase gold character's skill power by 30%."
    },
    advisor: {
      name: "Chains of Deceit",
      description:
        "2 orbs become white. (CD: 5)"
    },
    "1B": {
      name: "Oracle's Vision",
      description:
        "Grant self :CHARISMA for 1 turn and :FORESIGHT for 3 turns."
    },
    "2B": {
      name: "Strategic Instruction",
      description:
        "Trigger selected ally's 1-orb skill 2 times."
    },
    "4B": {
      name: "Guaranteed Victory",
      description:
        "Attack (:crossed_swords: x 2.5) all enemies whose CD is at 1 or 2."
    },
  }),
};
