import { GOLD, WHITE, VULNERABILITY, DAMAGEREDUCTION, ENHANCE, TEAR, TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'angelia n': {
    tier: TIER_N,
    sprite: 'https://i.imgur.com/sT1bN2g.png',
    block: WHITE,
    name: 'Angelia N: Thy Fair Lady',
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
      description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
    },
    '2B': {
      name: 'Let Us Pray',
      description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
    },
    '4B': {
      name: 'Prayer Player',
      description: 'Heal (:crossed_swords: x 1.8) front row ally',
    },
    status: [],
  },
  'sione r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/WcDx6NE.png',
    block: GOLD,
    name: 'Sione R: Clearcut Lass',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have Damage Reduction, grant self Enhance',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has Damage Reduction, increase skill power by 20%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self Damage Reduction for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
    status: [
      DAMAGEREDUCTION,
      ENHANCE,
    ],
  },
  'sione sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/rFPasHF.png',
    block: GOLD,
    name: 'Sione SR: Pierce the Frail',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have Damage Reduction, grant self Enhance for 2 turns',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has Damage Reduction, increase skill power by 25%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self Damage Reduction for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy. If have Damage Reduction, True Damage (:crossed_swords: x 1) selected enemy instead',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
    status: [
      DAMAGEREDUCTION,
      ENHANCE,
    ],
  },
  'sione ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/SS78H98.png',
    block: GOLD,
    name: 'Sione SSR: Vorpal Vortex',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have Damage Reduction, grant self Enhance for 3 turns',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has Damage Reduction, increase skill power by 30%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self Taunt and Damage Reduction for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy. If have Damage Reduction, True Damage (:crossed_swords: x 1) selected enemy instead',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
    status: [
      DAMAGEREDUCTION,
      ENHANCE,
    ],
  },
  'sione skin': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/t6mjJGv.png',
    block: GOLD,
    name: 'Sione Skillbook: Fiery Blue Rapier',
    passive: {
      name: 'Blade Break',
      description: 'If more than 2 enemies are present, ally damage skill grant Vulnerability for 2 turns',
    },
    advisor: {
      name: 'Sword Flash',
      description: 'If more than 2 enemies are present, ally damage skill grant Vulnerability for 2 turns',
    },
    '1B': {
      name: 'Cool, Calm, Collected',
      description: 'Grant self Taunt and Damage Reduction for 3 turns',
    },
    '2B': {
      name: 'Flying Swallow Slash',
      description: 'True Damage (:crossed_swords: x 1.25) enemy with highest HP. If target has Vulnerability, trigger self 1 block skill',
    },
    '4B': {
      name: 'Dancing Flames',
      description: 'True Damage (:crossed_swords: x 1) all enemies. If target has Vulnerability, grant Vulnerability for 2 extra turns',
    },
    status: [
      VULNERABILITY,
      DAMAGEREDUCTION,
    ],
  },
  'sione sp': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/EK7hOm1.png',
    block: WHITE,
    name: 'Sione SP: Shall We Dance',
    passive: {
      name: 'A Fine Blade',
      description: 'Upon cast damage skill by ally, if have Enhance, grant target Tear',
    },
    advisor: {
      name: 'Sound of Silence',
      description: 'Upon cast damage skill by ally, if have Enhance, grant target Tear',
    },
    '1B': {
      name: 'Fluttering Blades',
      description: 'Grant selected enemy Tear for 6 turns',
    },
    '2B': {
      name: 'Luminescence Slash',
      description: 'True Damage (:crossed_swords: x 1) all enemies who are not at full HP. If all enemies are at full HP, grant selected ally (:crossed_swords: x 1.8) Armor and Enhance for 6 turns',
    },
    '4B': {
      name: 'Moonlight Waltz',
      description: 'True Damage (:crossed_swords: x 1.5) all enemies who are not at full HP, grant Tear for 6 turns. If all enemies are at full HP, grant all allies (:crossed_swords: x 1.8) Armor and Enhance for 6 turns',
    },
    status: [
      TEAR,
      ENHANCE,
    ],
  },
};
