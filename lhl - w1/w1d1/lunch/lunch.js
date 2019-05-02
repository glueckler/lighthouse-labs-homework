
function whatToDoForLunch(hungry, aT) {

  switch (hungry) {
    case true:
      if ( aT < 20 ) console.log("Pick something up and eat it in the lab");
      else if (aT >= 20 && aT < 30) console.log("Try a place nearby");
      else console.log("This is bootcamp common!");
    break;

    default:
      console.log("Back to work dude.. you're not even hungry..")

  }

}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
