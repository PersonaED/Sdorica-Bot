import { BLACK, EXHAUST, ENHANCE, STUN, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'sharice r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/jCOTCqg.png',
    block: BLACK,
    name: 'Sharice R: Dunce Trooper',
    passive: {
      name: 'Now on Stage',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger front row ally's 2 block skill, trigger front row enemy's skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks Enhance. Grant all enemies Enhance',
    },
    '2B': {
      name: 'Don't Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget Tear',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant Tear for 2 turns',
    },
    status: [
      ENHANCE,
      TEAR,
    ],
  },
  'sharice sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/eAJv7OZ.png',
    block: BLACK,
    name: 'Sharice SR: Horseless Cavalry',
    passive: {
      name: 'Now on Stage',
      description: 'Upon start of each better, trigger self 2 block skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger back row ally's 2 block skill, trigger back row enemy's skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks Enhance. Grant all enemies Enhance',
    },
    '2B': {
      name: 'Don't Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget Tear. If have Enhance, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy Tear for 2 turns',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant Tear for 2 turns',
    },
    status: [
      ENHANCE,
      TEAR,
    ],
  },
  'sharice ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/BOAS4Lh.png',
    block: BLACK,
    name: 'Sharice SSR: Size Doesn't Matter',
    passive: {
      name: 'Now on Stage',
      description: 'Upon start of each better, trigger self 1 block skill and 2 block skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger all allies' 1 block skill, trigger all enemies' skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks Enhance. Grant all enemies Enhance',
    },
    '2B': {
      name: 'Don't Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget Tear. If have Enhance, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy Tear for 2 turns',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 2) all enemies. Grant Tear for 2 turns. Then attack (:crossed_swords: x 1) gold position ally',
    },
    status: [
      ENHANCE,
      TEAR,
    ],
  },
};