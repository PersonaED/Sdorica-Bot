import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N } from '../constants';
import Dagger from './model/Dagger';

export default {
'dagger n': new Dagger({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/Od4n8Rt.png',
    title: 'Slam Punk',
    passive: {
        name: 'Hibernating Hate',
        description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
        name: 'Death Dance',
        description: 'Armor Penetration () fromt row enemy.',
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
  }),
  'dagger r': new Dagger({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/Od4n8Rt.png',
    title: 'Stunt Trouble',
    passive: {
      name: 'Hare Raising',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies Attack effects increase by 20%',
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
  }),
  'dagger sr': new Dagger({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/XBGb3G4.png',
    title: 'Con Adolescent',
    passive: {
      name: 'Hare Raising',
      description: 'Upon turn, grant self 1 stack. Upon 4 stacks, increase skill power by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies Attack effects increase by 25%',
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
  }),
  'dagger ssr': new Dagger({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/oQaE8qI.png',
    title: 'Original Prankster',
    passive: {
      name: 'Hare Raising',
      description: 'Upon turn, grant self 1 stack. Upon 3 stacks, increase skill power by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies Attack effects increase by 30%',
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
      description: 'Attack (:crossed_swords: x 1) random enemy 4 times with last hit dealing bonus damage (:crossed_swords: x 0.5), grant :EXH',
    },
  }),
  'dagger skin-unreleased': new Dagger({
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
