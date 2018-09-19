import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from '../constants';
import Leah from './model/Leah';
import LeahSP from './model/LeahSP';

export default {
  'leah r': new Leah({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/Od4n8Rt.png',
    title: 'Stunt Trouble',
    passive: {
      name: 'Hare Raising',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies\' Attack effects increase by 20%',
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
  'leah sr': new Leah({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/XBGb3G4.png',
    title: 'Con Adolescent',
    passive: {
      name: 'Hare Raising',
      description: 'Upon the end of player\'s turn, grant self 1 stack. Upon 4 stacks, increase skill ratio by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies\' Attack effects increase by 25%',
    },
    '1B': {
      name: 'Bad Egg',
      description: 'Attack (:crossed_swords: x 1) random enemy, grant :TAUNT',
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
  'leah ssr': new Leah({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/oQaE8qI.png',
    title: 'Original Prankster',
    passive: {
      name: 'Hare Raising',
      description: 'Upon the end of player\'s turn, grant self 1 stack. Upon 3 stacks, increase skill ratio by 50% for next skill, reset stacks',
    },
    advisor: {
      name: 'Funny Bunny',
      description: 'Allies\' Attack effects increase by 30%',
    },
    '1B': {
      name: 'Bad Egg',
      description: 'Attack (:crossed_swords: x 1) random enemy, grant :TAUNT',
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
  'leah skin-unreleased': new Leah({
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
  'leah sp': new LeahSP({
    tier: SP,
    sprite: 'https://i.imgur.com/8AozfZh.png',
    title: 'Definitely A Bear',
    passive: {
      name: 'Cute Is Justice',
      description: 'Upon player\'s turn, cast skill that has 40% chance to Heal ally with the lowest %HP. Heal amount is equal to 30% of target\'s max HP.',
    },
    advisor: {
      name: 'Fluffy Goodness',
      description: 'Heal ally with the lowest %HP. Heal amount is equal to 30% of target\'s max HP. (CD: 3)',
    },
    '1B': {
      name: 'Adorable Little Rebel',
      description: 'Attack (:crossed_swords: x 0.1) gold character and (:crossed_swords: x 1.3) front row enemy.',
    },
    '2B': {
      name: 'Hop Step Jump',
      description: 'Attack (:crossed_swords: x 0.2) gold and black characters, then Attack (:crossed_swords: x 2.6) front row enemy.',
    },
    '4B': {
      name: 'Fly To The Moon!',
      description: 'Attack (:crossed_swords: x 0.4) gold and black characters, then Attack (:crossed_swords: x 2.6) front and back row enemies.',
    },
  }),
};
