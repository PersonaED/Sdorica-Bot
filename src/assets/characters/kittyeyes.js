import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N } from '../constants';
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
      description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed swords: x 0.2), grant :VUL',
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
      description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed swords: x 0.2), grant :VUL for 2 turns',
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
