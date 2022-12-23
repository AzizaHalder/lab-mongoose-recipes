const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const { findOneAndUpdate } = require("./models/Recipe.model");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then((result) => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({
      title: "Jollof Rice",
      level: "Amateur Chef",
      ingredients: [
        "For the meat:",
        "750 to 800g (1 1/3 lbs) lamb (or beef)",
        "½ an onion",
        "1 scotch bonnet pepper (habanero is a good substitute)*",
        "1 bouillon cube**",
        "3 whole cloves (roughly 1/4 tsp ground)",
        "For the rice:",
        "4 Tablespoon oil",
        "1 large onion, diced",
        "2 cloves garlic, minced",
        "1 inch fresh ginger, grated",
        "1 scotch bonnet pepper (habanero pepper)*, chopped",
        "1 Tablespoon tomato puree (tomato paste)",
        "6 large, fresh tomatoes or 1 and ½ cans of tomato, chopped",
        "1 seasoning cube/bouillon cube** (or salt to taste)",
        "1 teaspoon thyme",
        "2 cups long grain rice (Thai jasmine)",
        "2 cups hot water or stock/broth**",
        "½ cup mixed carrots and peas (thawed if frozen or fresh)",
        "A round of parchment paper that fits inside your cooking pot (see step 11)",
      ],
      cuisine: "African",
      dishType: "main course",
      image:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2021/07/Jollof-Rice-06.2.jpg.webp",
      duration: 65,
      creator: "Chef Freda",
    });
    // where should I place this console.log?
    console.log(result.Recipe.title);
  })
  .then(() => {
    Recipe.insertMany([
      {
        title: "Asian Glazed Chicken Thighs",
        level: "Amateur Chef",
        ingredients: [
          "1/2 cup rice vinegar",
          "5 tablespoons honey",
          "1/3 cup soy sauce (such as Silver Swan®)",
          "1/4 cup Asian (toasted) sesame oil",
          "3 tablespoons Asian chili garlic sauce",
          "3 tablespoons minced garlic",
          "salt to taste",
          "8 skinless, boneless chicken thighs",
        ],
        cuisine: "Asian",
        dishType: "main course",
        image:
          "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
        duration: 40,
        creator: "Chef LePapu",
      },
      {
        title: "Orange and Milk-Braised Pork Carnitas",
        level: "UltraPro Chef",
        ingredients: [
          "3 1/2 pounds boneless pork shoulder, cut into large pieces",
          "1 tablespoon freshly ground black pepper",
          "1 tablespoon kosher salt, or more to taste",
          "2 tablespoons vegetable oil",
          "2 bay leaves",
          "2 teaspoons ground cumin",
          "1 teaspoon dried oregano",
          "1/4 teaspoon cayenne pepper",
          "1 orange, juiced and zested",
        ],
        cuisine: "American",
        dishType: "main course",
        image:
          "https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg",
        duration: 160,
        creator: "Chef John",
      },
      {
        title: "Carrot Cake",
        level: "Amateur Chef",
        ingredients: [
          "6 cups grated carrots",
          "1 cup brown sugar",
          "1 cup raisins",
          "4 eggs",
          "1 1/2 cups white sugar",
          "1 cup vegetable oil",
          "2 teaspoons vanilla extract",
          "1 cup crushed pineapple, drained",
          "3 cups all-purpose flour",
          "1 1/2 teaspoons baking soda",
          "1 teaspoon salt",
          "4 teaspoons ground cinnamon",
        ],
        cuisine: "International",
        dishType: "dessert",
        image:
          "https://images.media-allrecipes.com/userphotos/720x405/3605684.jpg",
        duration: 130,
        creator: "Chef Nadia",
      },
      {
        title: "Rigatoni alla Genovese",
        level: "Easy Peasy",
        ingredients: [
          "2 pounds red onions, sliced salt to taste",
          "2 (16 ounce) boxes uncooked rigatoni",
          "1 tablespoon chopped fresh marjoram leaves",
          "1 pinch cayenne pepper",
          "2 tablespoons freshly grated Parmigiano-Reggiano cheese",
        ],
        cuisine: "Italian",
        dishType: "main course",
        image:
          "https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg",
        duration: 220,
        creator: "Chef Luigi",
      },
      {
        title: "Chocolate Chip Cookies",
        level: "Amateur Chef",
        ingredients: [
          "1/2 cup light brown sugar",
          "1 large egg",
          "2 tablespoons milk",
          "1 1/4 teaspoons vanilla extract",
          "2 cups semisweet chocolate chips",
        ],
        cuisine: "French",
        dishType: "dessert",
        image:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85",
        duration: 30,
        creator: "Chef Jennifer",
      },
    ]);
  })
  // Where can I use console.log the title field?
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
