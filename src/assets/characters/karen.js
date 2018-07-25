import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Karen from './model/Karen';

export default {
  'karen r': new Karen({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/gxp5MYV.png',
    title: 'Local Commerce President',
    passive: {
      name: 'Armed and Ready',
      description: 'If gold character has Armor, increase self skill power by 15%.',
    },
    advisor: {
      name: 'Public Support',
      description: 'If gold character has Armor, increase black character\'s skill power by 15%.',
    },
    '1B': {
      name: 'Gun Control',
      description: 'Switch to a different weapon.',
    },
    '2B': {
      name: 'Fire Away!',
      description: 'Fire the weapon at the top of the rotation.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
    '4B': {
      name: 'Total Armageddon',
      description: 'Fire all weapons simultaneously.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
  }),
  'karen sr': new Karen({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/soxgPHa.png',
    title: 'Senior Commerce President',
    passive: {
      name: 'Armed and Ready',
      description: 'If gold character has Armor or :DMGRED, increase self skill power by 15%. (Up to 30%)',
    },
    advisor: {
      name: 'Public Support',
      description: 'If gold character has Armor or :DMGRED, increase black character\'s skill power by 15%. (Up to 30%)',
    },
    '1B': {
      name: 'Gun Control',
      description: 'Switch to a different weapon, remove 1 non-black orb.',
    },
    '2B': {
      name: 'Fire Away!',
      description: 'Fire the weapon at the top of the rotation.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
    '4B': {
      name: 'Total Armageddon',
      description: 'Fire all weapons simultaneously.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
  }),
  'karen ssr': new Karen({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/PEDEMmr.png',
    title: 'Executive Commerce President',
    passive: {
      name: 'Armed and Ready',
      description: 'If gold character has Armor, :DMGRED or :TAUNT, increase self skill power by 15%. (Up to 45%)',
    },
    advisor: {
      name: 'Public Support',
      description: 'If gold character has Armor, :DMGRED or :TAUNT, increase black character\'s skill power by 15%. (Up to 45%)',
    },
    '1B': {
      name: 'Gun Control',
      description: 'Switch to a different weapon, remove 2 non-black orbs.',
    },
    '2B': {
      name: 'Fire Away!',
      description: 'Fire the weapon at the top of the rotation.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
    '4B': {
      name: 'Total Armageddon',
      description: 'Fire all weapons simultaneously.
      
      Machine gun: Armor Penetration (:crossed_swords: x 0.525) random enemy 3 times, remove 1 non-black orb.
      Flamethrower: Attack (:crossed_swords: x 1) all enemies, remove 1 non-black orb.
      Laser Blaster: True Damage (:crossed_swords: x 1) selected enemy, remove 1 non-black orb.',
    },
  }),
};
