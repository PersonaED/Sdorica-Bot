import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Experiment from './model/Experiment';

export default {
  'experiment r': new Experiment({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/UVLqhfR.png',
    title: 'Enigma Ignite',
    passive: {
      name: 'Kick Starter',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 orbs become Gold (CD: 7)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 2) front row enemy. If have :SHOCKL, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill.',
    },
  }),
  'experiment sr': new Experiment({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/Zb4twiP.png',
    title: 'Evolution Module',
    passive: {
      name: 'Kick Starter',
      description: 'Upon incoming damage skill, grant self 1 stack. Upon 5 stacks, grant self :SHOCKL. Upon receive Heal, reset stacks',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 orbs become Gold (CD: 6)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Clear 1 orb. If have :SHOCKL, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill.',
    },
  }),
  'experiment ssr': new Experiment({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/dv3zV4F.png',
    title: 'Genesis Module',
    passive: {
      name: 'Kick Starter',
      description: 'Upon incoming damage skill, grant self 1 stack. Upon 7 stacks, grant self :SHOCKL. Upon receive Heal, reset stacks',
    },
    advisor: {
      name: 'Convert Alert',
      description: '2 orbs become Gold (CD: 5)',
    },
    '1B': {
      name: 'Manners Maketh Man',
      description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
    },
    '2B': {
      name: 'Manner Of Whack',
      description: 'Attack (:crossed_swords: x 3.5) front row enemy. Grant self :SHOCKL. Clear 1 orb. If have :SHOCKL, cannot cast skill',
    },
    '4B': {
      name: 'Mind Your Manners',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill',
    },
  }),
  'experiment skin': new Experiment({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/nVEmdL3.png',
    title: 'Overcharge Module',
    passive: {
      name: 'Upgrade Ready',
      description: 'Upon Resurrection, grant self full HP and :ENHANCE for all turns',
    },
    advisor: {
      name: 'Pressurize',
      description: 'Upon Resurrection of gold character, grant full HP and :ENHANCE for all turns',
    },
    '1B': {
      name: 'Transformation',
      description: 'Grant self :ENHANCE for all turns, lose half of current HP. If have :SHOCKL, remove :SHOCKL',
    },
    '2B': {
      name: 'Short Circuit',
      description: 'Attack (:crossed_swords: x 3.5) front row enemy. Grant self :EXH for all turns. If have :SHOCKL, cannot cast skill',
    },
    '4B': {
      name: 'High Voltage Bellow',
      description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill',
    },
  }),
};
