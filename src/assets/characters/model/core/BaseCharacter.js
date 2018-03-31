class BaseCharacter {
  constructor(name, stat, param) {
    this.name = name;
    this.stat = stat;

    this.name = `${this.name} ${param.tier}: ${param.title}`;
    this.tier = param.tier;
    this.sprite = param.sprite;
    this.passive = param.passive;
    this['1B'] = param['1B'];
    this['2B'] = param['2B'];
    this['4B'] = param['4B'];
    this.advisor = param.advisor;

    this.format = this.format;
    this.getSkillDescription = this.getSkillDescription;
  }

  format(text, power) {
    return text.replace(/:crossed_swords: x (\d+(\.\d+)?)/g, (match, number) => {
      if (Number.isNaN(Number.parseFloat(number))) {
        return match;
      }

      return Math.round(Number.parseFloat(number) * power);
    });
  }

  getSkillDescription(skill, level) {
    let offset = 0;
    if (level.startsWith('+')) {
      offset = Number.parseInt(level.substring(1), 10);
    }

    return this.format(this[skill].description, this.stat.power + (50 * offset));
  }
}

export default BaseCharacter;
