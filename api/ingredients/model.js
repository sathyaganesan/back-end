const db = require("../../data/dbConfig");

function find() {
    return db("ingredients");
}

function findById(id) {
    return db("ingredients")
        .where("id", id)
    .first()
}

module.exports = {
    find,
    findById,
}