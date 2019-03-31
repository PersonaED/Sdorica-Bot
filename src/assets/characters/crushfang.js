import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from "../constants";
import Crushfang from "./model/Crushfang";

export default {
  "crushfang r": new Crushfang({
    tier: TIER_R,
    sprite: "https://i.imgur.com/5uoQiEX.png",
    title: "Abe Ruthless",
    passive: {
      name: "Run After Stun",
      description: 
        "Upon 0 Armor, grant self :ENHANCE."
    },
    advisor: {
      name: "Battle Rattle",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies. (CD: 10)"
    },
    "1B": {
      name: "Break Cover",
      description:
        "Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE."
    },
    "2B": {
      name: "Hit The Breaks",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy."
    },
    "4B": {
      name: "Break And Enter",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies."
    },
  }),
  "crushfang sr": new Crushfang({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/kOb2zL0.png",
    title: "Lumberjack the Ripper",
    passive: {
      name: "Run After Stun",
      description:
        "Upon 0 Armor, trigger 1-orb skill 1 time."
    },
    advisor: {
      name: "Battle Rattle",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies. (CD: 8)"
    },
    "1B": {
      name: "Break Cover",
      description:
        "Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE."
    },
    "2B": {
      name: "Hit The Breaks",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy."
    },
    "4B": {
      name: "Break And Enter",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor."
    },
  }),
  "crushfang ssr": new Crushfang({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/eRhIva6.png",
    title: "Jungle Juggernaut",
    passive: {
      name: "Run After Stun",
      description:
        "Upon 0 Armor, trigger 1-orb skill 2 times."
    },
    advisor: {
      name: "Battle Rattle",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies. (CD: 7)"
    },
    "1B": {
      name: "Break Cover",
      description:
        "Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE."
    },
    "2B": {
      name: "Hit The Breaks",
      description:
        "Armor Penetration (:crossed_swords: x 1.5) front row enemy. Grant self (:crossed_swords: x 0.6) Armor."
    },
    "4B": {
      name: "Break And Enter",
      description:
        "Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor."
    },
  }),
  "crushfang skin": new Crushfang({
    tier: SKILL_BOOK,
    sprite: "https://i.imgur.com/zjRFkE9.png",
    title: "Lord of the Caves",
    passive: {
      name: "Shattered Armor",
      description:
        "Upon 0 Armor, trigger 2-orb skill 1 time."
    },
    advisor: {
      name: "Declaration of War",
      description:
        "Upon 0 Armor of front row ally, trigger 2-orb skill."
    },
    "1B": {
      name: "Timber Toss",
      description:
        "Attack (:crossed_swords: x 0.5) all enemies. Grant CD +1 to all characters with Armor."
    },
    "2B": {
      name: "Skull Smash",
      description:
        "True Damage (:crossed_swords: x 1) front row enemy. Grant self (:crossed_swords: x 0.6) Armor."
    },
    "4B": {
      name: "Rumble In The Jungle",
      description:
        "Attack (:crossed_swords: x 1.2) selected enemy, then attack all enemy characters (:crossed_swords: x 1.2). Grant self (:crossed_swords: x 0.6) Armor."
    },
  }),
};
