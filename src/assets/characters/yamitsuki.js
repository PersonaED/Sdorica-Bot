import { TIER_R, TIER_SR, TIER_SSR, SP, SKILL_BOOK } from '../constants';
import Yamitsuki from './model/Yamitsuki';
import YamitsukiSP from './model/YamitsukiSP';

export default {
  'yamitsuki r': new Yamitsuki({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/gxp5MYV.png',
    title: 'Shadow Walker',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon Tier SR, unlock passive skill.',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 7)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED.',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy.',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy.',
    },
  }),
  'yamitsuki sr': new Yamitsuki({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/soxgPHa.png',
    title: 'Nevermore Ninja',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon cast damage skill, if target has :VUL, increase skill ratio by 50% for this turn.',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 6)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED.',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy, remove :ENHANCE and :VIGIL.',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy.',
    },
  }),
  'yamitsuki ssr': new Yamitsuki({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/PEDEMmr.png',
    title: 'Twin Of Twilight',
    passive: {
      name: 'Insult To Injury',
      description: 'Upon cast damage skill, if target has :VUL/:EXH, increase skill ratio by 50% for this turn.',
    },
    advisor: {
      name: 'After Dark',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 5)',
    },
    '1B': {
      name: 'Just Beat It',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED.',
    },
    '2B': {
      name: 'Beat The Hush',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy, remove :ENHANCE and :VIGIL.',
    },
    '4B': {
      name: 'Beat And Defeat',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant 2 stacks :VUL and 2 stacks :EXH for 2 turns.',
    },
  }),
  'yamitsuki skin': new Yamitsuki({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/ZctlAIN.png',
    title: 'Dawnblade Killer',
    passive: {
      name: 'In Broad Daylight',
      description: 'If have both :ENHANCE and :DMGRED, increase self skill ratio by 30%.',
    },
    advisor: {
      name: 'Suspicious Shadow',
      description: 'Upon player\'s turn, if ally has both :ENHANCE and :DMGRED, trigger 1-orb skill.',
    },
    '1B': {
      name: 'Dawn Of Judgement',
      description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, grant self :DMGRED for 3 turns.',
    },
    '2B': {
      name: 'Conviction Verdict',
      description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy, grant self :ENHANCE for 3 turns.',
    },
    '4B': {
      name: 'Acquittal Declared',
      description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant self :ENHANCE and :DMGRED for 3 turns.',
    },
  }),
  'yamitsuki sp': new YamitsukiSP({
    tier: SP,
    sprite: 'https://i.imgur.com/zf1KJoJ.png',
    title: 'Nature\'s Beauty',
    passive: {
      name: 'Witching Hour',
      description: 'Upon cast skill by ally, if more than one enemy is present, grant :VIGIL.',
    },
    advisor: {
      name: 'Nether Mist',
      description: 'Upon cast skill by ally, if more than one enemy is present, grant :VIGIL.',
    },
    '1B': {
      name: 'Confetti Shower',
      description: 'Heal (:crossed_swords: x 0.27)(:crossed_swords: x 0.27) all player characters and grant :VIGIL 2 times in a row. If any target gets over 50% HP during the skill cast, stop immediately.',
    },
    '2B': {
      name: 'Deadly Gold Hairpins',
      description: 'Armor Penetration (:crossed_swords: x 0.525)(:crossed_swords: x 0.45)(:crossed_swords: x 0.375) all enemies 3 times in a row. If any target falls below 50% HP during the skill cast, stop immediately.',
    },
    '4B': {
      name: 'Blossoming Scarlet',
      description: 'Armor Penetration (:crossed_swords: x 0.75)(:crossed_swords: x 0.675)(:crossed_swords: x 0.6) all enemies 3 times in a row. If any target dies during the skill cast, stop immediately.',
    },
  }),
};
