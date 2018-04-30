import { TIER_R, TIER_SR, TIER_SSR } from '../constants';
import Shirley from './model/Shirley';

export default {
  'shirley r': new Shirley({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/uR6OHY5.png',
    title: 'Ballroom Scarlet',
    passive: {
      name: 'From The Ashes',
      description: 'Only requires 4 Resurrection orbs to Resurrect',
    },
    advisor: {
      name: 'Feather Tribe\'s Gift',
      description: 'Upon death of Gold character, reduce Resurrection orbs required by 2',
    },
    '1B': {
      name: 'Blood Sacrifice',
      description: 'Attack self (:crossed_swords: x 0.5), grant all allies (:crossed_swords: x 0.96) Armor',
    },
    '2B': {
      name: 'Lethal Tap Dance',
      description: 'True damage (:crossed_swords: x 1.2) selected enemy',
    },
    '4B': {
      name: 'Shadow Pierce',
      description: 'True damage (:crossed_swords: x 2) selected enemy',
    },
  }),
  'shirley sr': new Shirley({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/Asaq8Jx.png',
    title: 'Femme Fatale',
    passive: {
      name: 'From The Ashes',
      description: 'Only requires 4 Resurrection orbs to Resurrect. Upon Ressurect, grant self 3 stacks :ENHANCE',
    },
    advisor: {
      name: 'Feather Tribe\'s Gift',
      description: 'Upon death of Gold character, reduce Resurrection orbs required by 3',
    },
    '1B': {
      name: 'Blood Sacrifice',
      description: 'Attack self (:crossed_swords: x 0.5), grant all allies (:crossed_swords: x 0.96) Armor',
    },
    '2B': {
      name: 'Lethal Tap Dance',
      description: 'True damage (:crossed_swords: x 1.2) selected enemy, grant :VUL and :TEAR',
    },
    '4B': {
      name: 'Shadow Pierce',
      description: 'True damage (:crossed_swords: x 2) selected enemy, grant :VUL and :TEAR',
    },
  }),
  'shirley ssr': new Shirley({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/87zQ3oF.png',
    title: 'Apex Predator',
    passive: {
      name: 'From The Ashes',
      description: 'Only requires 4 Resurrection orbs to Resurrect. Upon Ressurect, grant self 3 stacks :ENHANCE. When downed, upon turn, deal True Damage (:crossed_swords: x 0.6) to selected enemy',
    },
    advisor: {
      name: 'Feather Tribe\'s Gift',
      description: 'Upon death of Gold character, reduce Resurrection orbs required by 4',
    },
    '1B': {
      name: 'Spirit Sacrifice',
      description: 'Attack self (:crossed_swords: x 0.5), grant all allies (:crossed_swords: x 0.96) Armor',
    },
    '2B': {
      name: 'Phantom Dance',
      description: 'True damage (:crossed_swords: x 1.2) selected enemy, grant :VUL and :TEAR',
    },
    '4B': {
      name: 'Soul Shattering Crush',
      description: 'True damage (:crossed_swords: x 2) selected enemy, grant 2 stacks :VUL and 2 stacks :TEAR',
    },
  }),
};
