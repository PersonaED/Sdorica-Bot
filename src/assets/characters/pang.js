import { TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Pang from './model/Pang';

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
};
