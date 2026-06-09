/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */

/* attempt 1
export function onSuccess() {
  console.log(notify);
  let success = {
    message: "SUCCESS",
  }
  function inStock(success) {
    return test(success);
  }
  if (notify = true) {
    return success;
  } else {
    return "fail";
  }
}
*/

export function onSuccess() {
  notify({message: "SUCCESS"}); // test wording was un-understandable at first
}

/**
 * @return void
 */
export function onError() {
  notify({message: "ERROR"});
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) { // "API Wrapper" huh? what wrapping?
  order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
  console.log(quantity);
  console.log(variety); // console.log(order(...)) was causing errors
  orderFromGrocer({variety, quantity}, onSuccess, onError);
}
