import { GOLD, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'nigel r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/0upjO2Y.png',
    block: GOLD,
    name: 'Nigel R: Hack and Clash',
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
    status: [],
  },
  'nigel sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/z213deW.png',
    block: GOLD,
    name: 'Nigel SR: Carved in Bone',
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
    status: [],
  },
  'nigel ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/lMeaHLZ.png',
    block: GOLD,
    name: 'Nigel SSR: Shockblade Scourge',
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
    status: [],
  },
  'nigel sp-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/YFtmC85.png',
    block: GOLD,
    name: '?????',
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
    status: [],
  },
  'nigel skin-unreleased': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/425bBQZ.png',
    block: GOLD,
    name: '?????',
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
    status: [],
  },
};
