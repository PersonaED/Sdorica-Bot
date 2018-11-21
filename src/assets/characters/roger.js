import { TIER_N, TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Roger from './model/Roger';

export default {
  'roger n': new Roger({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    title: "Robbin' Good",
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2) front row enemy. Grant self :VUL',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger r': new Roger({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/tJKyEXz.png',
    title: 'Raw Outlaw',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1) front row enemy',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger sr': new Roger({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/kMTLy3b.png',
    title: 'Plunder Plus',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50% HP, increase skill power of 1/2-orb skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 50% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Deal self damage equal to 20% HP of current HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 4) front row enemy',
    },
  }),
  'roger ssr': new Roger({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/HeG55pv.png',
    title: 'Armed Berserker',
    passive: {
      name: 'Roar Reversal',
      description: 'Upon less than 80/50/20% HP, increase skill power of 1/2/4-orb skill by 50%',
    },
    advisor: {
      name: 'Empower Ranger',
      description: 'If ally has less than 80% HP, increase skill power of 1-orb skill by 50%',
    },
    '1B': {
      name: 'Cut and Waste',
      description: 'Attack (:crossed_swords: x 1.5) front row enemy. Deal self damage equal to 20% of current HP',
    },
    '2B': {
      name: 'Cutting Pledge',
      description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
    },
    '4B': {
      name: 'Cut Core Nerves',
      description: 'Attack (:crossed_swords: x 6) front row enemy. Trigger death of self',
    },
  }),
  'roger skin': new Roger({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/jac4Bu8.png',
    title: 'Dangerous Zombie',
    passive: {
      name: 'Desperate Counter',
      description: 'If have more than 20%/50%/80% HP, increase skill ratio of 1/2/4-orb skill by 20%.\nUpon the end of player\'s turn, 1 orb becomes gold, deal damage (:crossed_swords: x 0.6) to self.',
    },
    advisor: {
      name: 'Death-Defying Howl',
      description: 'Upon the end of player\'s turn, if gold character has more than 50% Armor, trigger 2-orb skill and remove all Armor from gold character.',
    },
    '1B': {
      name: 'Butcher Bash',
      description: 'Attack (:crossed_swords: x 1.2) front row enemy, deal damage (:crossed_swords: x 0.3) to self, 1 orb becomes gold.',
    },
    '2B': {
      name: 'Fatality Combo',
      description: 'Attack (:crossed_swords: x 2) front row enemy, grant self :RAGE for 2 turns.',
    },
    '4B': {
      name: 'Bloodthirsty Carnage',
      description: 'Attack (:crossed_swords: x 0.5) then Drain (:crossed_swords: x 3.5) front row enemy. Heal self equal to the amount of damage dealt with Drain. This Drain effect is treated as an Attack, not as a Heal.',
    },
  }),
};
