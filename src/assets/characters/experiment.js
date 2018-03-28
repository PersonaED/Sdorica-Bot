import { GOLD, SHOCKLOCK, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'experiment r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/UVLqhfR.png',
    block: GOLD,
    name: 'Experiment R: Enigma Ignite',
    passive: {
      name: 'Kick Starter',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 blocks become Gold (CD: 7)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have Shock Lock, remove Shock Lock',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 2) front row enemy. If have Shock Lock, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self Shock Lock. If have Shock Lock, cannot cast skill.',
    },
    status: [
      SHOCKLOCK,
    ],
  },
  'experiment sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/Zb4twiP.png',
    block: GOLD,
    name: 'Experiment SR: Evolution Module',
    passive: {
      name: 'Kick Starter',
      description: 'Upon incoming Attack, grant self 1 stack. Upon 5 stacks, grant self Shock Lock. Upon receive Heal, reset stacks',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 blocks become Gold (CD: 6)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have Shock Lock, remove Shock Lock',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Clear 1 block. If have Shock Lock, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self Shock Lock. If have Shock Lock, cannot cast skill.',
    },
    status: [
      SHOCKLOCK,
    ],
  },
  'experiment ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/dv3zV4F.png',
    block: GOLD,
    name: 'Experiment SSR: Genesis Module',
    passive: {
      name: 'Kick Starter',
      description: 'Upon incoming Attack, grant self 1 stack. Upon 7 stacks, grant self Shock Lock. Upon receive Heal, reset stacks',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 blocks become Gold (CD: 5)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have Shock Lock, remove Shock Lock',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 3.5) front row enemy. Grant self Shock Lock. Clear 1 block. If have Shock Lock, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self Shock Lock. If have Shock Lock, cannot cast skill.',
    },
    status: [
      SHOCKLOCK,
    ],
  },
  'experiment skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/nVEmdL3.png',
    block: GOLD,
    name: '?????',
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
