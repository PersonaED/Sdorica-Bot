import { TIER_R, TIER_SR, TIER_SSR, SKILL_BOOK, SP } from '../constants';
import Sione from './model/Sione';
import SioneSP from './model/SioneSP';

export default {
  'sione r': new Sione({
    tier: TIER_R,
    sprite: 'https://i.imgur.com/WcDx6NE.png',
    title: 'Clearcut Lass',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have :DMGRED, grant self :ENHANCE',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has :DMGRED, increase skill power by 20%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self :DMGRED for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'sione sr': new Sione({
    tier: TIER_SR,
    sprite: 'https://i.imgur.com/rFPasHF.png',
    title: 'Pierce the Frail',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have :DMGRED, grant self :ENHANCE for 2 turns',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has :DMGRED, increase skill power by 25%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self :DMGRED for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy. If have :DMGRED, True Damage (:crossed_swords: x 1) selected enemy instead',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'sione ssr': new Sione({
    tier: TIER_SSR,
    sprite: 'https://i.imgur.com/SS78H98.png',
    title: 'Vorpal Vortex',
    passive: {
      name: 'Stellar Stamina',
      description: 'Upon incoming damage skill, if have :DMGRED, grant self :ENHANCE for 3 turns',
    },
    advisor: {
      name: 'Tell Lore Swift',
      description: 'If ally has :DMGRED, increase skill power by 30%',
    },
    '1B': {
      name: 'High Roller Blade',
      description: 'Grant self Taunt and :DMGRED for 3 turns',
    },
    '2B': {
      name: 'Blade Runner',
      description: 'True Damage (:crossed_swords: x 1) front row enemy. If have :DMGRED, True Damage (:crossed_swords: x 1) selected enemy instead',
    },
    '4B': {
      name: 'Blades of Glory',
      description: 'True Damage (:crossed_swords: x 1) all enemies',
    },
  }),
  'sione skin': new Sione({
    tier: SKILL_BOOK,
    sprite: 'https://i.imgur.com/t6mjJGv.png',
    title: 'Fiery Blue Rapier',
    passive: {
      name: 'Blade Break',
      description: 'If more than 2 enemies are present, ally damage skill grant :VUL for 2 turns',
    },
    advisor: {
      name: 'Sword Flash',
      description: 'If more than 2 enemies are present, ally damage skill grant :VUL for 2 turns',
    },
    '1B': {
      name: 'Cool, Calm, Collected',
      description: 'Grant self Taunt and :DMGRED for 3 turns',
    },
    '2B': {
      name: 'Flying Swallow Slash',
      description: 'True Damage (:crossed_swords: x 1.25) enemy with highest HP. If target has :VUL, trigger self 1 block skill',
    },
    '4B': {
      name: 'Dancing Flames',
      description: 'True Damage (:crossed_swords: x 1) all enemies. If target has :VUL, grant :VUL for 2 extra turns',
    },
  }),
  'sione sp': new SioneSP({
    tier: SP,
    sprite: 'https://i.imgur.com/EK7hOm1.png',
    title: 'Shall We Dance',
    passive: {
      name: 'A Fine Blade',
      description: 'Upon cast damage skill by ally, if have :ENHANCE, grant target :TEAR',
    },
    advisor: {
      name: 'Sound of Silence',
      description: 'Upon cast damage skill by ally, if have :ENHANCE, grant target :TEAR',
    },
    '1B': {
      name: 'Fluttering Blades',
      description: 'Grant selected enemy :TEAR for 6 turns',
    },
    '2B': {
      name: 'Luminescence Slash',
      description: 'True Damage (:crossed_swords: x 1) all enemies who are not at full HP. If all enemies are at full HP, grant selected ally (:crossed_swords: x 1.8) Armor and :ENHANCE for 6 turns',
    },
    '4B': {
      name: 'Moonlight Waltz',
      description: 'True Damage (:crossed_swords: x 1.5) all enemies who are not at full HP, grant :TEAR for 6 turns. If all enemies are at full HP, grant all allies (:crossed_swords: x 1.8) Armor and :ENHANCE for 6 turns',
    },
  }),
};
