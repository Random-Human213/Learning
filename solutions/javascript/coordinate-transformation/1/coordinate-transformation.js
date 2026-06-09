// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

export function translate2d(dx, dy) {
  let coordX = 0;
  let coordY = 0;
    return function translateObject(coordX, coordY) {
      return [coordX + dx, coordY + dy]; // removed newCoords[] to fix
    };
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) { // still not really sure how this "closure" thingy works // -- now i do, i think
  let scaleX = 0;
  let scaleY = 0;
    return function translateObject(scaleX, scaleY) {
      console.log("sx: " + sx, "sy: " + sy, "scaleX: " + scaleX, "scaleY: " + scaleY);
      return [scaleX * sx, scaleY * sy]; // removed newScale[] to fix
    };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {CallbackType} f the first function to apply
 * @param {CallbackType} g the second function to apply
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */

/* attempt 1
export function composeTransform(f, g) {
  console.log(f);
  console.log(g);
  let step1 = translate2d(f, g);
  let step2 = scale2d(f, g);
  return function combineFunctions(f, g) {
    step1;
    step2;
  }
  return(step1, step2);
}
*/

export function composeTransform(f, g) { // i don't quite understand this
  return function (x, y) {
    const [x1, y1] = f(x, y);
    return g(x1, y1);
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {CallbackType} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {CallbackType} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */


/* attempt 1
export function memoizeTransform(f) {
*/
  // To narrow the type of the return variable, add `/** @type {[number, number]} */` above it.
/*  console.log(f);
  return function memoizedScale(f) {
    let memoizedScale1 = scale2d(f);
    return memoizedScale1;
  }
}
*/

export function memoizeTransform(f) { // i don't quite understand this either
  let lastX = "";
  let lastY = "";
  let lastResult = "";
  return function(x, y) {
    if (x == lastX && y == lastY) {
      return lastResult;
    }
    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  };
}
