import { BLACK, EXHAUST, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'leah r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/Od4n8Rt.png',
    block: BLACK,
    name: 'Leah R: Stunt Trouble',
    passive: {
      name: 'Hare Raising',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Funny Bunny',
      description: "Allies Attack effects increase by 20%",
    },
    '1B': {
      name: 'Bad Egg',
      description: 'Attack (:crossed_swords: x 1) random enemy',
    },
    '2B': {
      name: 'The Egg Chick',
      description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
    },
    '4B': {
      name: 'Eggs Over Easy',
      description: 'Attack (:crossed_swords: x 1) random enemy 4 times',
    },
    status: [],
  },
  'leah sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/XBGb3G4.png',
    block: BLACK,
    name: 'Leah SR: Con Adolescent',
    passive: {
      name: 'Hare Raising',
      description: 'Upon turn, grant self 1 stack. Upon 4 stacks, increase skill power by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: "Allies Attack effects increase by 25%",
    },
    '1B': {
      name: 'Bad Egg',
      description: 'Attack (:crossed_swords: x 1) random enemy, grant Taunt',
    },
    '2B': {
      name: 'The Egg Chick',
      description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
    },
    '4B': {
      name: 'Eggs Over Easy',
      description: 'Attack (:crossed_swords: x 1) random enemy 4 times',
    },
    status: [],
  },
  'leah ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/oQaE8qI.png',
    block: BLACK,
    name: 'Leah SSR: Original Prankster',
    passive: {
      name: 'Hare Raising',
      description: 'Upon turn, grant self 1 stack. Upon 3 stacks, increase skill power by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: "Allies Attack effects increase by 30%",
    },
    '1B': {
      name: 'Bad Egg',
      description: 'Attack (:crossed_swords: x 1) random enemy, grant Taunt',
    },
    '2B': {
      name: 'The Egg Chick',
      description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
    },
    '4B': {
      name: 'Eggs Over Easy',
      description: 'Attack (:crossed_swords: x 1) random enemy 4 times with last hit dealing bonus damage (:crossed_swords: x 0.5), grant Exhaust',
    },
    status: [
      EXHAUST,
    ],
  },
  'leah skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/Zc0bSfR.png',
    block: BLACK,
    name: '?????',
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