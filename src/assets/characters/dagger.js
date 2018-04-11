import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N } from '../constants';
import Dagger from './model/Dagger';

export default {
'dagger n': new Dagger({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/jqROgEa.png',
    title: 'Slam Punk',
    passive: {
        name: 'Hibernating Hate',
        description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
        name: 'Death Dance',
        description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 7)',
    },
    '1B': {
        name: 'Bear A Grudge',
        description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1.',
    },
    '2B': {
        name: 'Bear Hug',
        description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
    },
    '4B': {
        name: 'Bearly Alive',
        description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies',
    },
  }),
  'dagger r': new Dagger({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/jqROgEa.png',
    title: 'Foolhardy Animal',
    passive: {
      name: 'Hibernating Hate',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Death Dance',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 7)',
    },
    '1B': {
      name: 'Bear A Grudge',
      description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1',
    },
    '2B': {
      name: 'Bear Hug',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
    },
    '4B': {
      name: 'Bearly Alive',
      description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
    },
  }),
  'dagger sr': new Dagger({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/s5wKHfa.png',
    title: 'Diehard Dustbiter',
    passive: {
      name: 'Hibernating Hate',
      description: 'Upon death of gold character, grant self :ENHANCE',
    },
    advisor: {
      name: 'Death Dance',
      description: 'Armor Penetration (:crossed_sword: x 1.5) front row enemy. (CD: 6)',
    },
    '1B': {
      name: 'Bear A Grudge',
      description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1',
    },
    '2B': {
      name: 'Bear Hug',
      description: 'Armor Penetration (:crossed_swords: x 1.5) Grant self :ENHANCE for 2 turns',
    },
    '4B': {
      name: 'Bearly Alive',
      description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
    },
  }),
  'dagger ssr': new Dagger({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/Ymcedbn.png',
    title: 'Grizzly Guerrilla',
    passive: {
      name: 'Hibernating Hate',
      description: 'Upon death of gold character, grant self :ENHANCE for 2 turns',
    },
    advisor: {
      name: 'Death Dance',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 5)',
    },
    '1B': {
      name: 'Bear A Grudge',
      description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1, 100% if self has :ENHANCE.',
    },
    '2B': {
      name: 'Bear Hug',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. Grant self :ENHANCE for 2 turns.',
    },
    '4B': {
      name: 'Bearly Alive',
      description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
    },
  }),
  'dagger skin': new Dagger({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/OliCbqC.png',
    title: 'Camouflaged Vanguard',
    passive: {
      name: 'Tactical Enhance',
      description: 'Upon cast skill by ally, if enemy CD is altered, grant :ENHANCE for 2 turns',
    },
    advisor: {
      name: 'Night Watcher',
      description: 'Upon cast skill by ally, if enemy CD is altered, grant :ENHANCE for 2 turns',
    },
    '1B': {
      name: 'Cloaked Ambush',
      description: 'Armor Penetration (:crossed_swords: x 0.375) front row enemy. If target is at CD:1, grant CD +1',
    },
    '2B': {
      name: 'Fishstone Blaster',
      description: 'Armor Penetration (:crossed_swords: x 1.125) selected enemy. If target is at CD:1, grant CD +1',
    },
    '4B': {
      name: 'Eat My Fish!',
      description: 'Armor Penetration (:crossed_swords: x 1.125) all enemies. If target is at CD:1, grant :STUN',
    },
  }),
};
