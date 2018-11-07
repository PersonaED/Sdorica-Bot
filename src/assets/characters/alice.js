import { TIER_R, TIER_SR, TIER_SSR } from "../constants";
import Alice from "./model/Alice";

export default {
  "alice r": new Alice({
    tier: TIER_R,
    sprite: "http://i.imgur.com/MPSK5e8.png",
    title: "Easy",
    passive: {
      name: "Language: Eternal",
      description:
        "Upon Tier SR, unlock passive skill."
    },
    advisor: {
      name: "Magnolia",
      description:
        "Upon the end of player's turn, reduce Resurrection orbs of all downed allies by 1."
    },
    "1B": {
        name: "Guardian's Heart",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant self (:crossed_swords: x 0.576) and selected ally (:crossed_swords: x 0.576) Armor."
    },
    "2B": {
      name: "Flourishing Blossom",
      description:
        "Not feeling so well recently... but I can still make it. \nHeal (:crossed_swords: x 1.62) selected ally."
    },
    "4B": {
      name: "Ancient Tree Whispers",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant all allies :WARCRY for 2 turns and :DMGRED for 2 turns."
    }
  }),
  "alice sr": new Alice({
    tier: TIER_SR,
    sprite: "https://i.imgur.com/yYyoNyW.png",
    title: "Normal",
    passive: {
      name: "Language: Eternal",
      description:
        "Upon the end of player's turn, reduce Resurrection orbs of all downed allies by 1."
    },
    advisor: {
      name: "Myosotis",
      description:
        "Upon the end of player's turn, reduce Resurrection orbs of all downed allies by 1."
    },
    "1B": {
        name: "Guardian's Heart",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant self (:crossed_swords: x 0.576) and selected ally (:crossed_swords: x 0.576) Armor, grant both :DMGRED."
    },
    "2B": {
      name: "Flourishing Blossom",
      description:
        "Not feeling so well recently... but I can still make it. \nHeal (:crossed_swords: x 1.62) selected ally, grant :REGEN."
    },
    "4B": {
      name: "Ancient Tree Whispers",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant all allies :WARCRY for 2 turns and :DMGRED for 2 turns."
    }
  }),
  "alice ssr": new Alice({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/N8XT2Yv.png",
    title: "Hard",
    passive: {
      name: "Language: Parting",
      description:
        "Upon the end of player's turn, reduce Resurrection orbs of all downed allies by 2."
    },
    advisor: {
      name: "Marigold",
      description:
        "Upon the end of player's turn, reduce Resurrection orbs of all downed allies by 2."
    },
    "1B": {
        name: "Guardian's Heart",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant self (:crossed_swords: x 0.576) and selected ally (:crossed_swords: x 0.576) Armor, grant both :DMGRED."
    },
    "2B": {
      name: "Flourishing Blossom",
      description:
        "Not feeling so well recently... but I can still make it. \nHeal (:crossed_swords: x 1.62) selected ally, grant :REGEN for 2 turns."
    },
    "4B": {
      name: "Peaceful Moment",
      description:
        "Not feeling so well recently... but I can still make it. \nGrant all allies :WARCRY for 3 turns and :DMGRED for 3 turns."
    }
  })
};
