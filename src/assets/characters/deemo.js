import { TIER_SSR } from "../constants";
import Deemo from "./model/Deemo";

export default {
  "deemo ssr": new Deemo({
    tier: TIER_SSR,
    sprite: "https://i.imgur.com/h9CTf3Y.png",
    title: "Sounds of Silence",
    passive: {
      name: "Whole Rest",
      description:
        "Upon start of each battle, trigger death of this character. \nWhen downed, upon end of player's turn, grant all allies (:crossed_swords: x 0.24) Armor."
    },
    advisor: {
      name: "Natural Note",
      description:
        "Immediately Resurrect all downed allies. (CD: 30)"
    },
    "1B": {
        name: "Dream Symphony",
      description:
        "A graceful tempo... \nGrant white character :ENHANCE, trigger 1-orb skill. If white character is downed, nothing will happen."
    },
    "2B": {
      name: "Symphony Variation",
      description:
        "A graceful tempo... \nGrant gold character :WARCRY, trigger 2-orb skill. If gold character is downed, nothing will happen."
    },
    "4B": {
      name: "The Way Home",
      description:
        "A graceful tempo... \nResurrect all downed allies. Trigger death of this character. /nIf no character is downed, nothing will happen."
    }
  })
};
