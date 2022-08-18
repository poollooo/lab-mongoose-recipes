const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: Schema.Types.String, required: true, unique: true },
  level: { type: Schema.Types.String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: Schema.Types.Array,
  cuisine: { type: Schema.Types.String, required: true },
  dishType: Schema.Types.String,
  image: {
    type: Schema.Types.String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Schema.Types.Number,
    strict: false,
    min: 0,
  },
  creator: Schema.Types.String,
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
