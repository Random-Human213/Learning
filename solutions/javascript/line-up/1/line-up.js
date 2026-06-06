//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* attempt 1
export const format = (name, number) => {
  let numberToString = number.toString();
  let lastDigit = numberToString[numberToString.length - 1];
  if (lastDigit == 1)
    let numSuffix = "st";
  elif lastDigit == 2:
    let numSuffix = "nd";
  elif lastDigit == 3:
    let numSuffix = "rd";
  return name + ", you are the " + number + numSuffix + "customer we serve today. Thank you!"
};
*/


/* attempt 2 - "cheating" by using modules not taught before this module yet
export function format(name, number) {
  let numberString = String(number);
  let lastDigit = numberString[numberString.length - 1]; // it's possible to use "String(number).slice(-1)" but I didn't figure it out, so won't use it
  console.log("Last Digit: " + lastDigit);
  let lastTwoDigits = numberString.slice[numberString.length - 2];
  console.log("Last Two Digits: " + lastTwoDigits);
  let numSuffix = "";
  // console.log("Num: " + number, "String: " + String(number).length);
  console.log(lastDigit, lastTwoDigits);
  switch (Number(lastDigit)) { // Forgot to convert back to number from string
    case 1:
      if (lastTwoDigits == 11) {
        numSuffix = "th";
      } else {
        numSuffix = "st";
      }
      break
    case 2:
      numSuffix = "nd";
      break
    case 3:
      numSuffix = "rd";
      break
    default:
      numSuffix = "th";
  }
  return `${name}, you are the ${number}${numSuffix} customer we serve today. Thank you!`
}
*/


// attempt 3

export function format(name, number) {
  let numberString = String(number);
  let digits = numberString.length;
  let lastDigit = numberString[digits - 1];
  console.log("Last Digit: " + lastDigit);
  let last2ndDigit = "";
  if (digits > 1) {
    last2ndDigit = numberString[digits - 2]; // forgot to remove let
    console.log("Last 2nd Digit: " + last2ndDigit);
    }
  let numSuffix = "";
  if (last2ndDigit == 1) {
    if (lastDigit == 1 || lastDigit == 2 || lastDigit == 3 || lastDigit == 0) { // forgot to account for 0
      numSuffix = "th";
    }
  } else {
    if (lastDigit == 1) {
      numSuffix = "st";
    } else if (lastDigit == 2) {
      numSuffix = "nd";
    } else if (lastDigit == 3) {
      numSuffix = "rd";
    } else {
      numSuffix = "th";
    }
    }
  return `${name}, you are the ${number}${numSuffix} customer we serve today. Thank you!`;
}