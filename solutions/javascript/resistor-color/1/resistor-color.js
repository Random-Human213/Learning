//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* attempt 1
export const colorCode = (color) => {
  let colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  let resistance = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // colors = resistance;
  let black, brown, red, orange, yellow, green, blue, violet, grey, white;
  [black, brown, red, orange, yellow, green, blue, violet, grey, white] = resistance;
  console.log(brown);
  console.log(color);
  return colors[color];
};

export const COLORS = undefined;

*/

export const colorCode = (color) => {
  let colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
  }
  console.log(color);
  // console.log(colors);
  console.log(colors.color);
  return colors[color]; // colors.color doesn't work because it's a variable, not just a key, i guess? so dot notation doesn't work here apparently
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];