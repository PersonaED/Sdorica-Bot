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
      description: '2 orbs become black. (CD: 7)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) random enemy',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 orbs',
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
      description: 'Upon cast 2-orb skill simultaneously, trigger 1-orb skill 1 time',
    },
    advisor: {
      name: 'Myth Buster Move',
      description: '2 orbs become black. (CD: 6)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 orb',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 orbs',
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
      description: 'upon cast 2-orb skill continuously, trigger 1-orb skill 2 times',
    },
    advisor: {
      name: 'Myth Buster Move',
      description: '2 orbs become black. (CD: 5)',
    },
    '1B': {
      name: 'Spell Blinder',
      description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 orb',
    },
    '2B': {
      name: 'Spelling Be Done',
      description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 orbs',
    },
    '4B': {
      name: 'Spellcheck Mate',
      description: 'Attack (:crossed_swords: x 2) all enemies. Clear 3 orbs',
    },
  }),
  'charle skin': new Charle({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/PkeR5Zw.png',
    title: 'Authority of Knowledge',
    passive: {
      name: 'Orb Circulation',
      description: 'Every time the command zone is altered, grant self 1 stack of :MAGEPOWER.',
    },
    advisor: {
      name: 'Rune Rebirth',
      description: 'Every time the command zone is altered, Heal (:crossed_swords: x 0.45) selected ally. This effect can only be triggered once per turn.',
    },
    '1B': {
      name: 'Celestial Beam',
      description: 'Attack (:crossed_swords: x 0.9) selected enemy, remove 1 orb.',
    },
    '2B': {
      name: 'Sapphire Luster',
      description: 'Attack (:crossed_swords: x 0.9) all enemies, remove 2 orbs.',
    },
    '4B': {
      name: ' Heavenly Sparks',
      description: 'Attack (:crossed_swords: x 1.5) all enemies and Heal (:crossed_swords: x 1.35) all player characters, remove all stacks of :MAGEPOWER.',
    },
  }),
};
