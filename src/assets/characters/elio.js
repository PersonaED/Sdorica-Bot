import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Crushfang from './model/Elio';

export default {
  'elio r': new Elio({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/MhLEY7g.png',
    title: 'Ideal Student',
    passive: {
      name: 'Magnetization Effect',
      description: 'Allied Heal effects on Elio have their skill power decreased by 60%.',
    },
    advisor: {
      name: 'Breakthrough Atmosphere',
      description: 'Upon cast damage skill by ally, if target has Armor, increase skill power by 25%.',
    },
    '1B': {
      name: 'Meteor Shower',
      description: 'Grant all enemies :VUL and :EXH.',
    },
    '2B': {
      name: 'Cosmic Impact',
      description: 'True Damage (:crossed_swords: x 1.5) back row enemy. IF target has Armor before this skill cast, grant self (:crossed_swords: x 1.2) Armor as well.',
    },
    '4B': {
      name: 'Infinite Solar Flare',
      description: 'Attack (:crossed_swords: x 1.2) all enemies, then Attack (:crossed_swords: x 1.2) random enemy 3 times. 2 orbs become gold.',
    },
  }),
  'elio sr': new Elio({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/JendFyT.png',
    title: 'Outstanding Alumni',
    passive: {
      name: 'Magnetization Effect',
      description: 'Allied Heal effects on Elio have their skill power decreased by 45%.',
    },
    advisor: {
      name: 'Breakthrough Atmosphere',
      description: 'Upon cast damage skill by ally, if target has Armor, increase skill power by 30%.',
    },
    '1B': {
      name: 'Meteor Shower',
      description: 'Grant all enemies :VUL and :EXH. 1 orb becomes gold.',
    },
    '2B': {
      name: 'Cosmic Impact',
      description: 'True Damage (:crossed_swords: x 1.5) back row enemy. IF target has Armor before this skill cast, grant self (:crossed_swords: x 1.2) Armor as well.',
    },
    '4B': {
      name: 'Infinite Solar Flare',
      description: 'Attack (:crossed_swords: x 1.2) all enemies, then Attack (:crossed_swords: x 1.2) random enemy 3 times. 2 orbs become gold.',
    },
  }),
  'elio ssr': new Elio({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/QyDkfs9.png',
    title: 'Exemplary Model',
    passive: {
      name: 'Magnetization Effect',
      description: 'Allied Heal effects on Elio have their skill power decreased by 30%.',
    },
    advisor: {
      name: 'Breakthrough Atmosphere',
      description: 'Upon cast damage skill by ally, if target has Armor, increase skill power by 35%.',
    },
    '1B': {
      name: 'Meteor Shower',
      description: 'Grant all enemies :VUL and :EXH. 1 orb becomes gold.',
    },
    '2B': {
      name: 'Cosmic Impact',
      description: 'True Damage (:crossed_swords: x 1.5) back row enemy. If target has Armor before this skill cast, grant self (:crossed_swords: x 1.2) Armor and :ARMORSHIFT as well.',
    },
    '4B': {
      name: 'Infinite Solar Flare',
      description: 'Attack (:crossed_swords: x 1.2) all enemies, then Attack (:crossed_swords: x 1.2) random enemy 3 times. 2 orbs become gold.',
    },
  }),
};
