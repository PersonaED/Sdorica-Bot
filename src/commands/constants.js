import { characters as JSONcharacter } from '../assets';

const { yanbo, ...rest } = JSONcharacter;
export const characterMap = {
  ...rest,
  'yan-bo': yanbo,
};
