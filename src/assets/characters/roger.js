import { GOLD, VULNERABILITY, TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'roger n': {
    tier: TIER_N,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    block: GOLD,
    name: "Roger N: Robbin' Good",
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2) front row enemy. Grant self Vulnerability',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
    status: [
      VULNERABILITY,
    ],
  },
  'roger r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    block: GOLD,
    name: 'Roger R: Raw Outlaw',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self Vulnerability for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
    status: [
      VULNERABILITY,
    ],
  },
  'roger sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/kMTLy3b.png',
    block: GOLD,
    name: 'Roger SR: Plunder Plus',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50% HP, increase skill power of 1/2 block skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Remove self 20% HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self Vulnerability for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
    status: [
      VULNERABILITY,
    ],
  },
  'roger ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/HeG55pv.png',
    block: GOLD,
    name: 'Roger SSR: Armed Berserker',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50/20% HP, increase skill power of 1/2/4 block skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 80% HP, increase skill power of 1 block skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Remove self 20% HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self Vulnerability for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 6) front row enemy. Trigger death of self',
    },
    status: [
      VULNERABILITY,
    ],
  },
  'roger skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/jac4Bu8.png',
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
