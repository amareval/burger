// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    allBurgers: function(cb) {
    orm.allBurgers("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(tableName, name, cb) {
    orm.create("burgers", name, function(res) {
      cb(res);
    });
  },
  //NEED TO WORK ON THE UPDATE
  update: function(name, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
