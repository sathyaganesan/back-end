
exports.seed = async function (knex) {
  await knex("roles").truncate();
  await knex("users").truncate();
  await knex("recipe_ingredients").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
