import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Hestia from './model/Hestia';

export default {
  'hestia n': new Hestia({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/3WvBX0Z.png',
    title: 'Splash Sprite',
    passive: {
      name: 'Happy Harmony',
      description: 'Upon Tier R, unlock passive skill',
    },
    advisor: {
      name: 'Magic Melody',
      description: 'Remove all debuffs from selected ally. (CD: 5)',
    },
    '1B': {
      name: 'Etude Chords',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN.',
    },
    '2B': {
      name: 'Serenade Chords',
      description: 'Heal (:crossed_swords: x 1.35) selected ally',
    },
    '4B': {
      name: 'Variation Chords',
      description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
    },
  }),
  'hestia r': new Hestia({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/3WvBX0Z.png',
    title: 'Aqua La Diva',
    passive: {
      name: 'Happy Harmony',
      description: 'Upon cast Heal, if target has debuff(s), grant :REGEN.',
    },
    advisor: {
      name: 'Magic Melody',
      description: 'Remove all debuffs from selected ally. (CD: 5)',
    },
    '1B': {
      name: 'Etude Chords',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN.',
    },
    '2B': {
      name: 'Serenade Chords',
      description: 'Heal (:crossed_swords: x 1.35) selected ally, remove debuffs.',
    },
    '4B': {
      name: 'Variation Chords',
      description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
    },
  }),
  'hestia sr': new Hestia({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/zvR0Hzm.png',
    title: 'Riverbank Maiden',
    passive: {
      name: 'Happy Harmony',
      description: 'Upon cast Heal, if target has debuff(s), grant :REGEN for 2 turns.',
    },
    advisor: {
      name: 'Magic Melody',
      description: 'Remove all debuffs from selected ally. (CD: 4)',
    },
    '1B': {
      name: 'Etude Chords',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN for 2 turns.',
    },
    '2B': {
      name: 'Serenade Chords',
      description: 'Heal (:crossed_swords: x 1.35) selected ally, remove debuffs.',
    },
    '4B': {
      name: 'Variation Chords',
      description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
    },
  }),
  'hestia ssr': new Hestia({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/HNTNTGt.png',
    title: 'Bride Of The Sea',
    passive: {
      name: 'Happy Harmony',
      description: 'Upon cast Heal, if target has debuff(s), grant :REGEN for 3 turns.',
    },
    advisor: {
      name: 'Magic Melody',
      description: 'Remove all debuffs from selected ally. (CD: 3)',
    },
    '1B': {
      name: 'Etude Chords',
      description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :REGEN for 2 turns.',
    },
    '2B': {
      name: 'Serenade Chords',
      description: 'Heal (:crossed_swords: x 1.35) selected ally, remove debuffs.',
    },
    '4B': {
      name: 'Variation Chords',
      description: 'Armor Penetration (:crossed_swords: x 3) selected enemy, heal (:crossed_swords: x 0.9) target ',
     },
  }),
  'hestia skin': new Hestia({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/GFWYlmm.png',
    title: 'Flowers\' Whisper',
    passive: {
      name: 'Spring Solo',
      description: 'Upon player\'s turn, grant self a random buff',
    },
    advisor: {
      name: 'Summer Aria',
      description: 'Grant selected ally a random buff (CD: 1)',
    },
    '1B': {
      name: 'Fall Etude',
      description: 'Grant self a random buff for 2 turns.',
    },
    '2B': {
      name: 'Winter Fantasia',
      description: 'Copy all buffs this character has, grant all allies 1 stack of the copied buffs for 2 turns',
    },
    '4B': {
      name: 'Hestia\'s Four Seasons',
      description: 'Copy all buffs this character has, grant all allies 3 stacks of the copied buffs for 2 turns',
    },
  }),
};
