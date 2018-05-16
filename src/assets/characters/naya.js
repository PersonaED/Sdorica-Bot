import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, TIER_N } from '../constants';
import Naya from './model/Naya';

export default {
  'naya n': new Naya({
    tier: TIER_N,
    sprite: 'https://i.imgur.com/IGvNDUS.png',
    title: 'Shiver Quiver',
    passive: {
      name: 'Bullseye',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Bolt Down',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 7)',
    },
    '1B': {
      name: 'Hot Shot',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
    },
    '2B': {
      name: 'Blood Shot',
      description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
    },
    '4B': {
      name: 'Skyfall Shot',
      description: 'Attack (:crossed_swords: x 2.5) selected enemy',
    },
  }),
  'naya r': new Naya({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/IGvNDUS.png',
    title: 'Right Won Target',
    passive: {
      name: 'Bullseye',
      description: 'Upon Tier SR, unlock passive skill',
    },
    advisor: {
      name: 'Bolt Down',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 7)',
    },
    '1B': {
      name: 'Hot Shot',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
    },
    '2B': {
      name: 'Blood Shot',
      description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
    },
    '4B': {
      name: 'Skyfall Shot',
      description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
    },
  }),
  'naya sr': new Naya({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/oIENnng.png',
    title: 'Volley Fall',
    passive: {
      name: 'Bullseye',
      description: 'Upon cast Attack, if target has :VUL, increase Critical Strike Chance',
    },
    advisor: {
      name: 'Bolt Down',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 6)',
    },
    '1B': {
      name: 'Hot Shot',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
    },
    '2B': {
      name: 'Blood Shot',
      description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance to trigger self 4-orb skill instead',
    },
    '4B': {
      name: 'Skyfall Shot',
      description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
    },
  }),
  'naya ssr': new Naya({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/Atr869v.png',
    title: 'Cascade Of Curses',
    passive: {
      name: 'Bullseye',
      description: 'Upon cast Attack, if target has :VUL, increase Critical Strike Chance',
    },
    advisor: {
      name: 'Bolt Down',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 5)',
    },
    '1B': {
      name: 'Hot Shot',
      description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
    },
    '2B': {
      name: 'Blood Shot',
      description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance to trigger self 4-orb skill instead',
    },
    '4B': {
      name: 'Skyfall Shot',
      description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 3x Damage',
    },
  }),
  'naya skin': new Naya({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/uzTM4DB.png',
    title: 'Chilling Arrows',
    passive: {
      name: 'Pickoff Attempt',
      description: 'Upon turn, deal 1 damage to enemies with CD:1, grant :EXH',
    },
    advisor: {
      name: 'Warning Shot',
      description: 'Upon turn, deal 1 damage to enemies with CD:1, grant :EXH',
    },
    '1B': {
      name: 'Frost Shot',
      description: 'Armor Penetration (:crossed_swords: x 0.375) selected enemy. If passive skill was triggered this turn, grant white ally :WARCRY as well',
    },
    '2B': {
      name: 'Chain Strike',
      description: 'Armor Penetration (:crossed_swords: x 0.749) selected enemy. If passive skill was triggered this turn, trigger white ally\'s 2-orb skill as well',
    },
    '4B': {
      name: 'From the skies',
      description: 'Armor Penetration (:crossed_swords: x 1.125) selected enemy. If passive skill was triggered this turn, grant white ally :WARCRY for all turns as well',
    },
  }),
};
