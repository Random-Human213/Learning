//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => { // didn't assign "name" here at first
  console.log(twoFer);
  console.log(name ? name : "you");
  return `One for ${name ? name : "you"}, one for me.`; // added if () in the ternary operator at first, then forgot put "name = true".
};
