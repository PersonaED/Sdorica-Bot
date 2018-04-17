import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Nolva from './model/Nolva';

export default {
  'nolva r': new Nolva({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/2xQXkln.png',
    title: 'Coin Operated Toy',
    passive: {
      name: 'For Gig Goals',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Incur Mission',
      description: 'Clear 4 selected black blocks. (CD: 7)',
    },
    '1B': {
      name: 'Sob Scene',
      description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
    },
    '2B': {
      name: 'Love Scene Awry',
      description: 'True Damage (:crossed_swords: x 1) front row enemy',
    },
    '4B': {
      name: 'Remake A Scene',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'nolva sr': new Nolva({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/zxTlBNu.png',
    title: 'Doll Housekeeper',
    passive: {
      name: 'For Gig Goals',
      description: 'If any character has :VUL, increase self skill power by 15% for each character present',
    },
    advisor: {
      name: 'Incur Mission',
      description: 'Clear 4 selected black blocks. (CD: 6)',
    },
    '1B': {
      name: 'Sob Scene',
      description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
    },
    '2B': {
      name: 'Love Scene Awry',
      description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
    },
    '4B': {
      name: 'Remake A Scene',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'nolva ssr': new Nolva({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/uKd93vg.png',
    title: 'Muppet Artiste',
    passive: {
      name: 'For Gig Goals',
      description: 'If any character has :VUL, increase self skill power by 20% for each character present',
    },
    advisor: {
      name: 'Incur Mission',
      description: 'Clear 4 selected black blocks. (CD: 5)',
    },
    '1B': {
      name: 'Sob Scene',
      description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
    },
    '2B': {
      name: 'Love Scene Awry',
      description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
    },
    '4B': {
      name: 'Remake A Scene',
      description: 'True Damage (:crossed_swords: x 2) all enemies. Grant ally and all enemies 3 stacks :VUL',
    },
  }),
  'nolva skin-unreleased': new Nolva({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/Zc0bSfR.png',
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