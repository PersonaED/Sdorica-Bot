import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Puggi from './model/Puggi';

export default {
  'puggi n': new Puggi({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/UinmoxH.png',
    title: 'Faraway Fledgling',
    passive: {
      name: 'False Bravado',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Motormouth',
      description: 'Grant selected ally Taunt. (CD: 3)',
    },
    '1B': {
      name: 'Mockingbird',
      description: 'Grant selected enemy :EXH.',
    },
    '2B': {
      name: "Bird's The Word",
      description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally.',
    },
    '4B': {
      name: 'Bird Brain Storming',
      description: 'Grant selected enemy CD +3',
    },
  }),
  'puggi r': new Puggi({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/UinmoxH.png',
    title: 'Tourist Chap',
    passive: {
      name: 'False Bravado',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Motormouth',
      description: 'Grant selected ally Taunt. (CD: 3)',
    },
    '1B': {
      name: 'Mockingbird',
      description: 'Grant selected enemy 2 stacks :EXH.',
    },
    '2B': {
      name: "Bird's The Word",
      description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally.',
    },
    '4B': {
      name: 'Bird Brain Storming',
      description: 'Grant selected enemy CD +3',
    },
  }),
  'puggi sr': new Puggi({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/y0vZ2io.png',
    title: 'Wander Klutz',
    passive: {
      name: 'False Bravado',
      description: 'Upon death of ally, grant self full HP.',
    },
    advisor: {
      name: 'Motormouth',
      description: 'Grant selected ally Taunt. (CD: 2)',
    },
    '1B': {
      name: 'Mockingbird',
      description: 'Grant selected enemy 2 stacks :EXH.',
    },
    '2B': {
      name: "Bird's The Word",
      description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant :ENHANCE',
    },
    '4B': {
      name: 'Bird Brain Storming',
      description: 'Grant selected enemy CD +3',
    },
  }),
  'puggi ssr': new Puggi({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/7lFt0oG.png',
    title: 'Puggi SSR: Seasoned Traveller',
    passive: {
      name: 'False Bravado',
      description: 'Upon death of ally, grant self full HP and Armor.',
    },
    advisor: {
      name: 'Motormouth',
      description: 'Grant selected ally Taunt. (CD: 1)',
    },
    '1B': {
      name: 'Mockingbird',
      description: 'Grant selected enemy 2 stacks :EXH.',
    },
    '2B': {
      name: "Bird's The Word",
      description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant :ENHANCE',
    },
    '4B': {
      name: 'Bird Brain Storming',
      description: 'Grant all enemies CD +3',
    },
  }),
  'puggi skin': new Puggi({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/ma6ugro.png',
    title: 'Sir Adventurer',
    passive: {
      name: "Don't Fail Me",
      description: 'If front row ally was attacked more than 2 times in one turn, heal (:crossed_swords: x 0.45) ally, grant :REGEN for 3 turns.',
    },
    advisor: {
      name: 'Verbal Compliments',
      description: "Allies' Heal skills grant target :REGEN for 2 turns.",
    },
    '1B': {
      name: 'Mockingbird',
      description: 'Grant selected enemy 2 stacks of :EXH',
    },
    '2B': {
      name: 'Praise The Lord',
      description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :REGEN for 3 turns.',
    },
    '4B': {
      name: 'All Hail Puggi!',
      description: 'Trigger all allies 4-orb skill. Reset all anemies CD',
    },
  }),
};
