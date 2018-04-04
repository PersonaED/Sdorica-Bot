import { BLACK, ENHANCE, RANTRAVE, TEAR, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'ned n': {
    tier: TIER_N,
    sprite: 'https://i.imgur.com/ip0iAsg.png',
    block: BLACK,
    name: 'Ned N: Lone Ranger',
    passive: {
      name: 'What's For Desert',
      description: 'Upon Tier R, unlock passive skill',
    },
    advisor: {
      name: 'Up To Parched',
      description: "Attack (:crossed_swords: x 1.5) selected enemy. (CD: 7)",
    },
    '1B': {
      name: 'Tamper Sand',
      description: 'Grant self Rant Rave',
    },
    '2B': {
      name: 'Quick Sand',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. If have Rant Rave, Attack (:crossed_swords: x 2.25) random enemy instead',
    },
    '4B': {
      name: 'Delude Sandstorm',
      description: 'Attack (:crossed_swords: x 3) selected enemy. If have Rant Rave, Attack (:crossed_swords: x 4.5) random enemy instead',
    },
    status: [
      RANTRAVE,
    ],
  },
  'ned r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/GMZLgW3.png',
    block: BLACK,
    name: 'Ned R: Dune Chaser',
    passive: {
      name: 'What's For Desert',
      description: 'Upon death of any character, grant self Rant Rave',
    },
    advisor: {
      name: 'Up To Parched',
      description: "Attack (:crossed_swords: x 1.5) selected enemy. (CD: 7)",
    },
    '1B': {
      name: 'Tamper Sand',
      description: 'Grant self Rant Rave for 3 turns',
    },
    '2B': {
      name: 'Quick Sand',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. If have Rant Rave, Attack (:crossed_swords: x 2.25) random enemy instead',
    },
    '4B': {
      name: 'Delude Sandstorm',
      description: 'Attack (:crossed_swords: x 3) selected enemy. If have Rant Rave, Attack (:crossed_swords: x 4.5) random enemy instead',
    },
    status: [
      RANTRAVE,
    ],
  },
  'ned sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/GMZLgW3.png',
    block: BLACK,
    name: 'Ned SR: Horror Harvester',
    passive: {
      name: 'What's For Desert',
      description: 'Upon death of any character, grant self Rant Rave for 2 turns',
    },
    advisor: {
      name: 'Up To Parched',
      description: "Attack (:crossed_swords: x 1.5) selected enemy. (CD: 6)",
    },
    '1B': {
      name: 'Tamper Sand',
      description: 'Grant self Rant Rave for 3 turns',
    },
    '2B': {
      name: 'Quick Sand',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. If target less than 50% HP, increase skll power by 50% for this turn. If have Rant Rave, Attack (:crossed_swords: x 2.25) random enemy instead',
    },
    '4B': {
      name: 'Delude Sandstorm',
      description: 'Attack (:crossed_swords: x 3) selected enemy. If have Rant Rave, Attack (:crossed_swords: x 4.5) random enemy instead',
    },
    status: [
      RANTRAVE,
    ],
  },
  'ned ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/XkW0cPi.png',
    block: BLACK,
    name: 'Ned SSR: Death Collector',
    passive: {
      name: 'What's For Desert',
      description: 'Upon death of any character, grant self Rant Rave for 3 turns',
    },
    advisor: {
      name: 'Up To Parched',
      description: "Attack (:crossed_swords: x 1.5) selected enemy. (CD: 5)",
    },
    '1B': {
      name: 'Tamper Sand',
      description: 'Grant self Rant Rave for 3 turns',
    },
    '2B': {
      name: 'Quick Sand',
      description: 'Attack (:crossed_swords: x 1.5) selected enemy. If target less than 50% HP, increase skll power by 50% for this turn. If have Rant Rave, Attack (:crossed_swords: x 2.25) random enemy instead',
    },
    '4B': {
      name: 'Delude Sandstorm',
      description: 'Attack (:crossed_swords: x 3) selected enemy. If not trigger death of target, trigger self 2 block skill 1 time. If have Rant Rave, Attack (:crossed_swords: x 4.5) random enemy instead',
    },
    status: [
      RANTRAVE,
    ],
  },
  'ned skin': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/gjHxf2d.png',
    block: BLACK,
    name: 'Ned Skillbook: Azure Predator',
    passive: {
      name: 'Mind of a Hunter',
      description: 'Upon receive Enhance, cast Attack (:crossed_swords: x 0.5) that grant all characters Tear',
    },
    advisor: {
      name: 'Predator's Imprint',
      description: "Allies' Attack skills grant target Tear",
    },
    '1B': {
      name: 'Blazing Soul',
      description: 'Grant self Enhance for 3 turns',
    },
    '2B': {
      name: 'Deadly Pursuit',
      description: 'Attack (:crossed_swords: x 1.8) back row enemy. Grant Tear for 3 turns',
    },
    '4B': {
      name: 'Designated Target',
      description: 'Attack (:crossed_swords: x 3) selected enemy. Grant Tear for all turns',
    },
    status: [
      ENHANCE,
      TEAR,
    ],
  },
};