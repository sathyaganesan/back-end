// Update with your config settings.

const sharedConfig = {
  client: "sqlite3",
  migrations: { directory: "./data/migrations" },
  pool: { afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done)},
}

module.exports = {

  development: {
    ...sharedConfig,
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipe.db3",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    ...sharedConfig,
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipeTesting.db3"
    },
    seeds: {
      directory: "./data/seeds"
    },
  },

};
