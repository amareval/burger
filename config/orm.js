// Import MySQL connection.
var connection = require("./connection.js");



var orm = {
    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    allBurgers: function(tableName, cb) {
      var s = "SELECT * FROM " + tableName;
  
      connection.query(s, function(err, result) {
        cb(result);
      });
    },
  
    // Here our ORM is creating a simple method for adding characters to the database
    // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
    addBurger: function(tableName, name, cb) {
      var queryString = "INSERT INTO " + tableName;

      var routeName = character.name.replace(/\s+/g, "").toLowerCase();
      console.log(routeName);
  
      var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";
  
      connection.query(s, [name], function(
        err,
        result
      ) {
        cb(result);
      });
    },
        // NEED TO UPDATE THIS , NOT CORRECT
     update: function(tableName, devoured, cb) {
    var queryString = "UPDATE " + tableName;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
        });
    }
  };


// Export the orm object for the model (cat.js).
module.exports = orm;
