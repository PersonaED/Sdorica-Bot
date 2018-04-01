import { BLACK, GOLD, VULNERABILITY, TEAR, TIER_N, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'dylan n': {
    tier: TIER_N,
    sprite: 'https://i.imgur.com/UC9zsaH.png',
    block: GOLD,
    name: 'Dylan N: Spark Knight',
    passive: {
      name: 'Iron Man',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'For Justice',
      description: "Allies' grant Armor effects increased by 15%",
    },
    '1B': {
      name: 'Shielded Stance',
      description: 'Grant self (:crossed_swords: x 1.2) Armor',
    },
    '2B': {
      name: 'Shield Your Eyes',
      description: 'Attack (:crossed_swords: x 2) front row enemy',
    },
    '4B': {
      name: 'Steel Shield Steal',
      description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
    },
    status: [],
  },
  'dylan r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/UC9zsaH.png',
    block: GOLD,
    name: 'Dylan R: Glad Die Later',
    passive: {
      name: 'Iron Man',
      description: 'Upon full Armor, trigger ally 1 block skill, grant Vulnerability',
    },
    advisor: {
      name: 'For Justice',
      description: "Allies' grant Armor effects increased by 20%",
    },
    '1B': {
      name: 'Shielded Stance',
      description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
    },
    '2B': {
      name: 'Shield Your Eyes',
      description: 'Attack (:crossed_swords: x 2) front row enemy',
    },
    '4B': {
      name: 'Steel Shield Steal',
      description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
    },
    status: [
      VULNERABILITY,
    ],
  },
  'dylan sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/UC9zsaH.png',
    block: GOLD,
    name: 'Dylan SR: Renegade Repeller',
    passive: {
      name: 'Iron Man',
      description: 'Upon full Armor, trigger ally 1 block skill',
    },
    advisor: {
      name: 'For Justice',
      description: "Allies' grant Armor effects increased by 25%",
    },
    '1B': {
      name: 'Shielded Stance',
      description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
    },
    '2B': {
      name: 'Shield Your Eyes',
      description: 'Attack (:crossed_swords: x 2) front row enemy. If have Armor, deal additional damage, remove self Armor',
    },
    '4B': {
      name: 'Steel Shield Steal',
      description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
    },
    status: [],
  },
  'dylan ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/4QjQFWm.png',
    block: GOLD,
    name: 'Dylan SSR: Warden of War',
    passive: {
      name: 'Iron Man',
      description: "Upon full Armor, trigger all allies' 1 block skill",
    },
    advisor: {
      name: 'For Justice',
      description: "Allies' grant Armor effects increased by 30%",
    },
    '1B': {
      name: 'Shielded Stance',
      description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
    },
    '2B': {
      name: 'Shield Your Eyes',
      description: 'Attack (:crossed_swords: x 2) front row enemy. If have Armor, deal additional damage, remove self Armor',
    },
    '4B': {
      name: 'Steel Shield Steal',
      description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger all ally 1 block skill',
    },
    status: [],
  },
  'dylan sp': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/DxE8mMU.png',
    block: BLACK,
    name: 'Dylan SP: Refined Blaze',
    passive: {
      name: 'You Shall Not Pass',
      description: 'Has Taunt for all turns. Upon receive Heal, trigger 1 block skill',
    },
    advisor: {
      name: 'Indestructible Arms',
      description: 'If allies are at Full HP, increase skill power by 30%',
    },
    '1B': {
      name: 'Quick Resupply',
      description: 'Heal (:crossed_swords: x 0.45) self, grant selected enemy Tear',
    },
    '2B': {
      name: 'Burning Bash',
      description: 'Attack (:crossed_swords: x 2) front row enemy. The higher the HP this character has, the higher the damage dealt',
    },
    '4B': {
      name: 'Glory To The Sun !',
      description: 'Trigger death of all enemies with lower HP than this character',
    },
    status: [
      TEAR,
    ],
  },
  'dylan skin': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/b4m09D8.png',
    block: GOLD,
    name: 'Dylan Skillbook: Obsidian Bulwark',
    passive: {
      name: 'Armor Reborn',
      description: 'Upon start of each battle, grant self full Armor',
    },
    advisor: {
      name: 'Shield Support',
      description: 'Upon start of each battle, grant front row ally full Armor',
    },
    '1B': {
      name: 'Cover Command',
      description: 'Grant self (:crossed_swords: x 1.2) Armor, trigger black character 1 block skill',
    },
    '2B': {
      name: 'Aegis Smash',
      description: 'Attack (:crossed_swords: x 2) front row enemy, remove self Armor. Upon cast skill, if Dylan has over 30%/60%/90% of Armor, grant target 1/2/3 stacks of Vulnerability for 3 turns',
    },
    '4B': {
      name: 'Charge Assault',
      description: 'Grant self (:crossed_swords: x 2.4) Armor, trigger black character 4 block skill',
    },
    status: [
      VULNERABILITY,
    ],
  },
};
