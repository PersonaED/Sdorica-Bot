import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Jahan from './model/Jahan';

export default {
  'jahan r': new Jahan({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/z8l1ITW.png',
    title: 'Aristocrat Brat',
    passive: {
      name: 'Jump Grope',
      description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1) against selected enemy',
    },
    advisor: {
      name: 'Trick Is Treat',
      description: 'Upon incoming damage skill against ally, if ally have Taunt, 20% chance to trigger target 4 block skill',
    },
    '1B': {
      name: 'Dead Giveaway',
      description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
    },
    '2B': {
      name: 'Dead Wait',
      description: 'Grant self Taunt for 2 turns and :DMGRED. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
    },
    '4B': {
      name: "Knock 'Em Dead",
      description: 'Attack (:crossed_swords: x 3) selected enemy',
    },
  }),
  'jahan sr': new Jahan({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/xAggLI4.png',
    title: 'Charms and Noble',
    passive: {
      name: 'Jump Grope',
      description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy',
    },
    advisor: {
      name: 'Trick Is Treat',
      description: 'Upon incoming damage skill against ally, if ally have Taunt, 25% chance to trigger target 4 block skill',
    },
    '1B': {
      name: 'Dead Giveaway',
      description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
    },
    '2B': {
      name: 'Dead Wait',
      description: 'Grant self Taunt for 2 turns and 2 stacks :DMGRED. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
    },
    '4B': {
      name: "Knock 'Em Dead",
      description: 'Attack (:crossed_swords: x 4) selected enemy, reset target CD',
    },
  }),
  'jahan ssr': new Jahan({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/Qz7idrT.png',
    title: 'Sir Dance a Lot',
    passive: {
      name: 'Jump Grope',
      description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy, grant :POIS',
    },
    advisor: {
      name: 'Trick Is Treat',
      description: 'Upon incoming damage skill against ally, if ally have Taunt, 30% chance to trigger target 4 block skill',
    },
    '1B': {
      name: 'Dead Giveaway',
      description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
    },
    '2B': {
      name: 'Dead Wait',
      description: 'Grant self Taunt for 2 turns and :DMGRED for 2 turns. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
    },
    '4B': {
      name: "Knock 'Em Dead",
      description: 'Attack (:crossed_swords: x 4) selected enemy, reset target CD',
    },
  }),
  'jahan skin': new Jahan({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/fKrWzaV.png',
    title: 'Shiny Derpy Pinky',
    passive: {
      name: 'Borrowed Steel',
      description: 'Upon incoming damage skill, if have Taunt, trigger random ally 1 block skill',
    },
    advisor: {
      name: 'Tactical Taunting',
      description: 'Reset selected enemy CD (CD: 3)',
    },
    '1B': {
      name: 'Dead Giveaway',
      description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
    },
    '2B': {
      name: 'Mocking Jab',
      description: 'Grant self Taunt for 2 turns and 2 stacks :DMGRED. If have Taunt, True Damage (:crossed_swords: x 1) all enemies, grant :EXH and :TEAR',
    },
    '4B': {
      name: 'Pièce De Résistance ',
      description: 'True Damage (:crossed_swords: x 4) selected enemy, reset all enemies CD',
    },
  }),
};
