// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let prefix = "NCC-";
  let min = 1000;
  let max = 9999;
  let randomize = Math.ceil(min + Math.random() * (max - min));
  console.log(prefix + randomize);
  return prefix + randomize;
}
  
/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let min = 41000;
  let max = 42000;
  let randomize = min + Math.random() * (max-min);
  return randomize;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planetClasses = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]; // forgot to add "" for strings after copying from the test
  let min = 0;
  let max = planetClasses.length;
  let randomize = Math.floor(min + Math.random() * (max-min));
  console.log(planetClasses[randomize]);
  return planetClasses[randomize];
}
