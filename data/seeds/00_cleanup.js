
exports.seed = async function(knex) {
  await knex("users").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
