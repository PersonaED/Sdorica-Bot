import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Lio from './model/Lio';

export default {
  'lio r': new Lio({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/Me0Jhgr.png',
    title: 'Gallant Scout',
    passive: {
      name: 'Base Booster',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'Nom Nom Nutrition',
      description: 'Heal (:crossed_swords: x 1.35) selected ally. (CD: 7)',
    },
    '1B': {
      name: 'Junk Food',
      description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 3 turns.',
    },
    '2B': {
      name: 'Food Aid',
      description: 'Heal (:crossed_swords: x 1.8) selected ally.',
    },
    '4B': {
      name: 'Food Lay Waste',
      description: 'Armor Penetration (:crossed_swords: x 3) back row enemy.',
    },
  }),
  'lio sr': new Lio({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/uJa3NaQ.png',
    title: 'Ace Cadet',
    passive: {
      name: 'Base Booster',
      description: 'Upon turn, grant self 1 stack. Upon 4 stacks, increase skill power by 50% for next skill, reset stacks.',
    },
    advisor: {
      name: 'Nom Nom Nutrition',
      description: 'Heal (:crossed_swords: x 1.35) selected ally. (CD: 6)',
    },
    '1B': {
      name: 'Junk Food',
      description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 2 turns.',
    },
    '2B': {
      name: 'Food Aid',
      description: 'Heal (:crossed_swords: x 1.8) selected ally.',
    },
    '4B': {
      name: 'Food Lay Waste',
      description: 'Armor Penetration (:crossed_swords: x 3) back row enemy.',
    },
  }),
  'lio ssr': new Lio({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/eEi1zGu.png',
    title: 'Homeland In Security',
    passive: {
      name: 'Base Booster',
      description: 'Upon turn, grant self 1 stack. Upon 3 stacks, increase skill power by 50% for next skill, reset stacks.',
    },
    advisor: {
      name: 'Nom Nom Nutrition',
      description: 'Heal (:crossed_swords: x 1.35) selected ally. (CD: 5)',
    },
    '1B': {
      name: 'Junk Food',
      description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH.',
    },
    '2B': {
      name: 'Food Aid',
      description: 'Heal (:crossed_swords: x 1.8) selected ally.',
    },
    '4B': {
      name: 'Food Lay Waste',
      description: 'Armor Penetration (:crossed_swords: x 3) back row enemy.',
    },
  }),
  'lio skin': new Lio({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/teiwY8c.png',
    title: 'Mandora Shooter',
    passive: {
      name: 'Well-timed Support',
      description: 'Upon start of each battle, heal allies to full HP.',
    },
    advisor: {
      name: 'Roll The Dice',
      description: "Allies' Armor Penetration skills have 30% chance to trigger target CD +1.",
    },
    '1B': {
      name: 'Toxic Mandora',
      description: 'Grant selected character :POIS.',
    },
    '2B': {
      name: 'Carrot Cannon',
      description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy. 50% chance to trigger target CD +1',
    },
    '4B': {
      name: 'Super Mandrake',
      description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy. 50% chance to trigger target CD +3',
    },
  }),
};
