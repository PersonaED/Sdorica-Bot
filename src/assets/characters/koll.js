import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Koll from './model/Koll';

export default {
  'koll n': new Koll({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/j2j9nyX.png',
    title: 'Flame Boy Chant',
    passive: {
      name: 'Wolfgang Deus',
      description: 'Upon Tier R, unlock passive skill',
    },
    advisor: {
      name: 'Aware Wolf',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)',
    },
    '1B': {
      name: 'Ready Maim Fire',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy.',
    },
    '2B': {
      name: 'Champ Fire',
      description: 'Heal (:crossed_swords: x 1.35) selected ally.',
    },
    '4B': {
      name: 'Misfire Fighter',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
    },
  }),
  'koll r': new Koll({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/j2j9nyX.png',
    title: 'Fear The Sear',
    passive: {
      name: 'Wolfgang Deus',
      description: 'Upon death of front row ally, grant self :VUL, trigger self 4-orb skill.',
    },
    advisor: {
      name: 'Aware Wolf',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)',
    },
    '1B': {
      name: 'Ready Maim Fire',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant :VUL',
    },
    '2B': {
      name: 'Champ Fire',
      description: 'Heal (:crossed_swords: x 1.35) selected ally.',
    },
    '4B': {
      name: 'Misfire Fighter',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
    },
  }),
  'koll sr': new Koll({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/ZHcIUfy.png',
    title: 'Unchained Smoker',
    passive: {
      name: 'Wolfgang Deus',
      description: 'Upon death of front row ally, trigger self 4-orb skill.',
    },
    advisor: {
      name: 'Aware Wolf',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 11)',
    },
    '1B': {
      name: 'Ready Maim Fire',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks :VUL.',
    },
    '2B': {
      name: 'Champ Fire',
      description: 'Heal (:crossed_swords: x 1.35) selected ally.',
    },
    '4B': {
      name: 'Misfire Fighter',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
    },
  }),
  'koll ssr': new Koll({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/fbjIc87.png',
    title: 'Entrails Blazer',
    passive: {
      name: 'Wolfgang Deus',
      description: 'Upon death of ally, trigger self 4-orb skill.',
    },
    advisor: {
      name: 'Aware Wolf',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 10)',
    },
    '1B': {
      name: 'Ready Maim Fire',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks :VUL.',
    },
    '2B': {
      name: 'Champ Fire',
      description: 'Heal (:crossed_swords: x 1.35) selected ally, grant :DMGRED for 3 turns.',
    },
    '4B': {
      name: 'Misfire Fighter',
      description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
    },
  }),
  'koll skin-unreleased': new Koll({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/2JX1l4z.png',
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
