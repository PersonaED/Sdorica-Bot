import { WHITE, DAMAGEREDUCTION, ENHANCE, TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'tica n': {
    tier: TIER_N,
    sprite: 'https://i.imgur.com/aBjWhez.png',
    block: WHITE,
    name: 'Tica N: Fortune Rookie',
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
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant Enhance for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %.',
    },
    status: [
      ENHANCE,
    ],
  },
  'tica r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/aBjWhez.png',
    block: WHITE,
    name: 'Tica R: Whizz Kid',
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
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant Enhance for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant Damage Reduction for 3 turns.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
  'tica sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/rntaxhW.png',
    block: WHITE,
    name: 'Tica SR: Dream Snatcher',
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
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant Enhance for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant Damage Reduction for 3 turns.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
  'tica ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/3CpQ0Mi.png',
    block: WHITE,
    name: 'Tica SSR: Miracle Maker',
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
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant Enhance for 2 turns.',
    },
    '2B': {
      name: 'Flash Light',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
    },
    '4B': {
      name: 'Let There Be Light',
      description: 'Heal (:crossed_swords: x 2.25) selected ally, grant Damage Reduction for 3 turns.',
    },
    status: [
      ENHANCE,
      DAMAGEREDUCTION,
    ],
  },
  'tica skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/IYEa3Me.png',
    block: WHITE,
    name: 'Tica Skill Book: ?????',
    passive: {
      name: '?????',
      description: '?????',
    },
    advisor: {
      name: '?????',
      description: "?????",
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
