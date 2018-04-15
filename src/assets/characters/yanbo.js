import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Yanbo from './model/Yanbo';

export default {
  'yan-bo r': new Yanbo({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/ftzyvnQ.png',
    title: 'Hidden Figure',
    passive: {
      name: 'Free Spirit',
      description: 'Upon receive Heal, remove :EXH',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 20%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self :ENHANCE. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
    },
  }),
  'yan-bo sr': new Yanbo({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/OjjllDt.png',
    title: 'Zenith In Zen',
    passive: {
      name: 'Free Spirit',
      description: 'Upon receive Heal/Armor, remove :EXH',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 25%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self :ENHANCE for 2 turns. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
    },
  }),
  'yan-bo ssr': new Yanbo({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/nqFdlPM.png',
    title: 'Celestial Mortal',
    passive: {
      name: 'Free Spirit',
      description: 'Upon receive Heal, Armor or :ENHANCE, remove :EXH',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 30%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self :ENHANCE for 3 turns. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
    },
  }),
  'yan-bo skin': new Yanbo({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/JFtASJS.png',
    title: 'Enlightened One',
    passive: {
      name: 'Unlimited Power',
      description: 'Upon turn, if have 5 stacks High Qi. Attack (:crossed_swords: x 1) all enemies. Upon cast 1/2/4 block skill, reset High Qi stacks',
    },
    advisor: {
      name: 'Spirit Enhancement',
      description: 'Upon Turn if front row ally has 3 stacks of any buff, trigger 2 block skill',
    },
    '1B': {
      name: 'Feel The Force',
      description: 'Grant Self 1 stack High Qi',
    },
    '2B': {
      name: 'Tranquil Mind',
      description: 'Grant Self 2 Stacks High Qi',
    },
    '4B': {
      name: 'Deep Breathing',
      description: 'Grant self 3 stacks High Qi',
    },
  }),
};
