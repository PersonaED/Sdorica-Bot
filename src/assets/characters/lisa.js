import { WHITE, ENHANCE, VIGILANCE, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'lisa r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/vV17MmK.png',
    block: WHITE,
    name: 'Lisa R: Step Spinner',
    passive: {
      name: 'Love End War',
      description: 'If ally has Enhance, increase skill power by 10% for each ally with Enhance.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all allies 3 stacks Enhance for 2 turns (CD: 12)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and Enhance for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all allies, grant Enhance.',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all allies 3 stacks Enhance for 2 turns.',
    },
    status: [
      ENHANCE,
    ],
  },
  'lisa sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/82hbe5h.png',
    block: WHITE,
    name: 'Lisa SR: Frisky Missy',
    passive: {
      name: 'Love End War',
      description: 'If ally has Enhance, increase skill power by 20% for each ally with Enhance.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all allies 3 stacks Enhance for 2 turns (CD: 11)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and Enhance for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all allies, grant Enhance and Vigilance',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all allies 3 stacks Enhance for 2 turns.',
    },
    status: [
      ENHANCE,
      VIGILANCE,
    ],
  },
  'lisa ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/05Ilj8G.png',
    block: WHITE,
    name: 'Lisa SSR: Show Go Girl',
    passive: {
      name: 'Love End War',
      description: 'If ally has Enhance, increase skill power by 30% for each ally with Enhance.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all allies 3 stacks Enhance for 2 turns (CD: 10)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and Enhance for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all allies, grant Enhance and Vigilance for 2 turns',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all allies 3 stacks Enhance for 2 turns.',
    },
    status: [
      ENHANCE,
      VIGILANCE,
    ],
  },
  'lisa skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/0NhJjZG.png',
    block: WHITE,
    name: 'Lisa Skill Book: ?????',
    passive: {
      name: '?????',
      description: '?????',
    },
    advisor: {
      name: '?????',
      description: '?????',
    },
    '1B': {
      name: '?????',
      description: '?????',
    },
    '2B': {
      name: '?????',
      description: '?????',
    },
    '4B': {
      name: '?????',
      description: '?????',
    },
    status: [],
  },
};
