// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  let double = deck.map(deck => deck * 2); // used deck.pass at first
  return double;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
/* attempt 1
  let triplicate = deck.map((deck == 3) => (deck.splice(deck[deck], 0, "3", "3"));
  return triplicate;
*/

// attempt 2
  let triplicate = deck.map(card => card == 3 ? [3, 3, 3] : card);
  return triplicate.flat(); // didn't add ()
  
/* attempt 3
  deck.map(card => card == 3 ? deck.push(3, 3, 3) : card);
  console.log(deck);
*/
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.splice(4, 2);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  console.log("Deck: ", deck);
  let first = deck.splice(0, 1);
  console.log("First: ", first);
  let last = deck.splice(deck.length - 1, 1); // used .length() at first
  console.log("Last: ", last);
  let cards = deck.length / 2;
  deck.splice(cards, 0, last, first); // was mistakingly assinging a value to .splice, which results in .splice, not the modified array, because it's "pure"
  console.log("Result: ", deck);
  return deck.flat(); // forgot () again
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
/* attempt 1
  let twos = deck.map(card => card == 2);
  return twos;
*/
  let twos = deck.filter(card => card ==2);
  return twos;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  console.log("Deck: " + deck, "Sorted Deck: " + deck.sort());
  /* attempt 1
  return deck.sort(); // doesn't work because "10" comes before "2" in strings
  */
  return deck.sort((a, b) => a-b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
