// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let i=0;i < birdsPerDay.length; i++) {
    totalBirds = totalBirds + birdsPerDay[i];
  };
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weeklyBirds = 0;
  for (let i = (week * 7) - 7;i < week * 7; i++) { // tried with i and b indexes, then switched to multiplication
    weeklyBirds = weeklyBirds + birdsPerDay[i]; // left == instead of =, caused 0 (false)
    console.log("Weekly Birds: " + weeklyBirds);
    console.log("i = " + i);
    console.log ("BirdsPerDay i = " + birdsPerDay[i]);
  };
  return weeklyBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  console.log(birdsPerDay);
  for (let i=0;i < birdsPerDay.length; i += 2) { // didn't realize it was every *second* day, execution was correct but result was wrong. It was i++1
    birdsPerDay[i] += 1;
    console.log ("birdsPerDay[i]: " + birdsPerDay[i]);
  }
  return birdsPerDay;
}
