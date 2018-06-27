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
      description: 'Clear 4 selected black orbs. (CD: 7)',
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
      description: 'Clear 4 selected black orbs. (CD: 6)',
    },
    '1B': {
      name: 'Sob Scene',
      description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
    },
    '2B': {
      name: 'Love Scene Awry',
      description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black orb',
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
      description: 'Clear 4 selected black orbs. (CD: 5)',
    },
    '1B': {
      name: 'Sob Scene',
      description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
    },
    '2B': {
      name: 'Love Scene Awry',
      description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black orb',
    },
    '4B': {
      name: 'Remake A Scene',
      description: 'True Damage (:crossed_swords: x 2) all enemies. Grant ally and all enemies 3 stacks :VUL',
    },
  }),
  'nolva skin': new Nolva({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/Zc0bSfR.png',
    title: 'Somnus Puppeteer',
    passive: {
      name: 'Puppet Trick: Forever',
      description: 'For each downed ally, increase self skill power by 30%',
    },
    advisor: {
      name: 'Puppet Trick: Little Secrets',
      description: 'For each downed ally, increase remaining allies\' skill power by 30%',
    },
    '1B': {
      name: 'Puppet Trick: Hopscotch Time',
      description: 'True Damage (:crossed_swords: x 1) all enemies and (:crossed_swords: x 0.5) all allies',
    },
    '2B': {
      name: 'Puppet Trick: Naughty Child',
      description: 'Remove 30% of max HP from all player characters, grant all player characters 2 stacks :DMGRED and :ENHANCE for 2 turns',
    },
    '4B': {
      name: 'Puppet Trick: New Toys',
      description: 'True Damage (:crossed_swords: x 2.5) all enemies, trigger death of allies',
    },
    status: [],
  }),
};
