import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Izumi from './model/Izumi';

export default {
  'izumi r': new Izumi({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/tSgPe2U.png',
    title: 'Rebirth Reynard',
    passive: {
      name: 'Ukiyo-e',
      description: 'If not taken damage for 4 turns in the "Open" position, Attack (:crossed_swords: x 1.2) back row enemy each turn. Upon taking damage, reset turn counter',
    },
    advisor: {
      name: 'The Fox\'s Charm',
      description: 'If gold character has not taken damage for 4 turns, Izumi will Attack (:crossed_swords: x 0.6) back row enemy each turn. Upon taking damage by gold character, reset turn counter',
    },
    '1B': {
      name: 'Fluttering Petals',
      description: 'If umbrella is in the "Close" Position, enter the "Open" position for 8 turns; upon taking damage, shift back to "Close". \nIf umbrella is in the "Open" position, grant selected ally :TAUNT instead',
    },
    '2B': {
      name: 'Dreams Of Prosperity',
      description: 'If umbrella is in the "Close" position, Heal (:crossed_swords: x 1.62) player character with lowest HP. \nIf umbrella is in the "Open" position, grant CD +1 to all enemies with CD:1 insead',
    },
    '4B': {
      name: 'Hyakka Ryouran',
      description: 'If umbrella is in the "Close" position, enter the "Open" position for 6 turns with passive activated. \nIf umbrella is in the "Open" position, grant 1 self stack of :CLOSEIMMUNITY instead',
    },
  }),
  'izumi sr': new Izumi({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/Tgowwek.png',
    title: 'Foxy Berserker',
    passive: {
      name: 'Ukiyo-e',
      description: 'If not taken damage for 3 turns in the "Open" position, Attack (:crossed_swords: x 1.2) back row enemy each turn. Upon taking damage, reset turn counter',
    },
    advisor: {
      name: 'The Fox\'s Charm',
      description: 'If gold character has not taken damage for 3 turns, Izumi will Attack (:crossed_swords: x 0.6) back row enemy each turn. Upon taking damage by gold character, reset turn counter',
    },
    '1B': {
      name: 'Fluttering Petals',
      description: 'If umbrella is in the "Close" Position, enter the "Open" position for 8 turns; upon taking damage, shift back to "Close". \nIf umbrella is in the "Open" position, grant selected ally :TAUNT instead',
    },
    '2B': {
      name: 'Dreams Of Prosperity',
      description: 'If umbrella is in the "Close" position, Heal (:crossed_swords: x 1.62) player character with lowest HP. \nIf umbrella is in the "Open" position, grant CD +1 to all enemies with CD:1 insead',
    },
    '4B': {
      name: 'Hyakka Ryouran',
      description: 'If umbrella is in the "Close" position, enter the "Open" position for 6 turns with passive activated. \nIf umbrella is in the "Open" position, Heal (:crossed_swords: x 0.9) player character with lowest HP, grant 1 self stack of :CLOSEIMMUNITY instead',
    },
  }),
  'izumi ssr': new Izumi({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/aX2mhnI.png',
    title: 'Kitsuné Of Death',
    passive: {
      name: 'Ukiyo-e',
      description: 'If not taken damage for 2 turns in the "Open" position, Attack (:crossed_swords: x 1.2) back row enemy each turn. Upon taking damage, reset turn counter',
    },
    advisor: {
      name: 'The Fox\'s Charm',
      description: 'If gold character has not taken damage for 2 turns, Izumi will Attack (:crossed_swords: x 0.6) back row enemy each turn. Upon taking damage by gold character, reset turn counter',
    },
    '1B': {
      name: 'Fluttering Petals',
      description: 'If umbrella is in the "Close" Position, enter the "Open" position for 8 turns; upon taking damage, shift back to "Close". \nIf umbrella is in the "Open" position, grant selected ally :TAUNT instead',
    },
    '2B': {
      name: 'Dreams Of Prosperity',
      description: 'If umbrella is in the "Close" position, Heal (:crossed_swords: x 1.62) player character with lowest HP. \nIf umbrella is in the "Open" position, grant CD +1 to all enemies with CD:1 insead',
    },
    '4B': {
      name: 'Magnificent Brilliance',
      description: 'If umbrella is in the "Close" position, enter the "Open" position for 6 turns with passive activated. \nIf umbrella is in the "Open" position, evolve passive Attack (:crossed_swords: x 2) for all turns instead. If already evolved, Heal (:crossed_swords: x 0.9) player character with lowest HP, grant 1 self stack of :CLOSEIMMUNITY instead',
    },
  }),
};
