import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Charle from './model/Charle';

export default {
  'charle r': new Charle({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/GYunRwM.png',
    title: 'Wisdom Heathen',
    passive: {
      name: 'Celeb And Flow',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Myth Buster Move',
      description: '2 blocks become black. (CD: 7)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) random enemy',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
    },
    '4B': {
      name: 'Spellcheck Mate',
      description: 'Attack (:crossed_swords: x 1.5) all enemies',
    },
  }),
  'charle sr': new Charle({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/Ipmz1SK.png',
    title: 'Passionate Scholar',
    passive: {
      name: 'Celeb And Flow',
      description: 'Upon cast 2 block skill simultaneously, trigger 1 block skill 1 time',
    },
    advisor: {
      name: 'Myth Buster Move',
      description: '2 blocks become black. (CD: 6)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 block',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
    },
    '4B': {
      name: 'Spellcheck Mate',
      description: 'Attack (:crossed_swords: x 1.5) all enemies',
    },
  }),
  'charle ssr': new Charle({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/jZ6e8pd.png',
    title: 'Sage The Alumni',
    passive: {
      name: 'Celeb And Flow',
      description: 'upon cast 2 block skill continuously, trigger 1 block skill 2 times',
    },
    advisor: {
      name: 'Myth Buster Move',
      description: '2 blocks become black. (CD: 5)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 block',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
    },
    '4B': {
      name: 'Spellcheck Mate',
      description: 'Attack (:crossed_swords: x 2) all enemies. Clear 3 blocks',
    },
  }),
  'charle skin-unreleased': new Charle({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/PkeR5Zw.png',
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
    status: [],
  }),
};