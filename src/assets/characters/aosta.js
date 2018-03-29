import { WHITE, DAMAGEREDUCTION, ENHANCE, TIER_R, TIER_SR, TIER_SSR } from '../constants';

const aosta = {
  block: WHITE,
  status: [
    ENHANCE,
    DAMAGEREDUCTION,
  ],
};

const stat = {
  power: 2940,
  health: 8822,
};

export default {
  'aosta r': {
    ...aosta,
    tier: TIER_R,
    sprite: 'https://i.imgur.com/DUMp67M.png',
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
  },
  'aosta sr': {
    ...aosta,
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/JEUmIfC.png',
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
  },
  'aosta ssr': {
    ...aosta,
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/VgB1P4P.png',
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
      get description() {
        return `Heal (:crossed_swords: x ${this.scaling[0]}) selected ally. Clear 2 White blocks.`;
        // return `Heal (:boom: ${Math.round(this.scaling[0] * stat.power)}) selected ally. Clear 2 White blocks.`;
      },
      scaling: [1.35],
    },
    '2B': {
      name: 'Flesh Hook Up',
      description: 'Grant selected ally 2 stacks Enhance and 2 stacks Damage Reduction. Clear 1 White block.',
    },
    '4B': {
      name: 'Win The Flesh',
      description: 'Grant selected ally 3 stacks Enhance and 3 stacks Damage Reduction.',
    },
  },
};
