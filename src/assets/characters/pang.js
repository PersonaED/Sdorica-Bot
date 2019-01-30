import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Pang from './model/Pang';
import PangSP from './model/PangSP';

export default {
  'pang n': new Pang({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/IgajiVH.png',
    title: 'Amateur Hour',
    passive: {
      name: 'Merciless Meridians',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Acupoint Attack',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)',
    },
    '1B': {
      name: 'One Paw Man',
      description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
    },
    '2B': {
      name: 'Pawerful Punch',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy',
    },
    '4B': {
      name: "Paws Won't Pause",
      description: 'Attack (:crossed_swords: x 3) front row enemy',
    },
  }),
  'pang r': new Pang({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/IgajiVH.png',
    title: 'Self Made Fan',
    passive: {
      name: 'Merciless Meridians',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Acupoint Attack',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)',
    },
    '1B': {
      name: 'One Paw Man',
      description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
    },
    '2B': {
      name: 'Pawerful Punch',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack :WINDU',
    },
    '4B': {
      name: "Paws Won't Pause",
      description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
    },
  }),
  'pang sr': new Pang({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/noYW61K.png',
    title: 'Notice Me Sensei',
    passive: {
      name: 'Merciless Meridians',
      description: 'Upon receive :DMGRED, grant self 1 stack :WINDU',
    },
    advisor: {
      name: 'Acupoint Attack',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 6)',
    },
    '1B': {
      name: 'One Paw Man',
      description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
    },
    '2B': {
      name: 'Pawerful Punch',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack :WINDU',
    },
    '4B': {
      name: "Paws Won't Pause",
      description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
    },
  }),
  'pang ssr': new Pang({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/0xe5c0K.png',
    title: 'Shaolin Templar',
    passive: {
      name: 'Merciless Meridians',
      description: 'Upon receive :DMGRED, grant self 1 or 2 stacks :WINDU',
    },
    advisor: {
      name: 'Acupoint Attack',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 5)',
    },
    '1B': {
      name: 'One Paw Man',
      description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
    },
    '2B': {
      name: 'Pawerful Punch',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 or 2 stacks :WINDU',
    },
    '4B': {
      name: "Paws Won't Pause",
      description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
    },
  }),
 'pang skin': new Pang({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/dQgfGAn.png',
    title: 'Radiant Master',
    passive: {
      name: 'Solar Flare Power',
      description: 'Upon cast 4-orb skill by ally, this character\'s next skill cast deals bonus damage (:crossed_swords: x 2)',
    },
    advisor: {
      name: 'Eye-catching Moves',
      description: 'Upon cast 4-orb skill by ally, grant other allies (skill caster excluded) :WARCRY',
    },
    '1B': {
      name: 'Shining Finger',
      description: 'Attack (:crossed_swords: x 0.75) front row enemy. Heal (:crossed_swords: x 0.675) self ',
    },
    '2B': {
      name: 'Sunshine Smash',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self :WARCRY',
    },
    '4B': {
      name: "Golden Tiger Fist",
      description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self :WARCRY for 3 turns',
    },
  }), 
  'pang sp': new PangSP({
    tier: SP,
    sprite: '',
    title: 'Murderous Inner Demon',
    passive: {
      name: 'Blood Scorch',
      description: 'Upon death of target, lose 10% current HP, grant self :GUILT for 2 turns.',
    },
    advisor: {
      name: 'Incinerated Mind',
      description: 'Increase black and gold character\'s skill ratio by 20%.',
    },
    '1B': {
      name: 'Rapid Ripper',
      description: 'True Damage (:crossed_swords: x 1) back row enemy. If trigger death of target, cast this skill again.',
    },
    '2B': {
      name: 'Grounding Slam',
      description: 'True Damage (:crossed_swords: x 2.5) back row enemy. If trigger death of target, trigger self 1-orb skill.',
    },
    '4B': {
      name: 'Hemorrhaging Massacre',
      description: 'True Damage (:crossed_swords: x 4) back row enemy. If trigger death of target, trigger self 2-orb skill.',
    },
  }),
};
