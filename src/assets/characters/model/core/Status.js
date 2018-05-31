const Status = [
  {
    code: ':EXH',
    oldCode: 'EXHAUST',
    label: 'Exhaust',
    description: 'Exhaust: Decrease skill power by 30% for each stack. 3 stacks max',
  },
  {
    code: ':DMGRED',
    oldCode: 'DAMAGEREDUCTION',
    label: 'Damage Reduction',
    description: 'Damage Reduction: Upon incoming damage skill, decrease damage taken by 30% for each stack. 3 stacks max',
  },
  {
    code: ':VUL',
    oldCode: 'VULNERABILITY',
    label: 'Vulnerability',
    description: 'Vulnerability: Upon incoming damage skill, increase damage taken by 30% for each stack. 3 stacks max',
  },
  {
    code: ':TANKU',
    oldCode: 'TANKUP',
    label: 'Tank Up',
    description: 'Tank Up: Upon incoming damage skill, grant self Armor equal to 10% max Armor for each stack. 3 stacks max',
  },
  {
    code: ':ENHANCE',
    oldCode: 'ENHANCE',
    label: 'Enhance',
    description: 'Enhance: Increase skill power by 30% for each stack. 3 stacks max',
  },
  {
    code: ':TEAR',
    oldCode: 'TEAR',
    label: 'Tear',
    description: 'Tear: Upon cast skill, lose 10% current HP for each stack. 3 stacks max',
  },
  {
    code: ':SHOCKL',
    oldCode: 'SHOCKLOCK',
    label: 'Shock Lock',
    description: 'Shock Lock: Upon turn, grant self 3 stacks Vulnerability and Exhaust',
  },
  {
    code: ':REGEN',
    oldCode: 'REGEN',
    label: 'Regen',
    description: 'Regen: Upon turn, heal self 10% max HP for each stack. 3 stacks max. Remove upon incoming damage skill',
  },
  {
    code: ':POIS',
    oldCode: 'POISON',
    label: 'Poison',
    description: 'Poison: Upon turn, lose 10% of current HP for each stack. 3 stacks max. Remove upon receive Heal',
  },
  {
    code: ':VIGIL',
    oldCode: 'VIGILANCE',
    label: 'Vigilance',
    description: 'Vigilance: Upon incoming damage skill, 30% chance to evade damage for each stack. 3 stacks max',
  },
  {
    code: ':WINDU',
    oldCode: 'WINDEDUP',
    label: 'Winded Up',
    description: 'Winded Up: Upon 4 stacks, grant 1 extra attack (:crossed_swords: x 2.5) for next skill',
  },
  {
    code: ':STUN',
    oldCode: 'STUN',
    label: 'Stun',
    description: 'Stun: Can\'t cast skill. Remove upon incoming damage skill',
  },
  {
    code: ':REFLECT',
    oldCode: 'REFLECT',
    label: 'Reflect',
    description: 'Reflect: Upon incoming damage skill, attacker takes damage equal to the amount of Armor lost.',
  },
  {
    code: ':RAVE',
    oldCode: 'RANTRAVE',
    label: 'Rant Rave',
    description: 'Rant Rave: Select random enemy to Attack instead, increase skill power by 50%.',
  },
  {
    code: ':TAUNT',
    oldCode: 'TAUNT',
    label: 'Taunt',
    description: 'Taunt: Become primary target.',
  },
  {
    code: ':WARCRY',
    oldCode: 'WARCRY',
    label: 'War Cry',
    description: 'War Cry: Increase skill power by 30% for each stack. 3 stacks max. Upon cast skill, grant self 1 stack.',
  },
  {
    code: ':ARMORSHIFT',
    oldCode: 'ARMORSHIFT',
    label: 'Armor Shift',
    description: 'Armor Shift: Upon turn, grant self HP equal to 30% of current Armor for each stack. 3 stacks max.',
  },
  {
    code: ':CHARISMA',
    oldCode: 'CHARISMA',
    label: 'Charisma',
    description: 'Charisma: Increase all allies\' skill power by 30% for each stack. 3 stacks max.',
  },
];

export default Status;
