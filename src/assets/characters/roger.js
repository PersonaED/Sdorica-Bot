import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Roger from './model/Roger';

export default {
  'roger n': new Roger({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    title: "Robbin' Good",
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2) front row enemy. Grant self :VUL',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger r': new Roger({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    title: 'Raw Outlaw',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger sr': new Roger({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/kMTLy3b.png',
    title: 'Plunder Plus',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50% HP, increase skill power of 1/2-orb skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Deal self damage equal to 20% HP of current HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger ssr': new Roger({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/HeG55pv.png',
    title: 'Armed Berserker',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50/20% HP, increase skill power of 1/2/4-orb skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 80% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Deal self damage equal to 20% of current HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 6) front row enemy. Trigger death of self',
    },
  }),
  'roger skin-unreleased': new Roger({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/jac4Bu8.png',
    title: '?????',
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
  }),
};
