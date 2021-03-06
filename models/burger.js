// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  read: function(cb) {
      orm.allBurgers("burgers", function(res) {
        cb(res);
      });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.addBurger("burgers", name, function(res) {
      cb(res);
    });
  },
  //NEED TO WORK ON THE UPDATE
  update: function(condition, cb) {
    orm.eatBurger("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
