import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Sharice from './model/Sharice';

export default {
  'sharice r': new Sharice({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/jCOTCqg.png',
    title: 'Dunce Trooper',
    passive: {
      name: 'Now on Stage',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger front row ally's 2-orb skill, trigger front row enemy's skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
    },
    '2B': {
      name: 'Don\'t Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant target :TEAR',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant :TEAR for 2 turns',
    },
  }),
  'sharice sr': new Sharice({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/eAJv7OZ.png',
    title: 'Horseless Cavalry',
    passive: {
      name: 'Now on Stage',
      description: 'Upon start of each battle, trigger self 2-orb skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger back row ally's 2-orb skill, trigger back row enemy's skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
    },
    '2B': {
      name: 'Don\'t Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant target :TEAR. If have :ENHANCE, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy :TEAR for 2 turns',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant :TEAR for 2 turns',
    },
  }),
  'sharice ssr': new Sharice({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/BOAS4Lh.png',
    title: 'Size Doesn\'t Matter',
    passive: {
      name: 'Now on Stage',
      description: 'Upon start of each battle, trigger self 1-orb skill and 2-orb skill',
    },
    advisor: {
      name: 'I Was Just Passing By',
      description: "Upon start of each battle, trigger all allies' 1-orb skill, trigger all enemies' skill",
    },
    '1B': {
      name: 'Suck on This',
      description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
    },
    '2B': {
      name: 'Don\'t Call Me Short',
      description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant target :TEAR. If have :ENHANCE, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy :TEAR for 2 turns',
    },
    '4B': {
      name: 'G.O.A.T',
      description: 'Attack (:crossed_swords: x 2) all enemies. Grant :TEAR for 2 turns. Then attack (:crossed_swords: x 1) gold position ally',
    },
  }),
};
