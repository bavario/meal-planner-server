// contactModel.js
const mongoose = require('mongoose');
// Setup schema
const recipeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    duration:  {
        type: Number,
        default: '30',
        required: true
    },
    image: String,
    cookingCount: {
        type: Number,
        default: '0'
    }, 
    type: '',
    ingredients: [{
        name: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    }],
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