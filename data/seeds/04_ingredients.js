
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "All-purpose flour" },
    { name: "Sugar" },
    { name: "Baking Powder" },
    { name: "Ground Cinnamon" },
    { name: "Ground Nutmeg" },
    { name: "Kosher Salt" },
    { name: "Eggs" },
    { name: "Milk" },
    { name: "Butter" },
    { name: "Vanilla extract" },
  ])
};
