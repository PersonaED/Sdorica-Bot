import { standardPrefix } from '../../config';

export const guideCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}guides`) {
    return true;
  }
  return false;
};

export default guideCommand;
