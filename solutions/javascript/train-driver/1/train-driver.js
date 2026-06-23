// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */

/* attempt 1
export function getListOfWagons(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  console.log("Input: ", a, b, c, d, e, f, g, h, i, j, k, l, m, n);
  let o = [];
  let listOfWagons = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ...o];
  return listOfWagons;
}
*/

/*
export function getListOfWagons(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
let o = [];
  let list = [a, b, c];
  let extendedList = [d, e, f, g, h, i, j, k, l, m, n];
  return [list, ...extendedList];
}
*/

// attempt 3
export function getListOfWagons(...ids) { // it was this simple and i was overcomplicating it..
  return ids;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */

/* Attemp 1
export function fixListOfWagons(...ids) {
  let firstTwoIDs = [];
  let iDValues = ids.values;
  console.log("iDValues: ", ids.values);
  console.log("Type of IDs: " + typeof(ids));
  console.log("IDs: " + ids);
  console.log("First two IDs: " + firstTwoIDs);
  firstTwoIDs = ids.shift(2);
  console.log(firstTwoIDs);
  ids.push(firstTwoIDs);
  return ids;
}
*/

/* Attempt 1, works, but way too congested
export function fixListOfWagons(...ids) {
  // console.log("IDs: ", ids);
  // console.log("Type of \"IDs\": " + typeof(ids));
  let objArray = ids[0]; // was receiving an object instead of an array, it was an object inside an array
  // console.log("Type of objArray: " + typeof(objArray), "Object Array: ", objArray);
  let IDsArray = objArray.values; // was using () instead of [] for the object
  console.log("Type of IDs Array: " + typeof(IDsArray), "IDs Array: " + IDsArray);
  let firstID = IDsArray.shift(); // .shift(2) didn't work // forgot to update to IDsArray
  let secondID = IDsArray.shift();
  console.log("First Two IDs: ", firstID, " ", secondID);
  console.log("Updated IDsArray: ", IDsArray);
  let newIDs = IDsArray;
  IDsArray.push(firstID);
  IDsArray.push(secondID);
  console.log("New IDs: " + newIDs);
  console.log("Updated IDs Array: ", IDsArray);
  return IDsArray;
}
*/

// attempt 2
export function fixListOfWagons(...ids) { // spent like 20m fixing this while it was already fixed, instead of checking the other one...
  let objArray = ids[0];
  let IDsArray = objArray.values; // forgot to change ids to objArray
  let firstID = IDsArray.shift();
  let secondID = IDsArray.shift();
  IDsArray.push(firstID);
  IDsArray.push(secondID);
  return IDsArray;
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
//  let objArray = ids[0];
  let IDsArray = ids.values;
  console.log("Type of ids: " + typeof(ids));
  console.log("IDs: ", ids);
  console.log("IDsArray: ", IDsArray);
  let firstID = IDsArray[0];
  console.log("firstID: " + firstID);
  let remainingIDs = IDsArray.slice(1); // used [] instead of ()
  console.log("remainingIDs: " + remainingIDs);
  console.log("missingWagons: " + missingWagons);
  let missingWaggonsArray = missingWagons.values;
  let combined = [firstID, ...missingWaggonsArray, ...remainingIDs]; // forgot to add the ... spread operator to turn arrays into values, this was preventing it from running correctly
  console.log("Combined: ", combined);
  return combined;
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  console.log(information, typeof(information));
  console.log(additional, typeof(additional));
  let merged = {...information, ...additional}; // easy enough, forgot about ... again.
  return merged;
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */

/* this is not how it's supposed to be done, but it works? I guess? -- only for the first test
export function separateTimeOfArrival(information) {
  console.log("Information: ", information, typeof(information));
  let removedTime = {
    from: information.from,
    to: information.to,
    precipitation: information.precipitation, // wasn't working because it's not a string, it's a number, and because it's pre, not per
    temperature: information.temperature,
  }
  console.log("information.percipitation: " + information.percipitation);
  console.log("removedTime: ", removedTime);
  let result = [information.timeOfArrival, removedTime]; // I keep forgetting about ... ...
  console.log("Result: " + result);
  return [information.timeOfArrival, removedTime];
}
*/

// attempt 2
export function separateTimeOfArrival(information) {
  const time = information.timeOfArrival;
  let modifiedObj = {...information}; // = information didn't work because it made it modify the original as well
  delete modifiedObj.timeOfArrival;
  return [time, modifiedObj];
}
