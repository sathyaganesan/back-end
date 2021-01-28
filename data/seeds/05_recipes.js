
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Cinnamon Baked Doughnuts", instruction: "Preheat the oven to 350 degrees. Spray 2 doughnut pans well. Into a large bowl, sift together the flour, sugar, baking powder, cinnamon, nutmeg, and salt. In a small bowl, whisk together the egg, milk, melted butter, and vanilla. Stir the wet mixture into the dry ingredients until just combined.Spoon the batter into the baking pans, filling each one a little more than three-quarters full. Bake for 17 minutes, until a toothpick comes out clean. Allow to cool for 5 minutes, then tap the doughnuts out onto a sheet pan. For the topping, melt the 8 tablespoons of butter in an 8-inch saute pan. Combine the sugar and cinnamon in a small bowl. Dip each doughnut first in the butter and then in the cinnamon sugar, either on one side or both sides." },
  ])
};


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
};

exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "donut", instruction: "Mix together"},
    
  ])
};
