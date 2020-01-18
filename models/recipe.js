// contactModel.js
const mongoose = require('mongoose');
// Setup schema
const ingredientSchema = {};

const recipeSchema = mongoose.Schema({
    _id: mongoose.ObjectId,
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    duration:  {
        type: Int32,
        default: '30',
        required: true
    },
    image: String,
    cookingCount: {
        type: Int32,
        default: '0'
    }, 
    type: '',
    ingredients: [ingredientSchema],
    making: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
const Recipe = module.exports = mongoose.model('recipe', recipeSchema);

module.exports.get = function (callback, limit) {
    Recipe.find(callback).limit(limit);
}