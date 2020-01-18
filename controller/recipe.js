// contactController.js
// Import contact model
Recipe = require('../models/recipe');

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
    const recipe = new Recipe();
    recipe.name = req.body.name ? req.body.name : recipe.name;
    
    // save the contact and check for errors
    recipe.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
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