import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Tica from './model/Tica';

export default {
  'tica n': new Tica({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/aBjWhez.png',
    title: 'Fortune Rookie',
    passive: {
      name: 'Rune Roll',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Healing Vibes',
      description: 'Allies\' Heal effects increase by 15%.',
    },
    '1B': {
      name: 'High Light',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %.',
    },
  }),
  'tica r': new Tica({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/aBjWhez.png',
    title: 'Whizz Kid',
    passive: {
      name: 'Rune Roll',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Healing Vibes',
      description: 'Allies\' Heal effects increased by 20%.',
    },
    '1B': {
      name: 'High Light',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns.',
    },
  }),
  'tica sr': new Tica({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/rntaxhW.png',
    title: 'Dream Snatcher',
    passive: {
      name: 'Rune Roll',
      description: 'Upon cast 2 block skill continuously 2 times, trigger 2 block skill 1 time.',
    },
    advisor: {
      name: 'Healing Vibes',
      description: 'Allies\' Heal effects increased by 25%.',
    },
    '1B': {
      name: 'High Light',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns.',
    },
  }),
  'tica ssr': new Tica({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/3CpQ0Mi.png',
    title: 'Miracle Maker',
    passive: {
      name: 'Rune Roll',
      description: 'Upon cast 2 block skill continuously 2 times, trigger 2 block skill 2 times.',
    },
    advisor: {
      name: 'Healing Vibes',
      description: 'Allies\' Heal effects increased by 30%.',
    },
    '1B': {
      name: 'High Light',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) selected ally, grant :DMGRED for 3 turns.',
    },
  }),
  'tica skin-unreleased': new Tica({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/IYEa3Me.png',
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
