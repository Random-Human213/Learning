// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) { // gambling is not good
  return Number(array1.join("")) + Number(array2.join("")); // missing Number() in second one
  console.log(array1.join(""), array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) { // checks if a number is a "palindrome"
  /** attempt 1
  console.log(value);
  // let half = value.slice(value.length / 2); // was .split instead of .slice
  console.log(value.length);
  console.log(value.length / 2);
  console.log(value.slice(value.length / 2));
  return string(half);
  let reversed = half.reverse();
*/
  let numbersString = String(value);
  let numbersArray = numbersString.split(""); // "" was missing from split()
  let digits = numbersArray.length;
  let palindrome; // was missing, and only declared inside the for loop
  for (let i = 0, i2 = digits - 1; i <= (digits / 2) && i2 >= 0; i++, i2--) { // it was i2 = digits instead of i2 = digits - 1
    console.log(value);
    console.log(numbersArray[i], numbersArray[i2]);
    if (numbersArray[i] == numbersArray[i2]) {
      palindrome = true; // didn't remove let here, which redeclared it inside the loop only
    } else {
      palindrome = false;
      continue; // was break instead of continue, which stopped the code
    }
  }
  console.log(palindrome);
  if (palindrome == true) {
    return true;
  } else {
    return false;
  }
}
  

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

/* attempt 1
export function errorMessage(input) {
  console.log(input);
  switch (input) {
    case (null || undefined):
      return "Required Field";
      break
    case (0 || Number(input) == false):
      return "Must be a number besides 0";
      break
    default:
      return "";
  }
}
*/

export function errorMessage(input) {
  console.log("Input: " + input);
  console.log("Number(input): " + Number(input));
  if (input == null || input == undefined || input == "") {
    return "Required field"; // was F instead of f...
  } else if (input == 0 || isNaN(Number(input))) { // was Number(input) == false instead of Number(input) == NaN, then changed to typeof input != "number", then changed to isNaN(number(input)), which fixed it
    return "Must be a number besides 0";
  } else {
    return "";
  }
}