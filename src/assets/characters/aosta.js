import { WHITE, DAMAGEREDUCTION, ENHANCE, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'aosta r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/DUMp67M.png',
    block: WHITE,
    name: 'Aosta R: Cloaker Face',
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
      description: 'Grant selected ally 2 stacks Enhance.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks Enhance and 3 stacks Damage Reduction.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
  'aosta sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/JEUmIfC.png',
    block: WHITE,
    name: 'Aosta SR: Heart Of Marigold',
    passive: {
      name: 'Super Au Natural',
      description: 'Upon cast Heal, if target has Enhance, increase Heal effect by 50%',
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
      description: 'Grant selected ally 2 stacks Enhance and 2 stacks Damage Reduction. Clear 1 White block.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks Enhance and 3 stacks Damage Reduction.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
  'aosta ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/VgB1P4P.png',
    block: WHITE,
    name: 'Aosta SSR: Mind Over Latter',
    passive: {
      name: 'Super Au Natural',
      description: 'Upon cast Heal, if target has Enhance, increase Heal effect by 100%.',
    },
    advisor: {
      name: 'Diss Engaged',
      description: 'Clear 2 selected White blocks. (CD: 5)',
    },
    '1B': {
      name: 'Fresh Flesh',
      description: 'Heal (:crossed_swords: x 1.35) selected ally. Clear 2 White blocks.',
    },
    '2B': {
      name: 'Flesh Hook Up',
      description: 'Grant selected ally 2 stacks Enhance and 2 stacks Damage Reduction. Clear 1 White block.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks Enhance and 3 stacks Damage Reduction.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
};
