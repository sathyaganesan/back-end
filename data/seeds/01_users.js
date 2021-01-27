//Pre-hashed password for "abc123"
const hashedPassword = "$2a$12$gidvflLXiaXpoNrYsLGFe.f2vwJPIERvmb8LP0FgYzeyjeQMpK0Va";

exports.seed = async function(knex) {
  await knex("users").insert([
    { id: 1, username: "vicky", password: hashedPassword },
    { id: 2, username: "Nelson", password: hashedPassword },
    { id: 3, username: "John", password: hashedPassword },
    { id: 4, username: "Noah", password: hashedPassword }
  ])
};
