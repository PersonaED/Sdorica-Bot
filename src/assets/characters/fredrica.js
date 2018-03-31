import { WHITE, EXHAUST, STUN, TIER_R, TIER_SR, TIER_SSR } from '../constants';

export default {
  'fredrica r': {
    tier: TIER_R,
    sprite: 'https://i.imgur.com/NYVNYs9.png',
    block: WHITE,
    name: 'Fredrica R: Tasty Eye Candy',
    passive: {
      name: 'Reward\'s A Kiss',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Affectionate Cheer',
      description: 'Upon death of target by ally, heal ally equal to 20% of max HP',
    },
    '1B': {
      name: 'Love Is Blind',
      description: 'Attack (:crossed_swords: x 0.8) selected enemy.',
    },
    '2B': {
      name: 'Burning Love',
      description: 'Attack (:crossed_swords: x 0.8) all enemies.',
    },
    '4B': {
      name: 'Tears Of Joy',
      description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
    },
    status: [],
  },
  'fredrica sr': {
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/fMpFoXJ.png',
    block: WHITE,
    name: 'Fredrica SR: Drop-Dead Gorgeous',
    passive: {
      name: 'Reward\'s A Kiss',
      description: 'Upon death of target by ally, heal (:crossed_swords: x 1.08) ally.',
    },
    advisor: {
      name: 'Affectionate Cheer',
      description: 'Upon death of target by ally, heal ally equal to 25% of max HP',
    },
    '1B': {
      name: 'Love Is Blind',
      description: 'Attack (:crossed_swords: x 0.8) selected enemy.',
    },
    '2B': {
      name: 'Burning Love',
      description: 'Attack (:crossed_swords: x 0.8) all enemies. Grant Exhaust or Stun. ',
    },
    '4B': {
      name: 'Tears Of Joy',
      description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
    },
    status: [
      EXHAUST,
      STUN,
    ],
  },
  'fredrica ssr': {
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/68ecdMS.png',
    block: WHITE,
    name: 'Fredrica SSR: Bewitched Beauty',
    passive: {
      name: 'Reward\'s A Kiss',
      description: 'Upon death of target by ally, heal (:crossed_swords: x 1.8) ally, grant stun for 2 turns.',
    },
    advisor: {
      name: 'Affectionate Cheer',
      description: 'Upon death of target by ally, heal ally equal to 30% of max HP',
    },
    '1B': {
      name: 'Love Is Blind',
      description: 'Attack (:crossed_swords: x 0.8) selected enemy. Grant Exhaust or Stun.',
    },
    '2B': {
      name: 'Burning Love',
      description: 'Attack (:crossed_swords: x 0.8) all enemies. Grant Exhaust or Stun.',
    },
    '4B': {
      name: 'Tears Of Joy',
      description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
    },
    status: [
      STUN,
      EXHAUST,
    ],
  },
};
