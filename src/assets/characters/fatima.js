import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N } from '../constants';
import Fatima from './model/Fatima';

export default {
  'fatima n': new Fatima({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/GmDcclY.png',
    title: 'Run Tamed',
    passive: {
      name: 'Cheer Leader',
      description: 'Upon Tier R, unlock passive skill',
    },
    advisor: {
      name: 'Leap Of Faith',
      description: 'Upon death of target by ally, grant :ENHANCE',
    },
    '1B': {
      name: 'Behead Hunt',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy',
    },
    '2B': {
      name: 'Happy Huntress',
      description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy',
    },
    '4B': {
      name: 'Good Kill Hunting',
      description: 'Attack (:crossed_swords: x 3.6) with lowest HP',
    },
  }),
  'fatima r': new Fatima({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/GmDcclY.png',
    title: 'Wild Earnest',
    passive: {
      name: 'Cheer Leader',
      description: 'Upon death of target, grant self :ENHANCE',
    },
    advisor: {
      name: 'Leap Of Faith',
      description: 'Upon death of target by ally, grant :ENHANCE',
    },
    '1B': {
      name: 'Behead Hunt',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy. If have :ENHANCE, Armor Peneration (:crossed_swords: x 0.75) selected enemy instead',
    },
    '2B': {
      name: 'Happy Huntress',
      description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy',
    },
    '4B': {
      name: 'Good Kill Hunting',
      description: 'Attack (:crossed_swords: x 3.6) with lowest HP',
    },
  }),
  'fatima sr': new Fatima({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/lZAjqsH.png',
    title: 'Thunder Snap',
    passive: {
      name: 'Cheer Leader',
      description: 'Upon death of target, grant self :ENHANCE 2 turns',
    },
    advisor: {
      name: 'Leap of Faith',
      description: 'Upon death of target by ally, grant :ENHANCE for 2 turns',
    },
    '1B': {
      name: 'Behead Hunt',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy. If have :ENHANCE, Armor Peneration (:crossed_swords: x 0.75) selected enemy instead',
    },
    '2B': {
      name: 'Happy Huntress',
      description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy',
    },
    '4B': {
      name: 'Good Kill Hunting',
      description: 'Attack (:crossed_swords: x 3.6) with lowest HP. If have :ENHANCE, Attack (:crossed_swords: x 3.6) selected enemy instead',
    },
  }),
  'fatima ssr': new Fatima({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/axBEFt3.png',
    title: 'Lurid Lightning',
    passive: {
      name: 'Cheer Leader',
      description: 'Upon death of target, grant self :ENHANCE 3 turns',
    },
    advisor: {
      name: 'Leap Of Faith',
      description: 'Upon death of target by ally, grant :ENHANCE for 3 turns',
    },
    '1B': {
      name: 'Behead Hunt',
      description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy. If have :ENHANCE, Armor Peneration (:crossed_swords: x 0.75) selected enemy instead',
    },
    '2B': {
      name: 'Happy Huntress',
      description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy. If have :ENHANCE, Armor Penetration (:crossed_swords: x 1.5) selected enemy instead',
    },
    '4B': {
      name: 'Good Kill Hunting',
      description: 'Attack (:crossed_swords: x 3.6) with lowest HP. If have :ENHANCE, Attack (:crossed_swords: x 3.6) selected enemy instead',
    },
  }),
  'fatima skin': new Fatima({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/YhXGK7g.png',
    title: 'Crimson Bolt',
    passive: {
      name: 'Thirst for Blood',
      description: 'Upon death of target, Heal (:crossed swords: x 0.9) self, grant self :ENHANCE for all turns this round',
    },
    advisor: {
      name: 'Hunting Rites',
      description: 'Allies\' True Damage effets increased by 30%',
    },
    '1B': {
      name: 'Heart Seeker',
      description: 'True Damage (:crossed_swords: x 0.75) front row enemy. Grant self :TEAR',
    },
    '2B': {
      name: 'Sky Splitting Strike',
      description: 'True Damage (:crossed_swords: x 1.75) back row enemy. Grant self :TEAR for 2 turns',
    },
    '4B': {
      name: 'Unleash Thunder',
      description: 'True Damage (:crossed_swords: x 2.5) enemy with lowest HP. Grant self :TEAR for 3 turns',
    },
  }),
};