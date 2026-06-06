/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time == 0) {
    return "Lasagna is done."; // forgot a fullstop...
  } else if (time == undefined) {
    return "You forgot to set the timer."
  } else {
    return "Not done, please wait."
  }
}

export function preparationTime(layers, avgTime) {
  if (avgTime == undefined) {
    return layers.length * 2;
  } else {
    return layers.length * avgTime;
  }
}


export function quantities(layers) {
  let noodleLayers = 0;
  let sauceLayers = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] == "noodles") {
      noodleLayers++;
    } else if (layers[i] == "sauce") {
      sauceLayers++;
    }
  }
  let obj = { // was return obj instead of let obj then return
    noodles: noodleLayers * 50, // was mixed with noodleLayers by mistake, should've been sauceLayers, same for below
    sauce: sauceLayers * 0.2,
  }
  return obj;
}

export function addSecretIngredient(friendsList, myList) {
  console.log("FriendsList: " + friendsList);
  console.log("myList: " + myList);
  // console.log("myList.push: " + myList.push(friendsList[friendsList.length - 1])); the console log was modifying the list twice
  myList.push(friendsList[friendsList.length - 1]); // return was missing // was .shift instead of .push // "myList =" was wrongfully added
  console.log("myList: " + myList);
//  "return myList;"" was added while testing, should've removed
}

export function scaleRecipe(recipe, portions) { // recipe is for 2 portions
  let multiplier = portions / 2;
  let scaledRecipe = {  // value = obj is changing the obj to a string // {...recipe} fixes it, but that's not taught in these modules yet, so there's probably another way
    ...recipe
  }
  for (let key in scaledRecipe) { // forgot the object loop, was gonna use an array index "for (let i = 0; i < obj.length; i++)" // forgot to change object to not modify original one
    scaledRecipe[key] = recipe[key] * multiplier;
  }
  console.log("Multiplier: " + multiplier, "Scaled Recipe: " + scaledRecipe);
  console.log(recipe);
  return scaledRecipe;
}