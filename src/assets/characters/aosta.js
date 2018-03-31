import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Aosta from './model/Aosta';

export default {
  'aosta r': new Aosta({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/DUMp67M.png',
    title: 'Cloaker Face',
    passive: {
      name: 'Super Au Natural',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Diss Engaged',
      description: 'Clear 2 selected White blocks. (CD: 7)',
    },
    '1B': {
      name: 'Fresh Flesh',
      description: 'Heal (:crossed_swords: x 1.08) selected ally. Clear 1 White block.',
    },
    '2B': {
      name: 'Flesh Hook Up',
      description: 'Grant selected ally 2 stacks :ENHANCE.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
    },
  }),
  'aosta sr': new Aosta({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/JEUmIfC.png',
    title: 'Heart Of Marigold',
    passive: {
      name: 'Super Au Natural',
      description: 'Upon cast Heal, if target has :ENHANCE, increase Heal effect by 50%',
    },
    advisor: {
      name: 'Diss Engaged',
      description: 'Clear 2 selected White blocks. (CD: 6)',
    },
    '1B': {
      name: 'Fresh Flesh',
      description: 'Heal (:crossed_swords: x 1.08) selected ally. Clear 1 White block.',
    },
    '2B': {
      name: 'Flesh Hook Up',
      description: 'Grant selected ally 2 stacks :ENHANCE and 2 stacks :DMGRED. Clear 1 White block.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
    },
  }),
  'aosta ssr': new Aosta({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/VgB1P4P.png',
    title: 'Mind Over Latter',
    passive: {
      name: 'Super Au Natural',
      description: 'Upon cast Heal, if target has :ENHANCE, increase Heal effect by 100%.',
    },
    advisor: {
      name: 'Diss Engaged',
      description: 'Clear 2 selected White blocks. (CD: 5)',
    },
    '1B': {
      name: 'Fresh Flesh',
      get description() {
        return `Heal (:crossed_swords: x ${this.scaling[0]}) selected ally. Clear 2 White blocks.`;
      },
      scaling: [1.35],
    },
    '2B': {
      name: 'Flesh Hook Up',
      description: 'Grant selected ally 2 stacks :ENHANCE and 2 stacks :DMGRED. Clear 1 White block.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
    },
  }),
};
