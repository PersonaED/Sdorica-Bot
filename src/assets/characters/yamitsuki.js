import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Yamitsuki from './model/Yamitsuki';

export default {
  'yamitsuki r': new Yamitsuki({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/gxp5MYV.png',
    title: 'Shadow Walker',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 7)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy',
    },
  }),
  'yamitsuki sr': new Yamitsuki({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/soxgPHa.png',
    title: 'Nevermore Ninja',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon cast damage skill, if target has :VUL, increase skill power by 50% for this turn',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 6)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy, remove :ENHANCE and :VIGIL',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy',
    },
  }),
  'yamitsuki ssr': new Yamitsuki({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/PEDEMmr.png',
    title: 'Twin Of Twilight',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon cast damage skill, if target has :VUL/:EXH, increase skill power by 50% for this turn',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy. (CD: 5)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.3) selected enemy, remove :ENHANCE and :VIGIL',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant 2 stacks :VUL and 2 stacks :EXH for 2 turns',
    },
  }),
};
