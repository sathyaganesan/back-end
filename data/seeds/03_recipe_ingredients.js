exports.seed = async function(knex) {
  await knex("recipe_ingredients").insert([
    {recipe_id: 1, ingredients_id: 1, quantity: "2-Cups"},
    {recipe_id: 1, ingredients_id: 2, quantity: "1-1/2-Cups"},
    {recipe_id: 1, ingredients_id: 3, quantity: "2-tsp"},
    {recipe_id: 1, ingredients_id: 4, quantity: "1-tsp"},
    {recipe_id: 1, ingredients_id: 5, quantity: "1/2-tsp"},
    {recipe_id: 1, ingredients_id: 6, quantity: "1/2-tsp"},
    {recipe_id: 1, ingredients_id: 7, quantity: "1-No"},
    {recipe_id: 1, ingredients_id: 8, quantity: "1-1/4-Cups"},
    {recipe_id: 1, ingredients_id: 9, quantity: "2-tbsp"},
    {recipe_id: 1, ingredients_id: 10, quantity: "2-tsp"},
  ])
}
