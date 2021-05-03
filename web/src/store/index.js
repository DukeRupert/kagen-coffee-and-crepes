import { writable } from "svelte/store";
import { readable } from "svelte/store";

export const mobile = writable(false);

export const dropdown = writable(false);

export const modal = writable(false);

// Data for all Crepes
const crepes = {
  theLemon: {
    src: "../images/crepe_theLemon.jpg",
    alt: "A lemon sugar crepe.",
    title: "The Lemon",
    ingredients: ["lemon", "sugar", "eggs", "dairy", "flour"],
    price: {
      full: "7.00",
      mini: "6.00",
    },
    // nutrition: ['Sugar 4g', 'Fat 2g']
  },
  thePeanutButter: {
    src: "../images/crepe_thePeanutButter.jpg",
    alt: "A peanut butter and banana crepe.",
    title: "The Peanut Butter ",
    ingredients: ["peanut butter", "banana", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    },
  },
  theChocolateRaspberry: {
    src: "../images/crepe_theChocolate.jpg",
    alt: "A chocolate raspberry crepe.",
    title: "The Chocolate",
    ingredients: ["chocolate", "raspberry", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    },
  },
  theNutella: {
    src: "../images/crepe_theNutella.jpg",
    alt: "A strawberry and nutella crepe.",
    title: "The Nutella",
    ingredients: ["Nutella", "strawberry", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    },
  },
  theMixedBerry: {
    src: "../images/crepe_theNutella.jpg",
    alt: "A mixed berry crepe.",
    title: "The Mixed Berry",
    ingredients: [
      "cream cheese",
      "strawberry",
      "blueberries",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "9.00",
      mini: "7.50",
    },
  },
  theEgg: {
    src: "../images/crepe_theEgg.jpg",
    alt: "An egg crepe with hollandaise.",
    title: "The Egg",
    ingredients: ["provolone", "spinach", "eggs", "dairy", "flour"],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theBreakfastInBed: {
    src: "../images/crepe_theAllAmerican.jpg",
    alt: "A Breakfast in Bed crepe.",
    title: "The Breakfast in Bed",
    ingredients: [
      "bacon",
      "cheddar",
      "maple sausage",
      "maple syrup",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theAllAmerican: {
    src: "../images/crepe_theAllAmerican.jpg",
    alt: "An All American crepe.",
    title: "The All American",
    ingredients: ["gravy", "bacon", "cheddar", "eggs", "dairy", "flour"],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theCaprese: {
    src: "../images/crepe_caprese.jpg",
    alt: "A Caprese crepe.",
    title: "The Caprese",
    ingredients: [
      "mozzarella",
      "tomato",
      "arugula",
      "spinach",
      "balsamic",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theChicken: {
    src: "../images/crepe_chicken.jpg",
    alt: "A chicken crepe.",
    title: "The Chicken",
    ingredients: ["chicken", "spinach", "provolone", "eggs", "dairy", "flour"],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theChipotleChicken: {
    src: "../images/crepe_chickenChipotle.jpg",
    alt: "A chipotle chicken crepe.",
    title: "The Chipotle Chicken",
    ingredients: [
      "chicken",
      "cole slaw",
      "tomato",
      "chipotle ranch",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theTurkeyBacon: {
    src: "../images/crepe_turkeyBacon.jpg",
    alt: "A turkey bacon crepe.",
    title: "The Turkey Bacon",
    ingredients: [
      "turkey",
      "bacon",
      "provolone",
      "tomato",
      "spinach",
      "ranch",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theMonteCristo: {
    src: "../images/crepe_monteCristo.jpg",
    alt: "A Monte Cristo crepe.",
    title: "The Monte Cristo",
    ingredients: [
      "ham",
      "turkey",
      "provolone",
      "cheddar",
      "raspberry",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
  theBlackBean: {
    src: "../images/crepe_theBlackBean.jpg",
    alt: "A black bean crepe.",
    title: "The Black Bean",
    ingredients: [
      "black bean",
      "avocado",
      "tomato",
      "spinach",
      "lime",
      "salsa",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    },
  },
};

// Data for all Coffees
const coffeesData = [
  {
    title: "Drip Coffee",
    price: {
      12: "2.00",
      16: "2.25",
      20: "2.50",
    },
  },
  {
    title: "Americano",
    price: {
      12: "3.25",
      16: "3.75",
      20: "4.25",
    },
  },
  {
    title: "Latte",
    price: {
      12: "4.00",
      16: "4.50",
      20: "5.00",
    },
  },
  {
    title: "Mocha",
    price: {
      12: "4.50",
      16: "5.00",
      20: "5.50",
    },
  },
  {
    title: "Chai Tea Latte",
    price: {
      12: "4.50",
      16: "5.00",
      20: "5.50",
    },
  },
  {
    title: "Hot Chocolate",
    price: {
      12: "3.25",
      16: "3.75",
      20: "425",
    },
  },
  {
    title: "Blended Drinks",
    price: {
      12: "4.50",
      16: "5.00",
      20: "5.50",
    },
  },
];

// Data for all Drinks
const drinksData = [
  {
    title: "Bottled Coke",
    price: "$2.00",
  },
  {
    title: "Mineral Water",
    price: "$2.00",
  },
  {
    title: "Redbull",
    price: "$2.00",
  },
  {
    title: "Italian Soda 12oz",
    price: "$5.00",
  },
];

// Object containing all sweet crepes for export
const sweetCrepesData = [
  crepes.theLemon,
  crepes.thePeanutButter,
  crepes.theChocolateRaspberry,
  crepes.theNutella,
  crepes.theMixedBerry,
];

// Object containing all savory crepes for export
const savoryCrepesData = [
  crepes.theEgg,
  crepes.theBreakfastInBed,
  crepes.theAllAmerican,
  crepes.theChicken,
  crepes.theChipotleChicken,
  crepes.theTurkeyBacon,
  crepes.theMonteCristo,
  crepes.theBlackBean,
];

// Export Sweet Crepes
export const sweetCrepes = readable(sweetCrepesData, () => {
  console.log("got a subscriber to sweet crepes");
  return () => console.log("no more subscribers to sweet crepes");
});

// Export Savory Crepes
export const savoryCrepes = readable(savoryCrepesData, () => {
  console.log("got a subscriber to savory crepes");
  return () => console.log("no more subscribers to savory crepes");
});

// Export Coffees
export const coffees = readable(coffeesData, () => {
  console.log("got a subscriber to coffees");
  return () => console.log("no more subscribers to coffees");
});

// Export Drinks
export const drinks = readable(drinksData, () => {
  console.log("got a subscriber to drinks");
  return () => console.log("no more subscribers to drinks");
});
