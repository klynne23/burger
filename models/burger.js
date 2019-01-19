// require the ORM constructor to create new burger object
const ORM = require("../config/orm.js");

const burger = new ORM("burgers");

module.exports = burger;