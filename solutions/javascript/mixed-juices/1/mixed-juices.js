// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) { // forgot to add preparation time for all other drinks // can be resolved using objects but they're not taught in the modules up until this point
  let juices = ["Pure Strawberry Joy", "Energizer", "Green Garden", "Tropical Island", "All or Nothing"];
  let juiceTimes = [0.5, 1.5, 1.5, 3, 5];
  let index = juices.indexOf(name); // indexOf is not mentioned in the learning modules yet
  let time = 0;
  /* source of mistake was here */
  if (juices.includes(name) == true) { // was "if (name in juices)""
    time = juiceTimes[index];
  } else {
    time = 2.5;
  }
  console.log(juices, juiceTimes, name, index, time);
  return time;
}

// **mistake:** was looking at "test 3" as question 3 instead of question 1, didn't notice it was giving an error for the third test in question 1, and was checking for task 3 the whole time, prevented progress for some time

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let limesToCut = 0;
  for (let i = 0;i < limes.length && wedges < wedgesNeeded; i++) { // wedges was put here incorrectly, "closure"
    console.log(wedgesNeeded, wedges, i);
    limesToCut++;
    switch (limes[i]) {
      case "small":
        wedges += 6;
        break;
      case "medium":
        wedges += 8;
        break;
      case "large":
        wedges += 10;
        break;
      default:
        wedges = 0;
    }
  }
  return limesToCut; // forgot to return required limes
}

/* attempt 2 to try to solve test 3 undefined
export function limesToCut(wedgesNeeded, limes) {
  for (let i = 0, wedges = 0;i < limes.length && wedges < wedgesNeeded; i++) {
    if (limes[i] = "small") {
        wedges += 6;
    } else if (limes[i] = "medium") {
      wedges += 8;
    } else if (limes[i] = "large") {
      wedges += 10;
    } else {
      return null;
    }
  }
}
*/

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

/* attempt 1 */ // was flawsless, wasted so much time on it due to the task/test misread mistake
export function remainingOrders(timeLeft, orders) { // this assumes she's a machine and needs 0 breaks, has 0 error margin, and is not a human
  let ordersThatCanBePrepared = 0;
  for (let i = 0, requiredTime = 0; i < orders.length && requiredTime < timeLeft; i++) {
    requiredTime += timeToMixJuice(orders[i]);
    console.log("Required time: " + requiredTime);
    console.log("Juice and Time Required to Mix: " + orders[i] + ", " + timeToMixJuice(orders[i]));
    ordersThatCanBePrepared++;
    console.log("Orders that can be prepared: ", ordersThatCanBePrepared);
  }
  return orders.slice(ordersThatCanBePrepared);
  return "test";
} // this keeps giving "undefined", idk why

/* attempt 2
export function remainingOrders(timeleft, orders) {
  console.log(timeleft);
  console.log(orders);
  return "test";
  let juiceTime = 0;
  let preparedOrders = 0;
  for (let i = 0; i < orders.length && juiceTime <= timeleft; i++) { // was , instead of &&
    juiceTime += timeToMixJuice(orders[i]);
    preparedOrders++;
  }
  return orders.slice(preparedOrders); // was [] instead of ()
}
*/