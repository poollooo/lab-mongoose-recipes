const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { Schema } = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

const myOwnRecipe = {
  title: 'Best Tiramisu ever',
  level: 'Amateur Chef',
  ingredients: ['1 cup of flour', '1 cup of sugar', '1 cup of milk'],
  cuisine: 'Italian',
  dishType: 'Pasta',
  image: 'https://images.media-allrecipes.com/images/75131.jpg',
  duration: 30,
  creator: 'Bob',
  createdAt: Date.now(),
}

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(async () => {
    // Run your code here, after you have insured that the connection was made

    // iteration 2
    // const myRecipe = Recipe.create(myOwnRecipe);

    // iteration 3
    // const newRecipe = Recipe.create(data);
    // console.log('myOwnRecipe is : ', myOwnRecipe.title)

    // iteration 4
    const updateRecipe2 = await Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 }
    )
    console.log(`updateRecipe is : it's a fucking successssss`, updateRecipe2)

    // iteration 5
    const deleteCarrotCake = await Recipe.deleteOne({ title: 'Carrot Cake' })
    // iteration 6
    console.log('Disconnected from mongo')
    await mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
