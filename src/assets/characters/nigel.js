import { TIER_R, TIER_SR, TIER_SSR, SP, SKILL_BOOK } from '../constants';
import Nigel from './model/Nigel';
import NigelSP from './model/NigelSP';

export default {
  'nigel r': new Nigel({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/0upjO2Y.png',
    title: 'Hack and Clash',
    passive: {
      name: 'Stay Strong',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Come Kamikaze',
      description: 'Upon receive Armor of ally, grant self Taunt',
    },
    '1B': {
      name: 'Lead a Stray',
      description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
    },
    '2B': {
      name: 'No Loss Leader',
      description: 'Grant self (:crossed_swords: x 2.4) Armor',
    },
    '4B': {
      name: 'Follow My Lead',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'nigel sr': new Nigel({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/z213deW.png',
    title: 'Carved in Bone',
    passive: {
      name: 'Stay Strong',
      description: 'Upon receive Armor, grant self Taunt',
    },
    advisor: {
      name: 'Come Kamikaze',
      description: 'Upon receive Armor of ally, grant self Taunt',
    },
    '1B': {
      name: 'Lead a Stray',
      description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
    },
    '2B': {
      name: 'No Loss Leader',
      description: 'Grant self (:crossed_swords: x 2.4) Armor. If self not full HP, Heal (:crossed_swords: x 1.8) self instead',
    },
    '4B': {
      name: 'Follow My Lead',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'nigel ssr': new Nigel({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/lMeaHLZ.png',
    title: 'Shockblade Scourge',
    passive: {
      name: 'Stay Strong',
      description: 'Upon receive Armor, grant self Taunt for 2 Turns',
    },
    advisor: {
      name: 'Come Kamikaze',
      description: 'Upon receive Armor of ally, grant self Taunt for 2 Turns',
    },
    '1B': {
      name: 'Lead a Stray',
      description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
    },
    '2B': {
      name: 'No Loss Leader',
      description: 'Grant self (:crossed_swords: x 2.4) Armor. If self not full HP, Heal (:crossed_swords: x 1.8) self instead',
    },
    '4B': {
      name: 'Follow My Lead',
      description: 'Attack (:crossed_swords: x 4) front row enemy. If target less than 50% HP, increase skill power by 50% for this turn',
    },
  }),
  'nigel sp': new NigelSP({
    tier: SP,
    sprite: 'https://i.imgur.com/YFtmC85.png',
    title: 'Tempest Wanderer',
    passive: {
      name: 'Rebellious Nature',
      description: 'Upon death of target, grant self :CHARISMA for 3 turns.',
    },
    advisor: {
      name: 'Passionate Leader',
      description: 'Upon death of target by ally, grant :CHARISMA for 3 turns.',
    },
    '1B': {
      name: 'Crimson Slash',
      description: 'Attack (:crossed_swords: x 0.6) front row and back row enemy.',
    },
    '2B': {
      name: 'Twin Katana Strike',
      description: 'Attack (:crossed_swords: x 1) enemy with highest and lowest HP.',
    },
    '4B': {
      name: 'Blooming Blood Flower',
      description: 'Armor Penetration (:crossed_swords: x 1.5) enemy with highest and lowest Armor.',
    },
  }),
  'nigel skin': new Nigel({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/2D00IVa.png',
    skin: 'Calamity Cutlass',
    passive: {
      name: 'Into The Wind',
      description: 'Upon cast skill by player character, if target has 3 stacks of any debuff, increase skill power by 50%',
    },
    advisor: {
      name: 'Downwind',
      description: 'Upon cast skill by ally, if target has 3 stacks of any debuff, increase skill power by 50%',
    },
    '1B': {
      name: 'Upwind Edge',
      description: 'Attack (:crossed_swords: x 0.5) front row enemy, grant 2 stacks :EXH',
    },
    '2B': {
      name: 'Double Payback',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy; copy all debuffs this character has, grant selected enemy 3 stacks of the copied debuffs',
    },
    '4B': {
      name: 'Calamity Gash',
      description: 'Attack (:crossed_swords: x 3.5) front row enemy, grant 3 stacks :TEAR',
    },
  }),
};
