import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK } from '../constants';
import Lisa from './model/Lisa';

export default {
  'lisa r': new Lisa({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/vV17MmK.png',
    title: 'Step Spinner',
    passive: {
      name: 'Love End War',
      description: 'If ally has :ENHANCE, increase skill power by 10% for each ally with :ENHANCE.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns (CD: 12)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all player characters, grant :ENHANCE.',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns.',
    },
  }),
  'lisa sr': new Lisa({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/82hbe5h.png',
    title: 'Frisky Missy',
    passive: {
      name: 'Love End War',
      description: 'If ally has :ENHANCE, increase skill power by 20% for each ally with :ENHANCE.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns (CD: 11)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all player characters, grant :ENHANCE and :VIGIL',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns.',
    },
  }),
  'lisa ssr': new Lisa({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/05Ilj8G.png',
    title: 'Show Go Girl',
    passive: {
      name: 'Love End War',
      description: 'If ally has :ENHANCE, increase skill power by 30% for each ally with :ENHANCE.',
    },
    advisor: {
      name: 'The Pink Imprint',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns (CD: 10)',
    },
    '1B': {
      name: 'Dancing With Costars',
      description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
    },
    '2B': {
      name: 'Care To Dance',
      description: 'Heal (:crossed_swords: x 0.54) all player characters, grant :ENHANCE and :VIGIL for 2 turns',
    },
    '4B': {
      name: 'Dancing Queen',
      description: 'Grant all player characters 3 stacks :ENHANCE for 2 turns.',
    },
  }),
  'lisa skin': new Lisa({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/0NhJjZG.png',
    title: 'Beaming Bride',
    passive: {
      name: 'Morning Breeze',
      description: 'Upon player\'s turn, remove 1 orb.',
    },
    advisor: {
      name: 'Auburn Sunset',
      description: 'Trigger gold character 1-orb skill 2 times. If said character has armor, trigger 1 extra time. (CD: 5)',
    },
    '1B': {
      name: 'Sunrise Jingle',
      description: 'Grant selected ally :WARCRY for 3 turns.',
    },
    '2B': {
      name: 'Nightfall Chime',
      description: 'Trigger gold character 1-orb skill 2 times. If said character has armor, trigger 1 extra time.',
    },
    '4B': {
      name: 'Moonlight Twirl',
      description: 'Trigger black character 2-orb skill 2 times. If said character has :ENHANCE, trigger 1 extra time.',
    },
  }),
};
