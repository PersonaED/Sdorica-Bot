import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Karnulla from './model/Karnulla';

export default {
  'karnulla n': new Karnulla({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/7SO2zs8.png',
    title: 'Mouth of Madness',
    passive: {
      name: 'Underwater Craft',
      description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.38) against selected enemy',
    },
    advisor: {
      name: 'Submerge Urge',
      description: "Allies' Armor Penetration effects increase by 15%",
    },
    '1B': {
      name: 'Doom Bloom',
      description: 'Grant self 2 stacks :VIGIL. Reset front row enemy CD',
    },
    '2B': {
      name: 'Annihilate Bloomer',
      description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy',
    },
    '4B': {
      name: 'In Full Bloom',
      description: 'Grant self 3 stacks :VIGIL. Reset all enemies CD',
    },
  }),
  'karnulla r': new Karnulla({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/7SO2zs8.png',
    title: 'Crocodile Dummy',
    passive: {
      name: 'Underwater Craft',
      description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy',
    },
    advisor: {
      name: 'Submerge Urge',
      description: "Allies' Armor Penetration effects increase by 20%",
    },
    '1B': {
      name: 'Doom Bloom',
      description: 'Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD',
    },
    '2B': {
      name: 'Annihilate Bloomer',
      description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy',
    },
    '4B': {
      name: 'In Full Bloom',
      description: 'Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD',
    },
  }),
  'karnulla sr': new Karnulla({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/V78vDwv.png',
    title: 'Greater Alligator',
    passive: {
      name: 'Underwater Craft',
      description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy, grant :EXH',
    },
    advisor: {
      name: 'Submerge Urge',
      description: "Allies' Armor Penetration effects increase by 25%",
    },
    '1B': {
      name: 'Doom Bloom',
      description: 'Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD',
    },
    '2B': {
      name: 'Annihilate Bloomer',
      description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self :ENHANCE for 3 turns',
    },
    '4B': {
      name: 'In Full Bloom',
      description: 'Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD',
    },
  }),
  'karnulla ssr': new Karnulla({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/WzSB5FA.png',
    title: 'Apex Predator',
    passive: {
      name: 'Underwater Craft',
      description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.5625) against selected enemy, grant :EXH. If have :ENHANCE, retaliate against all enemies instead',
    },
    advisor: {
      name: 'Submerge Urge',
      description: "Allies' Armor Penetration effects increase by 30%",
    },
    '1B': {
      name: 'Doom Bloom',
      description: 'Grant self :TAUNT and 2 stacks :VIGIL. Reset front row enemy CD',
    },
    '2B': {
      name: 'Annihilate Bloomer',
      description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
    },
    '4B': {
      name: 'In Full Bloom',
      description: 'Grant self :TAUNT and 3 stacks :VIGIL. Reset all enemies CD',
    },
  }),
  'karnulla skin-unreleased': new Karnulla({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/93ioJnW.png',
    title: '?????',
    passive: {
      name: '?????',
      description: '?????',
    },
    advisor: {
      name: '?????',
      description: '?????',
    },
    '1B': {
      name: '?????',
      description: '?????',
    },
    '2B': {
      name: '?????',
      description: '?????',
    },
    '4B': {
      name: '?????',
      description: '?????',
    },
  }),
};
