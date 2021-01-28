const express = require("express");

const Recipe_Ingredients = require("../recipe_ingredients/model");

const router = express.Router();

router.get("/recipe/:id/ingredients", async (req, res, next) => {
    try {
        const ingredientList = await Recipe_Ingredients.getIngredientsList(req.params.id)

        if (!ingredientList) {
            return res.status(404).json({
                Message: "Recipe with specific id does not exsist"
            })
        } 

        res.json(ingredientList);
    } catch (err) {
        next(err);
    }
})

module.exports = router;