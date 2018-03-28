import { BLACK, EXHAUST, ENHANCE, STUN, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'yan-bo r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/ftzyvnQ.png',
    block: BLACK,
    name: 'Yan-Bo R: Hidden Figure',
    passive: {
      name: 'Free Spirit',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 20%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self Enhance. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks Exhaust for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant stun',
    },
    status: [
      ENHANCE,
      EXHAUST,
      STUN,
    ],
  },
  'yan-bo sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/OjjllDt.png',
    block: BLACK,
    name: 'Yan-Bo SR: Zenith In Zen',
    passive: {
      name: 'Free Spirit',
      description: 'Upon receive Heal/Armor, remove Exhaust',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 25%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self Enhance for 2 turns. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks Exhaust for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant stun',
    },
    status: [
      ENHANCE,
      EXHAUST,
      STUN,
    ],
  },
  'yan-bo ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/nqFdlPM.png',
    block: BLACK,
    name: 'Yan-Bo SSR: Celestial Mortal',
    passive: {
      name: 'Free Spirit',
      description: 'Upon receive Heal, Armor or Enhance, remove Exhaust',
    },
    advisor: {
      name: 'Psyche Relic',
      description: "Increase skill power of ally's 4 block skill by 30%",
    },
    '1B': {
      name: 'Live On Air',
      description: 'Grant self Enhance for 3 turns. Switch mode',
    },
    '2B': {
      name: 'Dead Beat Air',
      description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks Exhaust for 3 turns',
    },
    '4B': {
      name: 'Airbrush Gush',
      description: 'Attack (:crossed_swords: x 3) front row enemy, grant stun',
    },
    status: [
      ENHANCE,
      EXHAUST,
      STUN,
    ],
  },
  'yan-bo skin': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/JFtASJS.png',
    block: BLACK,
    name: 'Yan-Bo Skill Book: Enlightened One',
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
    status: [],
  },
};
