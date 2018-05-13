import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from '../constants';
import Angelia from './model/Angelia';
import AngeliaSP from './model/AngeliaSP';

export default {
  'angelia n': new Angelia({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/sT1bN2g.png',
    title: 'Thy Fair Lady',
    passive: {
      name: 'Helpful Halo',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Angelic Aura',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)',
    },
    '1B': {
      name: 'Wing and Prayer',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1-orb skill',
    },
    '2B': {
      name: 'Let Us Pray',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
    },
    '4B': {
      name: 'Prayer Player',
      description: 'Heal (:crossed_swords: x 1.8) front row ally',
    },
  }),
  'angelia r': new Angelia({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/sT1bN2g.png',
    title: 'Shy Sweetheart',
    passive: {
      name: 'Helpful Halo',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Angelic Aura',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)',
    },
    '1B': {
      name: 'Wing and Prayer',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1-orb skill',
    },
    '2B': {
      name: 'Let Us Pray',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
    },
    '4B': {
      name: 'Prayer Player',
      description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2-orb skill',
    },
  }),
  'angelia sr': new Angelia({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/dxxHkc0.png',
    title: 'Unfazed Dame',
    passive: {
      name: 'Helpful Halo',
      description: 'Upon cast Armor, if target has :EXH, skill power increased by 100%',
    },
    advisor: {
      name: 'Angelic Aura',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 2)',
    },
    '1B': {
      name: 'Wing and Prayer',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1-orb skill',
    },
    '2B': {
      name: 'Let Us Pray',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
    },
    '4B': {
      name: 'Prayer Player',
      description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 4-orb skill',
    },
  }),
  'angelia ssr': new Angelia({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/7vEcX1i.png',
    title: 'Virtue Virtuoso',
    passive: {
      name: 'Helpful Halo',
      description: 'Upon cast Armor, if target has :EXH/:VUL, increase skill power by 100%',
    },
    advisor: {
      name: 'Angelic Aura',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 1)',
    },
    '1B': {
      name: 'Wing and Prayer',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1-orb skill',
    },
    '2B': {
      name: 'Let Us Pray',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor, grant :DMGRED',
    },
    '4B': {
      name: 'Prayer Player',
      description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 4-orb skill',
    },
  }),
  'angelia skin': new Angelia({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/sETzJmO.png',
    title: 'Daybreak Darling',
    passive: {
      name: "Empress' Order",
      description: 'Upon cast Armor, if target has :EXH/:VUL, trigger target 1-orb skill',
    },
    advisor: {
      name: 'For The Kingdom',
      description: 'Trigger front row ally 1-orb skill. (CD: 3)',
    },
    '1B': {
      name: 'Stand Tall',
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1-orb skill',
    },
    '2B': {
      name: 'Glowing Prayer',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor and :TANKU for 2 turns',
    },
    '4B': {
      name: 'Luminious Radiance',
      description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2-orb skill 2 times',
    },
  }),
  'angelia sp': new AngeliaSP({
    tier: SP,
    sprite: 'https://i.imgur.com/4rIox7p.png',
    title: 'Enchantress of Fate',
    passive: {
      name: 'Be My Shield',
      description: 'Upon 0 Armor of front row ally, grant :TANKU for 3 turns',
    },
    advisor: {
      name: 'Emergency Command',
      description: 'Grant selected ally :TANKU for 3 turns. (CD: 5)',
    },
    '1B': {
      name: 'Prepare For Combat',
      description: 'Grant selected ally :TANKU for 3 turns',
    },
    '2B': {
      name: 'Assault Order',
      description: 'Trigger 2-orb skill of all allies with Armor',
    },
    '4B': {
      name: 'Annihilation Order',
      description: 'Trigger 4-orb skill of all allies with :TANKU',
    },
  }),
};
