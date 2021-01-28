const db = require("../../data/dbConfig");

function getRecipes() {
    return db("recipes");
}

function getRecipeById(id) {
    return db("recipes")
    .where("recipes.id", id)
}

function getInstructions(recipe_id) {
    return db("recipes")
        .where("recipe.id", recipe_id)
    .select("recipes.id", "recipes.name as Recipe_Name", "recipes.instructions as Instruction")
}

module.export = {
    getRecipes,
    getRecipeById,
    getInstructions,
}