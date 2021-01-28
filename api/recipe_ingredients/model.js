const db = require("../../data/dbConfig");

function getIngredientsList(id) {
    return db("recipe_ingredients")
        .where("recipe_id", id)
        .innerJoin("recipes", "recipe_id", "recipes.id")
        .innerJoin("ingredients", "ingredients_id", "ingredients.id")
    .select("recipe_id", "recipe.name as Recipe_Name", "ingredients.name as Ingredients_Name", "recipe.instructions as Instruction ")
}

module.export = {
    getIngredientsList,
}