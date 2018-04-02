import Status from './Status';

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

    this.setCharStatus();
  }

  static format(text, power) {
    return text.replace(/:crossed_swords: x (\d+(\.\d+)?)/g, (match, number) => {
      if (Number.isNaN(Number.parseFloat(number))) {
        return match;
      }

      return `:boom:${Math.round(Number.parseFloat(number) * power)}`;
    });
  }

  getSkillDescription(skill, level) {
    let offset = 0;
    if (level.startsWith('+')) {
      offset = Number.parseInt(level.substring(1), 10);
    }

    return BaseCharacter.format(this[skill].description, this.stat.power + (50 * offset));
  }

  setCharStatus() {
    this.statusObj = {};
    this.status = [];
    Status.forEach((status) => {
      this.replaceSkillDescription('1B', status);
      this.replaceSkillDescription('2B', status);
      this.replaceSkillDescription('4B', status);
      this.replaceSkillDescription('advisor', status);
      this.replaceSkillDescription('passive', status);
    });

    Object.keys(this.statusObj).forEach((key) => {
      this.status.push(this.statusObj[key].description);
    });
  }
  replaceSkillDescription(tag, status) {
    this[tag] = {
      name: this[tag].name,
      description: this.insertStatusToSkillDesc(this[tag].description, status)
    };
  }
  insertStatusToSkillDesc(description, status) {
    const temp = description.split(status.code);

    if (temp.length > 1) {
      this.statusObj[status.code] = status;
    }

    return temp.join(status.label);
  }
}

export default BaseCharacter;
