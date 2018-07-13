import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N, SP } from '../constants';
import Kittyeyes from './model/Kittyeyes';

export default {
  'kittyeyes n': new Kittyeyes({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/ex4n4Gu.png',
    title: 'Cat Burglar',
    passive: {
      name: 'Cheshire Hire',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Curiosity Killer',
      description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 7)',
    },
    '1B': {
      name: 'Start From Scratch',
      description: 'True Damage (:crossed_swords: x 0.5) random enemy',
    },
    '2B': {
      name: 'Scratch That',
      description: 'True Damage (:crossed_swords: x 1) selected enemy',
    },
    '4B': {
      name: 'Cat Scratch Fever',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'kittyeyes r': new Kittyeyes({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/ex4n4Gu.png',
    title: 'Darling Thief',
    passive: {
      name: 'Cheshire Hire',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Curiosity Killer',
      description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 7)',
    },
    '1B': {
      name: 'Start From Scratch',
      description: 'True Damage (:crossed_swords: x 0.5) random enemy',
    },
    '2B': {
      name: 'Scratch That',
      description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
    },
    '4B': {
      name: 'Cat Scratch Fever',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'kittyeyes sr': new Kittyeyes({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/jfeTw2X.png',
    title: 'Meadow Mercenary',
    passive: {
      name: 'Cheshire Hire',
      description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed_swords: x 0.2), grant :VUL',
    },
    advisor: {
      name: 'Curiosity Killer',
      description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 6)',
    },
    '1B': {
      name: 'Start From Scratch',
      description: 'True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag',
    },
    '2B': {
      name: 'Scratch That',
      description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
    },
    '4B': {
      name: 'Cat Scratch Fever',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'kittyeyes ssr': new Kittyeyes({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/hBhGtEH.png',
    title: 'Pasture Prima Donna',
    passive: {
      name: 'Cheshire Hire',
      description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed_swords: x 0.2), grant :VUL for 2 turns',
    },
    advisor: {
      name: 'Curiosity Killer',
      description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 5)',
    },
    '1B': {
      name: 'Start From Scratch',
      description: 'True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag',
    },
    '2B': {
      name: 'Scratch That',
      description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
    },
    '4B': {
      name: 'Cat Scratch Fever',
      description: 'True Damage (:crossed_swords: x 1) all enemies, grant Game Tag',
    },
  }),
    'kittyeyes sp': new Kittyeyes({
    tier: SP,
    sprite: 'https://imgur.com/2fLHa7N',
    title: 'Sweet Snack',
    passive: {
      name: 'A Maid\'s Duty',
      description: 'Upon turn, Attack (:crossed_swords: x 0.5)(:crossed_swords: x 0.4) (:crossed_swords: x 0.3) targets with Game Tag multiple times based on number of stacks, remove Game Tag',
    },
    advisor: {
      name: 'Have Some Tea',
      description: 'Grant all enemies 2 stacks of :VUL for 2 turns (CD: 7)',
    },
    '1B': {
      name: 'Clumsy Cake Mishap',
      description: 'Heal (:crossed_swords: x 1.62) selected ally, grant 2 stacks of :TEAR, remove 1 white orb',
    },
    '2B': {
      name: 'I Will Protect Master',
      description: 'Grant self :SUPPORT for 3 turns. If have Support, extend Support to 3 turns, grant self 2 stacks :ENHANCE',
    },
    '4B': {
      name: 'Blushing Maid',
      description: 'Heal (:crossed_swords: x 2.16) selected ally, grant :VIGOR',
    },
  }),
  'kittyeyes skin-unreleased': new Kittyeyes({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/q9GUXN2.png',
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
