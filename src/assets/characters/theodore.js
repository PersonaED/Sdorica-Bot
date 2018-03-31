import { WHITE, TANKUP, DAMAGEREDUCTION, ENHANCE, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'theodore r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/IEAit9E.png',
    block: WHITE,
    name: 'Theodore R: Crown the Umpire',
    passive: {
      name: 'Royal Favor',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Teach And Preach',
      description: 'Grant selected ally Damage Reduction for 3 turns. (CD: 7)',
    },
    '1B': {
      name: 'Sidetrack King',
      description: 'Grant selected ally Taunt for 3 turns.',
    },
    '2B': {
      name: 'King Pinned',
      description: 'Grant front row ally (:crossed_swords: x 1.8) Armor.',
    },
    '4B': {
      name: 'Merry May King',
      description: 'Grant front row ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
    },
    status: [
      DAMAGEREDUCTION,
    ],
  },
  'theodore sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/tV9Q4Ta.png',
    block: WHITE,
    name: 'Theodore SR: Pon De Throne',
    passive: {
      name: 'Royal Favor',
      description: 'Upon 0 Armor of front row ally, grant Damage Reduction.',
    },
    advisor: {
      name: 'Teach And Preach',
      description: 'Grant selected ally Damage Reduction for 3 turns. (CD: 6)',
    },
    '1B': {
      name: 'Sidetrack King',
      description: 'Grant selected ally Taunt for 3 turns.',
    },
    '2B': {
      name: 'King Pinned',
      description: 'Grant front row ally (:crossed_swords: x 1.8) Armor and Damage Reduction.',
    },
    '4B': {
      name: 'Merry May King',
      description: 'Grant selected ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
    },
    status: [
      DAMAGEREDUCTION,
    ],
  },
  'theodore ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/FgUf9n0.png',
    block: WHITE,
    name: 'Theodore SSR: Monarch Of Despair',
    passive: {
      name: 'Royal Favor',
      description: 'Upon 0 Armor of front row ally, grant Damage Reduction for 2 turns.',
    },
    advisor: {
      name: 'Teach And Preach',
      description: 'Grant selected ally Damage Reduction for 3 turns. (CD: 5)',
    },
    '1B': {
      name: 'Sidetrack King',
      description: 'Grant selected ally Taunt for 3 turns, trigger 1 block skill.',
    },
    '2B': {
      name: 'King Pinned',
      description: 'Grant front row ally (:crossed_swords: x 1.8) Armor and Damage Reduction.',
    },
    '4B': {
      name: 'Merry May King',
      description: 'Grant selected ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
    },
    status: [
      DAMAGEREDUCTION,
    ],
  },
  'theodore skin': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/x6e3NT1.png',
    block: WHITE,
    name: 'Theodore Skill Book: Cunning Ruler',
    passive: {
      name: 'Ruler\'s Blessing',
      description: 'Upon turn, if front row ally has over 20%/50%/80% Armor, grant ally Taunt/Tank Up/ Damage Reduction.',
    },
    advisor: {
      name: 'Ruler\'s Glory',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor, grant front row ally two stacks Enhance.',
    },
    '1B': {
      name: 'Ruler\'s Decree',
      description: 'Grant selected ally Taunt for 3 turns, trigger 1 block skill.',
    },
    '2B': {
      name: 'Ruler\'s Fortification',
      description: 'Grant front all allies (:crossed_swords: x 0.72) Armor, grant front ally 2 stacks Enhance.',
    },
    '4B': {
      name: 'Ruler\'s Consecration',
      description: 'Grant all allies (:crossed_swords: x 1.2) Armor, trigger front row ally 4 block skill.',
    },
    status: [
      TANKUP,
      DAMAGEREDUCTION,
      ENHANCE,
    ],
  },
};
