// contactController.js
// Import contact model
Recipe = require('../models/recipe');
const mongoose = require('mongoose');

// Handle index actions
module.exports.index = function (req, res) {
    Recipe.get(function (err, recipes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Recipes retrieved successfully",
            data: recipes
        });
    });
};


// Handle create contact actions
module.exports.new = function (req, res) {
    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId()
    });
    recipe.name = req.body.name ? req.body.name : recipe.name;
    recipe.desc = req.body.desc ? req.body.desc : recipe.desc;
    recipe.duration = req.body.duration ? req.body.duration : recipe.duration;
    recipe.cookingCount = 0;
    recipe.type = req.body.type ? req.body.type : recipe.type;
    recipe.making = req.body.making ? req.body.making : recipe.making;
    recipe.create_date = new Date().toISOString();
    
    // save the contact and check for errors
    recipe.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New recipe created!',
            data: recipe
        });
    });
};

// Handle view contact info
module.exports.view = function (req, res){
    Recipe.findById(req.params.recipe_id, function (err, recipe) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: recipe
        });
    });
};

// Handle update contact info
module.exports.update = function (req, res) {
    Recipe.findById(req.params.recipe_id, function (err, recipe) {
        if (err)
            res.send(err);

        recipe.name = req.body.name ? req.body.name : recipe.name;
        
        // save the contact and check for errors
        recipe.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Contact Info updated',
                data: recipe
            });
        });
    });
};

// Handle delete contact
module.exports.delete = function (req, res) {
    Recipe.remove({
        _id: req.params.recipe_id
    }, function (err, recipe) {
        if (err)
            res.send(err);
        
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};