import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Sherlock from './model/Sherlock';

export default {
  'sherlock r': new Sherlock({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/W66g5NB.png',
    title: 'Sly Trader',
    passive: {
      name: 'Transformer Horror',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Avant Guard',
      description: 'Grant selected ally (:crossed_swords: x 2.88) Armor. (CD: 7)',
    },
    '1B': {
      name: 'Go Command Pro',
      description: 'If offense mode, switch to support mode, clear all black orbs. If support mode, switch to offense mode, clear all gold orbs',
    },
    '2B': {
      name: 'Command No. 42',
      description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor.',
    },
    '4B': {
      name: 'Command No. 66',
      description: 'If offense mode, Attack (:crossed_swords: x 3.5) selected enemy. If support mode, Heal (:crossed_swords: x 3.15) selected ally.',
    },
  }),
  'sherlock sr': new Sherlock({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/5pHvDDq.png',
    title: 'Mean Moneybags',
    passive: {
      name: 'Transformer Horror',
      description: 'Upon cast skill by ally, if the command zone is altered, grant :ENHANCE for 2 turns.',
    },
    advisor: {
      name: 'Avant Guard',
      description: 'Grant selected ally (:crossed_swords: x 2.88) Armor. (CD: 6)',
    },
    '1B': {
      name: 'Go Command Pro',
      description: 'If offense mode, switch to support mode, clear all black orbs. If support mode, switch to offense mode, clear all gold orbs',
    },
    '2B': {
      name: 'Command No. 42',
      description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy, grant :VUL for 2 turns. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor.',
    },
    '4B': {
      name: 'Command No. 66',
      description: 'If offense mode, Attack (:crossed_swords: x 3.5) selected enemy. If support mode, Heal (:crossed_swords: x 3.15) selected ally.',
    },
  }),
  'sherlock ssr': new Sherlock({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/1eDUb5s.png',
    title: 'Profit Prophet',
    passive: {
      name: 'Transformer Horror',
      description: 'Upon cast skill by ally, if the command zone is altered, grant :ENHANCE for 3 turns.',
    },
    advisor: {
      name: 'Avant Guard',
      description: 'Grant selected ally (:crossed_swords: x 2.88) Armor. (CD: 5)',
    },
    '1B': {
      name: 'Go Command Pro',
      description: 'If offense mode, switch to support mode, clear all black orbs. If support mode, switch to offense mode, clear all gold orbs.',
    },
    '2B': {
      name: 'Command No. 42',
      description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy, grant :VUL for 2 turns. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor and :TANKU for 2 turns.',
    },
    '4B': {
      name: 'Command No. 66',
      description: 'If offense mode, Attack (:crossed_swords: x 3.5) selected enemy. If support mode, Heal (:crossed_swords: x 3.15) selected ally.',
    },
  }),
  'sherlock skin': new Sherlock({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/2xWJiNh.png',
    title: 'Greed Is Good',
    passive: {
      name: 'Iron Will',
      description: 'Upon start of each battle, grant all player characters :LASTING.',
    },
    advisor: {
      name: 'Performance Update',
      description: 'Increase white character\'s skill ratio by 30%.',
    },
    '1B': {
      name: 'Better Think Fast',
      description: 'Switch modes, remove all debuffs from self.',
    },
    '2B': {
      name: 'Command No. 17',
      description: 'If offense mode, Armor Penetration (:crossed_swords: x 2.25) selected enemy, grant self :EXH for all turns. If support mode, grant selected ally (:crossed_swords: x 3.6) Armor, grant self :EXH for all turns.',
    },
    '4B': {
      name: 'Command No. 99',
      description: 'If offense mode, Armor Penetration (:crossed_swords: x 3.75) selected enemy, grant self :EXH for all turns. If support mode, Heal (:crossed_swords: x 4.5) selected ally, grant self :EXH for all turns.',
    },
  }),
};
