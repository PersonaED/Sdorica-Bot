export const getRandomInt = (min, max) => {
  const Nmin = Math.ceil(min);
  const Nmax = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (Nmax - Nmin)) + Nmin;
};

export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
